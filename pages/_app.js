/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 bg-green-500">
        <p className="text-4xl font-bold text-white">METAVERSE</p>
        <div className="flex mt-6">
          <Link href="/">
            <a className="mr-8 text-white transition duration-500 ease-in-out transform hover:-translate-y-1">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-8 text-white transition duration-500 ease-in-out transform hover:-translate-y-1">
              Sell Digital Asset
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-8 text-white transition duration-500 ease-in-out transform hover:-translate-y-1">
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-8 text-white transition duration-500 ease-in-out transform hover:-translate-y-1">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
