'use client';
import { mainnet } from '@starknet-react/chains';
import { useAccount, useNetwork } from '@starknet-react/core';
import { type FC, type PropsWithChildren, useMemo } from 'react';
import { transfer } from 'starknet-url';
import QRCode from './Common/QrCode';

export const STARKNET_ETH =
  '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7';

type QRCodeProps = {
  beneficiaryAddress?: string;
  amount?: number;
};

const WithQRCode: FC<PropsWithChildren<QRCodeProps>> = ({
  beneficiaryAddress,
  amount,
}) => {
  const { chainId = mainnet.id } = useAccount();
  const { chain } = useNetwork();
  const { nativeCurrency } = chain || {};
  const { address: addressNative = STARKNET_ETH } = nativeCurrency || {};
  const url = useMemo(() => {
    if (chainId && addressNative && beneficiaryAddress && amount) {
      return transfer(beneficiaryAddress, {
        token: {
          token_address: addressNative,
          chainId: chainId?.toString(16),
        },
        amount: amount,
      });
    }
  }, [chainId, addressNative, beneficiaryAddress, amount]);

  return <QRCode url={url} />;
};

export default WithQRCode;
