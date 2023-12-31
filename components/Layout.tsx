import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: ReactNode,
  title?: string,
};

const Layout = ({ children, title = "TypeScript Next.js Stripe Example" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="KhulnaSoft | SWAG Shop" />
      <meta property="og:image" content="https://swag.khulnasoft.com/social_card.png" />

      <meta property="og:description" content="Our mission is to build a welcoming community for those looking to participate in open-source. Represent your path into open-source with a security badge." />
      <meta property="og:url" content="https://swag.khulnasoft.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@khulnasoft" />
      <meta name="twitter:title" content="KhulnaSoft | SWAG Shop" />
      <meta name="twitter:description" content="Represent your path into open-source with a security badge." />
      <meta name="twitter:image" content="https://swag.khulnasoft.com/social_card.png" />
    </Head>
    <div className="h-screen w-full flex flex-col lg:flex-row">
      <header className="flex flex-col flex-none justify-between lg:w-56 p-4">
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-gold via-red-saucy to-red-dark">🍕 <span>SWAG</span></h1>
            </a>
          </Link>
          <p>
            <span> Powered by the</span>{" "}
            <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a> library.
          </p>
        </div>
        <div className="links">
          <ul>
            <li><a href="https://khulnasoft.com">khulnasoft.com</a></li>
            <li><a href="https://dev.to/khulnasoft">blog</a></li>
            <li><a href="https://github.com/khulnasoft-opensource">github</a></li>
          </ul>
        </div>
      </header>
      <main className="px-3 lg:h-full flex-1 lg:overflow-y-scroll">
        {children}
      </main>
    </div>
  </>
);

export default Layout;
