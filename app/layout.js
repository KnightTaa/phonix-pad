import { Poppins } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

// const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

const arial = localfont({
  src: [{
    path: '../public/fonts/arial.ttf',
    weight: '400',
  }],
  variable: "--font-arial",
})

export const metadata = {
  title: "Pad Frontend",
  description: "Test frontend for phonix pad",
};
{/* <body className={inter.className}>{children}</body> */}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arial.variable}`}>{children}</body>
    </html>
  );
}
