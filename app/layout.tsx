import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientAnalytics from "@/components/ClientAnalytics";
import { SITE_BASE_INFO, ANALYTICS } from "@/constants/site";

export const metadata: Metadata = {
  title: `${SITE_BASE_INFO.title} | ${SITE_BASE_INFO.description}`,
  description: SITE_BASE_INFO.fullDescription,
  // Google Search Console メタタグ検証
  // 実際に使用する場合はANALYTICS.VERIFICATION_CODEに適切な値を設定してください
  ...(ANALYTICS.VERIFICATION_CODE && {
    verification: {
      google: ANALYTICS.VERIFICATION_CODE,
    }
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className="antialiased min-h-screen flex flex-col"
      >
        {/* Google Analytics コンポーネント - クライアントコンポーネント経由でロード */}
        {ANALYTICS.MEASUREMENT_ID && (
          <ClientAnalytics measurementId={ANALYTICS.MEASUREMENT_ID} />
        )}
        <Header />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}