import "./globals.css"
import { Lato } from 'next/font/google';

const pixelFont = Lato({ weight: '700', subsets: ['latin'] });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <link type="image/png" sizes="16x16" rel="icon" href="/assets/favicon.png"></link>
      <body className={pixelFont.className}>{children}</body>
    </html>
  );
}