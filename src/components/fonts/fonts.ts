import localFont from 'next/font/local';

export const Plasma = localFont({
  src: [
    {
      path: '../../../public/fonts/fonnts.com-martianb-black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-plasma',
});