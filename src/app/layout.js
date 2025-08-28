import Footer from "@/components/footer/Footer";
import "./globals.scss";


export const metadata = {
  title: "Ratnashri Aluminium",
  description: "Aluminium Extrusion, Profiles &amp; Section Manufacturers in India",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body 
      // className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
