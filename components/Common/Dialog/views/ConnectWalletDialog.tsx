'use client';
import { Connector, useConnect } from '@starknet-react/core';
import Image from 'next/image';
import { Button } from '@/components/Common/Button/Button';
import { GenericDialog } from '@/components/Common/GenericDialog/GenericDialog';
import { useDialog } from '@/hooks';

const ConnectWalletDialog = () => {
  const { dialogs, closeDialog } = useDialog();
  const { connect, connectors, isPending } = useConnect();
  const handleActions = {
    connectWallet: (connector: Connector) => {
      connect({ connector });
      closeDialog('CONNECT_WALLET');
    },
  };

  return (
    <GenericDialog
      className="gap-2.5"
      title="Connect Wallet"
      open={!!dialogs['CONNECT_WALLET']}
      onOpenChange={() => closeDialog('CONNECT_WALLET')}
    >
      <div className=" w-full max-w-lg rounded-2xl bg-linear-3 p-[1px]">
        <div className="size-full space-y-4 rounded-2xl bg-dark-0 p-6">
          <div className="flex flex-col gap-2">
            {connectors.map((connector: Connector) => {
              return (
                <Button
                  isLoading={isPending}
                  key={connector.id}
                  onClick={async () => handleActions.connectWallet(connector)}
                  disabled={!connector.available()}
                >
                  <div className="flex items-center gap-4">
                    {connector.icon.light && (
                      <Image
                        width={40}
                        height={40}
                        src={connector.icon.dark as string}
                        alt="image"
                        className="size-10"
                      />
                    )}
                    <p className="text-lg  text-dark-0">
                      Connect {connector.name}
                    </p>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </GenericDialog>
  );
};

export default ConnectWalletDialog;
