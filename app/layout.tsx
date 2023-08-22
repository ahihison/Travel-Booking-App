import { Nunito } from "next/font/google";
import OnlyClient from "./components/OnlyClient";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";

export const metadata = {
  title: "Travel Booking",
  description: "Travel Booking is a travel booking website.",
};
const fonts = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <OnlyClient>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />

          <Navbar />
        </OnlyClient>
        {children}
      </body>
    </html>
  );
}
