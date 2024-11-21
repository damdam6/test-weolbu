import type { Metadata } from 'next';

import { LayoutWrapper } from './_styles/layout.css';

export const metadata: Metadata = {
  title: 'weolbu',
  description: 'junior FE',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={LayoutWrapper}>{children}</body>
    </html>
  );
}
