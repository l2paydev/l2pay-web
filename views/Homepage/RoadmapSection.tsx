import { Button } from '@/components/Common/Button/Button';
import Link from '@/components/Link';
import { routes } from '@/configs';
import { cn, getIdSectionByHash } from '@/utils';

export function RoadmapSection({ className }: { className?: string }) {
  const roadmap = [
    {
      time: 'Jun 2024',
      label: 'MVP Testnet',
      desc: `<li>Run on Starknet</li> <li>Supporting ETH, STRK</li>`,
    },
    {
      time: 'Sep 2024',
      label: 'Beta Testnet',
      desc: `<li>KakarotzkEVM, Linear</li>
      <li>ZkSync, Optimise, Base</li> 
      <li>Blast, Arbitrum One, BitLayer</li>
      <li>Supporting BTC, USDC, USDT</li>`,
    },
    {
      time: 'Oct 2024',
      label: 'SDK',
      desc: '<li>Checkout  SDK on React</li>',
    },
    {
      time: 'Nov 2024',
      label: 'Mainnet',
      desc: `<li>Optimization Release v1.0.0</li>`,
    },
  ];
  return (
    <div
      id={getIdSectionByHash(routes.roadmap)}
      className="mx-auto bg-roadmap bg-cover bg-no-repeat    "
    >
      <div className="bg-linear-2 bg-cover">
        <div
          className={cn(
            'mx-auto  min-h-screen w-full max-w-screen-xl flex-col items-center justify-center pb-20 pt-20 ',
            className
          )}
        >
          <div className="text-center">
            <h2 className="text-[40px] font-bold leading-[84px]">
              <span className="text-white">Roadmap</span>
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-4">
            {roadmap?.map(({ desc, time, label }, i) => {
              return (
                <li className="[&>div]:last:after:hidden" key={i}>
                  <h3 className="max-w-[260px] text-center text-[40px] font-bold text-primary-2">
                    {time}
                  </h3>
                  <div className="after:bg-linear-4 relative z-20  mt-4 w-fit rounded-2xl bg-gradient-to-bl from-black/10 to-gray-3  p-[1px] after:absolute after:left-1/2 after:top-1/2  after:z-[-1] after:block after:h-[1px] after:w-full  ">
                    <div className="bg-cards bg-card-linear-1s  flex aspect-[240/200] w-screen	 max-w-[260px] flex-1 flex-col items-center justify-start rounded-2xl bg-gradient-to-br from-dark-2 to-gray-2/15 px-3  py-8 backdrop-blur-lg ">
                      <h3 className=" mb-4 text-center text-lg font-bold text-white 2xl:text-xl">
                        {label}
                      </h3>
                      <ul
                        dangerouslySetInnerHTML={{ __html: desc }}
                        className=" break-wordss 2xl:text-lgs w-full list-outside list-disc  text-base text-white [&>li]:ml-4 [&>li]:w-full  [&>li]:whitespace-nowrap [&>li]:text-justify"
                      >
                        {/* {desc} */}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-[141px] flex items-center justify-center">
            <Link target="_blank" href={routes.dashboard}>
              <Button size="xl">Paying</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
