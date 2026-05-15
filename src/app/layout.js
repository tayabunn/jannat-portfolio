import '../styles/css/loaders/loader.css';
import '../styles/css/plugins.css';
import '../styles/css/main.css';
import '../styles/css/font-override.css';
import { Syne } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne' });


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: 'Tayabun Jannat - Frontend Developer & Graphic Designer',
  description: 'Portfolio of Tayabun Jannat - Graphic Designer transitioning into Frontend Development. Specialized in React.js, Next.js, and UI/UX Design.',
  keywords: 'Tayabun Jannat, Frontend Developer, Graphic Designer, React.js, Next.js, UI/UX, Dhaka, Bangladesh',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={syne.variable}>
      <body className={syne.className}>
        {children}
      </body>
    </html>
  );
}
