import localfont from "next/font/local";
import "./globals.css";

const arial = localfont({
  src: [{
    path: '../public/fonts/arial.ttf',
    // weight: '400',
  }],
  variable: "--font-arial",
})

export const metadata = {
  title: "Pad Frontend",
  description: "Test frontend for phonix pad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arial.variable}`}>{children}</body>
    </html>
  );
}
