import { type PropsWithChildren } from 'react';
import { gilroyFont, siteConfig } from '@/configs';
import MainProvider from '@/providers';
import 'styles/reset.css';
import 'styles/tailwind.css';
type RootLayoutProps = PropsWithChildren;

export async function generateMetadata() {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    robots: { index: true, follow: true },
    icons: {
      icon: '/static/images/favicon/favicon.ico',
      shortcut: '/static/images/favicon/favicon-16x16.png',
      apple: '/static/images/favicon/apple-touch-icon.png',
    },
    manifest: `/static/images/favicon/site.webmanifest`,
    openGraph: {
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.title,
      images: [`${siteConfig.url}/static/images/og.jpg`],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.url}/static/images/og.jpg`],
    },
    authors: [
      {
        name: 'L2Pay Team',
        url: siteConfig.url,
      },
    ],
  };
}
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html suppressHydrationWarning className={gilroyFont.className} lang="en">
      <body className="bg-dark-0  ">
        <div className="hidden size-full grow flex-col xl:flex ">
          <MainProvider>{children}</MainProvider>
        </div>
        <div className=" flex h-screen w-screen flex-col items-center justify-center bg-banner-x bg-cover  bg-no-repeat px-6 text-center xl:hidden">
          <h1 className="z-10 mb-6 text-5xl font-bold text-white md:mb-8 md:text-7xl">
            Coming Soon
          </h1>
          <p className="z-10 text-xl text-white md:text-2xl">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
          <div className="fixed top-0 z-0 h-screen w-screen bg-black/20 backdrop-blur-sm"></div>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
