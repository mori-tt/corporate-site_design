import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DESIGN STUDIO | モダンでクリエイティブなデザイン会社",
  description:
    "最先端のデザインで企業の成長をサポートするデザイン会社。Webデザイン、UIデザイン、ブランディングなど幅広いサービスを提供しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}