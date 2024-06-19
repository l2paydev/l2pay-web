import Link from 'next/link';
import { Button } from '@/components/Common/Button/Button';
import { routes } from '@/configs';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  bg-black/40 ">
      <h1 className="text-8xl font-bold text-primary-3">404</h1>
      <p className="mt-4 text-2xl text-white">Page not found</p>
      <p className="mt-2 text-lg text-white">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link prefetch={false} className="mt-6" href={routes.home}>
        <Button className="text-base" size="lg">
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
}
