import "./globals.css"
import { Lato } from 'next/font/google';

const pixelFont = Lato({ weight: '700', subsets: ['latin'] });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={pixelFont.className}>{children}</body>
    </html>
  );
}