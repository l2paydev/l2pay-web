import { type PropsWithChildren } from 'react';
import WithNavBar from '@/components/withNavBar';

const PartialLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <WithNavBar />
      <div className="flex h-screen w-full flex-col ">{children}</div>
    </>
  );
};
export default PartialLayout;
