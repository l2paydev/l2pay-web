import type { Metadata } from 'next';
import { siteConfig } from '@/configs';
import PaymentView from '@/views/payment';


export const metadata: Metadata = {
  title: `Payments`,
  description: siteConfig.description,
};

type PaymentPageProps = {
  params: {
    id: string;
  };
};
const PaymentPage = ({ params: { id } }: PaymentPageProps) => {
  return (
    <>
      <PaymentView paymentId={id} />
    </>
  );
};

export default PaymentPage;
