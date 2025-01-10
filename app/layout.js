
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Script from 'next/script'
import { Poppins } from 'next/font/google';

const mont = Montserrat({ subsets: ["latin"] });
const pop = Poppins({ subsets: ["latin"],
  weight:["400", "500", "600", "700", "800", "900"]
 });

export const metadata = {
  title: "Woo Adventures",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
      <Script src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'/>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js'/>
    </html>
  );
}