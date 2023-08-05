import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import { MenuAppBar } from '@/app/_components/feature/layout/MenuAppBar';
import ApolloProvider from '@/providers/ApolloProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* TODO: なんとかする */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <title>Xena</title>
      </head>

      <body className={inter.className}>
        <ApolloProvider>
          <MenuAppBar title="Xena" />
          <main
            style={{
              margin: '0 auto',
              padding: '24px',
              maxWidth: 1080,
            }}
          >
            {children}
          </main>
        </ApolloProvider>
      </body>
    </html>
  );
}
