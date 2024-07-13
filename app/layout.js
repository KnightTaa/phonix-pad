import localfont from "next/font/local";
import "./globals.css";
import Toast from "../components/ToastContainer";
import Script from "next/script";

const arial = localfont({
  src: "./fonts/arial.ttf",
});

export const metadata = {
  title: "Pad Frontend",
  description: "Test frontend for phonix pad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NC4QZR5S');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={arial.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NC4QZR5S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Toast />
      </body>
    </html>
  );
}