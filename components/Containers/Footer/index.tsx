'use client';
import Link from '@/components/Link';
import WithLogo from '@/components/withLogo';
import { routes } from '@/configs';
import { useHash } from '@/hooks';
import GithubIcon from '~/static/socials/github.svg';
import XIcon from '~/static/socials/x.svg';

const Footer = () => {
  const { updateHash } = useHash();

  return (
    <footer className="h-20 items-center  border-t  border-gray-1/35  2xl:h-[118px]">
      <div className=" mx-auto grid max-w-screen-xl grid-cols-4 items-center py-5 2xl:py-10">
        <Link
          href={routes.home}
          onClick={() => updateHash('/')}
          aria-label="Home"
        >
          <WithLogo />
        </Link>
        <p className="col-span-2 bg-linear-1 bg-clip-text text-center text-xl text-transparent 2xl:text-3xl ">
          © All rights reserved to l2pay
        </p>
        <div className="flex items-center justify-center  bg-linear-1 bg-clip-text text-xl text-transparent  2xl:text-3xl ">
          <span className="mr-5"> Follow us on</span>
          <Link
            href={routes.X}
            target="_blank"
            className="transition duration-200 hover:scale-105 active:scale-95 "
          >
            <XIcon className="size-12" />
          </Link>
          <Link
            href={routes.github}
            target="_blank"
            className=" transition duration-200 hover:scale-105 active:scale-95  "
          >
            <GithubIcon className="size-14 pt-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
