'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { type Modal, useModalStore } from 'stores/modalStore';

const ConnectWalletDialog = dynamic(
  () => import('./views/ConnectWalletDialog'),
  {
    loading: Placeholder,
  }
);
export function Dialogs() {
  const dialogs = useModalStore(s => s.dialogs);
  return (
    <>
      {Object.entries(dialogs).map(([key, value]) => {
        return (
          <React.Fragment key={key}>
            {value && <DialogsFactory key={key} type={key as Modal} />}
          </React.Fragment>
        );
      })}
    </>
  );
}

function DialogsFactory({ type }: { type: Modal }) {
  const modalViews = {
    CONNECT_WALLET: <ConnectWalletDialog />,
  };
  return modalViews[type] || null;
}

function Placeholder() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm transition-all duration-100"></div>
  );
}
