import { Nunito } from "next/font/google";
import OnlyClient from "./components/OnlyClient";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./acctions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

export const metadata = {
  title: "Travel Booking",
  description: "Travel Booking is a travel booking website.",
};
const fonts = Nunito({
  subsets: ["latin"],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={fonts.className}>
        <OnlyClient>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </OnlyClient>
        {children}
      </body>
    </html>
  );
}
