import localFont from 'next/font/local';
export const gilroyFont = localFont({
  src: [
    {
      path: './Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Gilroy-Medium.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './Gilroy-Black.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  display: 'swap',
});
