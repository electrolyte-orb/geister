"use client";
import { CssBaseline, GeistProvider, useTheme, Themes } from "@geist-ui/core";
import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "swap",
  variable: "--font-inter",
});

import Navbar from "./Navbar";

const myTheme = Themes.createFromLight({
  type: "myTheme",
  font: {
    sans: "var(--font-inter)",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GeistProvider themes={[myTheme]} themeType="myTheme">
          <CssBaseline />
          <Navbar />
          <main
            style={{
              maxWidth: theme.layout.pageWidth,
              width: "100%",
              display: "flex",
              padding: `0 ${theme.layout.gap}`,
              margin: `0 auto`,
              boxSizing: "border-box",
            }}
          >
            {children}
          </main>
        </GeistProvider>
      </body>
    </html>
  );
}
