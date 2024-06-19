'use client';
import { PropsWithChildren } from 'react';
import ReactQueryProvider from './react-query.provider';
import StarknetProvider from './starknet.provider';
import { Toaster } from 'sonner';
import { Dialogs } from '@/components/Common/Dialog/DialogContainer';
import NextTopLoader from 'nextjs-toploader';
const MainProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NextTopLoader
        easing="ease-in-out"
        shadow="0 0 5px #F2994A,0 0 2px #F2994A"
        color="#5955F2"
        zIndex={1600}
        showSpinner={false}
      />
      <ReactQueryProvider>
        <StarknetProvider>
          {children}
          <Dialogs />
          <Toaster richColors position="top-right" />
        </StarknetProvider>
      </ReactQueryProvider>
    </>
  );
};

export default MainProvider;
