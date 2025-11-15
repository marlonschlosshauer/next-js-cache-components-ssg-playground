import "./globals.css";
import "./reset.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div>{children}</div>
      </body>
    </html>
  );
}
