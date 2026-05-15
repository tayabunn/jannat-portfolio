import '../styles/css/loaders/loader.css';
import '../styles/css/plugins.css';
import '../styles/css/main.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
