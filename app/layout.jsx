import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = { title: 'NovaBrand', description: 'AI Brand Agent' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}