'use client';
import { useQRCode } from 'next-qrcode';
import { type FC, type PropsWithChildren } from 'react';
import { memo } from 'react';
import { Skeleton } from '../Skeleton/Skeleton';
import { useIsMounted } from '@/hooks';

type QRCodeProps = {
  url?: string;
};

const QRCode: FC<PropsWithChildren<QRCodeProps>> = memo(({ url }) => {
  const { Canvas } = useQRCode();
  const isMounted = useIsMounted();
  if (!isMounted || !url) return <Skeleton className="size-40" />;
  return (
    <div className="flex aspect-square size-40 items-center justify-center rounded-2xl bg-black">
      <Canvas
        text={url}
        options={{
          errorCorrectionLevel: 'L',
          margin: 0.5,
          scale: 2,
          width: 130,
          color: {
            dark: '#000000',
            light: '#ffffff',
          },
        }}
      />
    </div>
  );
});

export default QRCode;
