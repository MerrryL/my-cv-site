import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Amory Delcampe - CV",
  description: "Technical Leader & Full-stack Developer CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="container mx-auto px-4 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}