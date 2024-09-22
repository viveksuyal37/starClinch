import { Dancing_Script } from 'next/font/google';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const dancingScript = Dancing_Script({ subsets: ['latin'] });

export { dancingScript, geistMono, geistSans };
