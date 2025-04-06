import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Harsh - Java Full Stack Developer",
  description: "Harsh's Portfolio, a Java and React developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='page-wrapper'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
