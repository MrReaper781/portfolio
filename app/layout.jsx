import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Corrected from "width" to "weight"
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"], // Ovo only supports weight 400
});

export const metadata = {
  title: "Portfolio - Vaibhav Vishesh",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
