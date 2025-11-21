

import Footer from "./common-components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Shimul Mozumder – Expert Digital Marketing Consultant in Dhaka",
  description: "Discover how Shimul Mozumder drives online growth for businesses with SEO, YouTube & Instagram strategies. Your expert digital marketing partner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
