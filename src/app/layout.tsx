import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

import { ReactQueryProvider } from "@/features/react-query";

const rf = Roboto_Flex({
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tap builder app",
  description: "The builder of tap websites",
  keywords: [
    "tap",
    "tap builder",
    "tap website builder",
    "tap website builder",
    "taplink",
    "website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rf.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
