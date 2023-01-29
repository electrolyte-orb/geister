"use client";
import { CssBaseline, GeistProvider, useTheme } from "@geist-ui/core";
import Navbar from "./Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GeistProvider>
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
