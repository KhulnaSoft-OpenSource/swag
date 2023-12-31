import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  return (
    <Layout title="SWAG |  KhulnaSoft">
      <section className="lg:m-20">
        <ul className="flex flex-col justify-center items-center lg:justify-start lg:items-start sm:flex-row lg:space-x-12">
          <li>
            <Link href="https://merch.streamelements.com/bdougieyo">
              <a className="card checkout-style-background">
                <h2 className="bottom">Merch</h2>
                <img style={{borderRadius: 10}} src="/bdougieyo_merch_panel.png" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/stickers">
              <a className="card cart-style-background">
                <h2 className="bottom">Stickers</h2>
                <img style={{borderRadius: 10}} src="/" />
              </a>
            </Link>
          </li>
          <li>
            {/* <Link href="/donate">
              <a className="card checkout-style-background">
                <h2 className="bottom">Donate</h2>
                <img src="/checkout-one-time-payments.svg" />
              </a>
            </Link> */}
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage
