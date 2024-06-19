'use client';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';
import { Button } from '@/components/Common/Button/Button';
import ImageNft from '~/static/images/banner/1.png';
import { routes } from '@/configs';
import ReactPlayer from 'react-player/lazy';
import { useIsMounted } from '@/hooks';

export function HeroSection({ className }: { className?: string }) {
  const isMounted = useIsMounted();
  return (
    <div className="relative min-h-[100vh] w-screen bg-black/40  bg-hero bg-cover bg-no-repeat backdrop-blur-3xl ">
      <div className="relative z-10  h-full  min-h-[100vh] w-screen ">
        {isMounted && (
          <>
            <ReactPlayer
              playing={true}
              muted={true}
              width="100%"
              height="auto"
              loop={true}
              url={'static/videos/hero.mp4'}
            />
          </>
        )}
        <div className="absolute top-0 z-20 h-full  w-full bg-hero-overlay bg-cover bg-bottom  bg-no-repeat opacity-20"></div>
      </div>
      <div className="absolute  top-0 z-30  h-full w-full">
        <div
          className={cn(
            ' layout-container mx-auto flex h-screen w-full  items-center justify-between pt-20',
            className
          )}
        >
          <div className="flex h-full w-fit flex-col justify-center">
            <h1 className="text-6xl font-bold leading-[60px] xl:text-[75px] xl:leading-[91px]">
              <p className="bg-linear-1 bg-clip-text text-transparent">
                {' '}
                Keep Paying
              </p>{' '}
              <p className="text-white">with L2</p>
            </h1>
            <p className=" mt-4 text-2xl font-normal text-white xl:mt-6">
              That narrow the gap between real world and w3b
            </p>
            <Link
              className=" mt-9 xl:mt-20"
              target="_blank"
              href={routes.dashboard}
            >
              <Button size="xl">Paying</Button>
            </Link>
          </div>
          <div className="shrink-1 flex basis-1/2 items-center justify-center @container">
            <Image
              rel="preload"
              width={676}
              height={676}
              sizes="676px"
              placeholder="blur"
              className="ml-auto w-full max-w-[575px] @7xl:max-w-[676px]"
              alt="Homepage ImageNft image"
              priority
              src={ImageNft}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
