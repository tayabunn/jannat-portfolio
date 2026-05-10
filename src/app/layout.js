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
  title: 'Tayabun Nesa Jannat - Personal Portfolio',
  description: 'Personal Portfolio of Tayabun Nesa Jannat - UI/UX Designer and Frontend Developer.',
  keywords: 'Tayabun Nesa Jannat, portfolio, UI/UX, frontend developer, resume, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
