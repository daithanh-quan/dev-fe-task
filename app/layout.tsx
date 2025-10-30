import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Posts Explorer',
  description: 'Explore posts from JSONPlaceholder with pagination and filtering',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Posts Explorer</h1>
            <p className="text-blue-100">Discover and explore posts</p>
          </div>
        </header>
        <main className="container mx-auto p-4 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-100 text-center p-4 mt-8">
          <p className="text-gray-600">
            Built with Next.js • Data from JSONPlaceholder
          </p>
        </footer>
      </body>
    </html>
  );
}
