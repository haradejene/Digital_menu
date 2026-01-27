import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Optional: Load Inter font via Next.js font optimization
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Best Chicken Place - Digital Menu',
  description: 'The best crispy chicken in town - digital menu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}