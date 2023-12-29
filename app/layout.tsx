import { montserrat } from './ui/fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="grid place-items-center p-4 text-white">
          Desarrollado con ❤️ por los de Vercel
        </footer>
      </body>
    </html>
  );
}
