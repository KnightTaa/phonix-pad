import localfont from "next/font/local";
import "./globals.css";
import Toast from '../components/ToastContainer';

const arial = localfont({
  src: './fonts/arial.ttf',
})

export const metadata = {
  title: "Pad Frontend",
  description: "Test frontend for phonix pad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={arial.className}>
        {children}
        <Toast />
      </body>
    </html>
  );
}
