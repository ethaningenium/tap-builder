import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/features/theme/provider";

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
    <html lang="en">
      <body className={rf.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
