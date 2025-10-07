import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adefolarin | Make Men See and Become",
  description: "Personal website of Adefolarin — Product Manager, Investor, Mentor, and Minister.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-inter">
        <main className="min-h-screen flex flex-col">
          <header className="w-full px-8 py-4 flex justify-between items-center bg-white shadow">
            <h1 className="font-playfair text-2xl text-primary">Adefolarin</h1>
            <nav className="space-x-6 text-sm font-medium">
              <a href="/" className="hover:text-accent">Home</a>
              <a href="/media" className="hover:text-accent">Media</a>
              <a href="/investing" className="hover:text-accent">Investing</a>
              <a href="/speaking" className="hover:text-accent">Speaking</a>
              <a href="/mentorship" className="hover:text-accent">Mentorship</a>
              <a href="/books" className="hover:text-accent">Books</a>
              <a href="/ministry" className="hover:text-accent">Ministry</a>
            </nav>
          </header>
          <section className="flex-grow">{children}</section>
          <footer className="text-center py-6 bg-primary text-white">
            © {new Date().getFullYear()} Adefolarin. Built with ❤️ and Purpose.
          </footer>
        </main>
      </body>
    </html>
  );
}
