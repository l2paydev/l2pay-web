'use client';
import Address from '@/components/Address';
import { Button } from '@/components/Common/Button/Button';
import { GenericDialog } from '@/components/Common/GenericDialog/GenericDialog';
import { Skeleton } from '@/components/Common/Skeleton/Skeleton';
import Link from '@/components/Link';
import WithQRCode from '@/components/withQRCode';
import WithStatusPayment from '@/components/withStatusPayment';
import { routes } from '@/configs';
import { useRateUsdQuery } from '@/data';
import { useDialog, useIsMounted, usePathname } from '@/hooks';
import { erc20ABI } from '@/libs';
import { PaymentDetail } from '@/types/payment';
import { convertNumberToBigInt, formatNumber, getAdd } from '@/utils';
import {
  useAccount,
  useBalance,
  useContract,
  useContractWrite,
  useNetwork,
  useWaitForTransaction,
} from '@starknet-react/core';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { toast } from 'sonner';
import { uint256 } from 'starknet';
import PaymentInfo from './PaymentInfo';
interface PaymentProcessingProps {
  paymentInfo: PaymentDetail;
  paymentId: string;
  loading: boolean;
}

const PaymentProcessing = ({
  paymentId,
  paymentInfo,
  loading,
}: PaymentProcessingProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { openDialog } = useDialog();
  const isMounted = useIsMounted();
  const { chain } = useNetwork();
  const { ethInfo } = useRateUsdQuery();
  const { prices } = ethInfo || {};
  const { USD = 0 } = prices || {};
  const {
    network,
    pay_wallet,
    value = 0,
    state,
    tx_hash,
    ...restInfoPayment
  } = paymentInfo || {};

  const { data: nativeBalance, error } = useBalance({
    address,
    watch: true,
    enabled: !!address,
  });
  const { decimals = 18, symbol = 'ETH' } = nativeBalance || {};
  const { contract } = useContract({
    abi: erc20ABI,
    address: chain.nativeCurrency.address,
  });

  const amountUsd = formatNumber(+value * +USD) || 0;
  const calls = useMemo(() => {
    if (!address || !contract || !value || !decimals || !pay_wallet) return [];
    const amountBigint = convertNumberToBigInt(value, decimals as number);
    const amount = uint256.bnToUint256(amountBigint);
    return contract.populateTransaction['transfer']!(pay_wallet, amount);
  }, [contract, address, value, decimals, pay_wallet]);

  const {
    write,
    reset,
    data: tx,
    isPending: isSubmitting,
  } = useContractWrite({
    calls,
    onError(error) {
      console.log('error', error);
      toast.error(error?.message);
    },
  });

  const { data: receipt, isLoading } = useWaitForTransaction({
    hash: tx?.transaction_hash,
    watch: true,
    retry: true,
    refetchInterval: 2000,
  });
  const handleActions = {
    payWithWallet: () => openDialog('CONNECT_WALLET'),
    sendTransaction: () => (receipt ? reset() : write()),
  };
  const connected = isConnected && !!address;
  const isDisabledBtn =
    !address || isSubmitting || isLoading || state === 'EXPIRED';

  const isSuccessPayment = state === 'SUCCEED';
  // useEffect(() => {
  //   if (state === 'SUCCEED') toast.success('Payment Success');
  // }, [state]);
  const linkScan = `${chain?.explorers?.starkscan}/tx/${tx_hash}`;
  const isLoader = !isMounted || loading;

  return (
    <>
      <GenericDialog
        className="gap-2.5"
        title="Payment status"
        open={pathname === `${routes.payment}/${paymentId}`}
        onOpenChange={() => router.push(routes.home)}
      >
        <WithStatusPayment status={state} className="absolute right-9 top-7 " />
        <div className=" w-full max-w-lg  rounded-2xl bg-linear-3 p-[1px]">
          <div className="h-full w-full space-y-4 rounded-2xl bg-dark-0 p-6">
            <div className="flex w-full gap-4">
              <div className="w-fit">
                <WithQRCode amount={value} beneficiaryAddress={pay_wallet} />
              </div>
              <div className="flex w-full flex-col gap-2">
                <div className="flex h-6 w-full items-center justify-between gap-2 ">
                  {isLoader ? (
                    <Skeleton className="h-5 w-full" />
                  ) : (
                    <>
                      <span className="text-base  font-bold text-dark-3 underline underline-offset-4">
                        <span className="text-white ">Network</span>
                      </span>
                      <span className="rounded-md bg-primary-3/40 p-[5px]  text-sm uppercase leading-none text-white">
                        {network}
                      </span>
                    </>
                  )}
                </div>
                <div className="">
                  {isLoader ? (
                    <>
                      <Skeleton className="mb-2 h-3 w-2/3" />
                      <Skeleton className="h-10 w-full" />
                    </>
                  ) : (
                    <>
                      <div className="flex w-full items-center justify-between gap-2  ">
                        <span className="text-base font-bold  leading-5  text-white  underline-offset-8">
                          Amount
                        </span>
                        <span className=" text-base leading-5  text-white">
                          ~{amountUsd} USD
                        </span>
                      </div>
                      <div className="flex h-8 w-full items-center rounded-md border-black bg-black px-2  py-2 text-white ">
                        <span>
                          {formatNumber(value, 4)} {symbol}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <Address isLoading={isLoader}>{pay_wallet}</Address>
              </div>
            </div>
            {isLoader ? (
              <>
                <Skeleton className="h-[60px] w-full" />
              </>
            ) : (
              <>
                {isSuccessPayment ? (
                  <Link
                    className="mt-4 flex items-center justify-center py-4 font-bold text-blue-600 decoration-transparent transition-all	duration-200 hover:underline hover:decoration-blue-600 hover:underline-offset-4"
                    target="_blank"
                    href={linkScan}
                  >
                    {getAdd(tx_hash, 12)}
                  </Link>
                ) : (
                  <>
                    {connected ? (
                      <Button
                        onClick={handleActions.sendTransaction}
                        disabled={isDisabledBtn}
                        isLoading={isSubmitting || isLoading}
                        className="w-full"
                        size="xl"
                      >
                        Continue
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={handleActions.payWithWallet}
                          className="w-full"
                          size={'xl'}
                        >
                          Pay with wallet
                        </Button>
                      </>
                    )}
                  </>
                )}
              </>
            )}
            <PaymentInfo loading={loading} paymentInfo={restInfoPayment} />
          </div>
        </div>
      </GenericDialog>
    </>
  );
};

export default PaymentProcessing;
