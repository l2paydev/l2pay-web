import { cn } from '@/utils';
import Image from 'next/image';
import img1 from '~/static/images/setup/1.png';
import img2 from '~/static/images/setup/2.png';

export function AdvantagesSection({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'layout-container mx-auto mt-56  w-full flex-col items-center justify-center  py-20 ',
        className
      )}
    >
      <div className="relative -top-20  text-right">
        <h2 className="text-[40px] font-bold leading-[84px]">
          <span className="text-white">L2Pay</span> &nbsp;
          <span className="bg-linear-1 bg-clip-text text-transparent ">
            Advantages
          </span>
        </h2>
      </div>
      <div className="flex items-start gap-[108px]">
        <div className="relative">
          <div className="absolute -top-[45%] z-10">
            <Image
              src={img1}
              width={460}
              sizes="460px"
              height={460}
              alt="incentive-fees-img"
            />
          </div>
          <div className="relative flex aspect-[411/453] max-w-[411px] flex-col justify-end bg-card-setup bg-cover bg-no-repeat">
            <div className=" px-[60px] py-8  text-center text-white">
              <h3 className="mb-4 text-4xl font-extrabold">Incentive fees</h3>
              <p className=" text-xl">
                Competitive fee for all transactions. With L2PAY, customers just
                need to pay 0.5%. PAY LESS WITH L2PAY
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex aspect-[761/344] max-w-[761px]  flex-col justify-end rounded-[24px] bg-card-setup-1 bg-cover bg-no-repeat p-10">
          <div className=" text-start text-white">
            <h3 className="mb-4 text-4xl font-extrabold">
              Various Cryptocurrencies
            </h3>
            <p className=" pr-24 text-xl">
              Start with the most popular stable coin USDT. L2PAY will bring
              hundred of other cryptocurrencies on the platform to fulfill the
              needs and wants of users.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[121px] flex items-start gap-[108px]">
        <div className="relative flex aspect-[761/344] max-w-[761px]  flex-col justify-end rounded-[24px] bg-card-setup-2 bg-cover bg-no-repeat p-10">
          <div className=" text-start text-white">
            <h3 className="mb-4 text-4xl font-extrabold">Pay Instantly</h3>
            <p className=" pr-24 text-xl">
              Ease to import your wallet and receive instant funds directly.
              With one click, the process will be executed by ZK Pay with zero
              wait.
            </p>
          </div>
        </div>
        <div className="relative flex aspect-[411/453] max-w-[411px] flex-col justify-start bg-card-setup bg-cover bg-no-repeat">
          <div className=" px-[60px] py-8  text-center text-white">
            <h3 className="mb-4 text-4xl font-extrabold">Smart Control</h3>
            <p className=" text-xl">
              L2Pay provides smart dashboard in order to keep track with all
              activities that made with our platform.
            </p>
          </div>
          <div className="absolute -bottom-[45%] left-1/2 z-10 h-full w-full -translate-x-1/2">
            <Image
              src={img2}
              width={369}
              sizes="369px"
              className="mx-auto"
              height={369}
              alt="smart-control-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
