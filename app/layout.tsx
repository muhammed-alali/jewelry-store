import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import Topbar from "@/components/layout/topbar";

const inter = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home Lengo",
  description:
    "مكتب متخصص في بيع، شراء، وتأجير البيوت السكنية والتجارية بأفضل الأسعار.",
  keywords: [
    "بيوت",
    "بيع بيوت",
    "شراء بيوت",
    "تأجير بيوت",
    "بيوت سكنية",
    "عقار",
    "مكتب عقاري",
    "بيع عقارات",
    "شراء عقارات",
    "تأجير عقارات",
    "فلل للبيع",
    "شقق للإيجار",
    "عقارات تجارية",
    "عقارات سكنية",
  ],
  icons: {
    icon: "./photo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Topbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
