import { type PropsWithChildren } from 'react';

import WithFooter from '@/components/withFooter';
import WithNavBar from '@/components/withNavBar';

const NormalLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="flex flex-col ">
        <WithNavBar />
        <div className="size-full ">{children}</div>
        <WithFooter />
      </div>
    </>
  );
};
export default NormalLayout;
