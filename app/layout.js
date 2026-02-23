import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';

import Navigation from '@/components/Navigation/Navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: 'WACCBIP Search',
  description: 'Search across WACCBIP',
  openGraph: {
    title: 'WACCBIP Search',
    description: 'Search across WACCBIP',
    url: 'https://waccbip-search.vercel.app',
    siteName: 'WACCBIP Search',
    images: [
      {
        url: '/ws.svg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WACCBIP Search',
    description: 'Search across WACCBIP',
    images: ['/ws.svg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} font-sans; ${robotoMono.variable} font-monospace;`}
      >
        <Navigation />
        <div className='rootLayout'>{children}</div>
      </body>
    </html>
  );
}
