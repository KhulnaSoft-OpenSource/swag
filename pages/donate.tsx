import { NextPage } from 'next'
import Layout from '../components/Layout'

import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Donate | KhulnaSoft">
      <div className="page-container">
        <h1>Donate with Checkout</h1>
        <p>Donate to the KhulnaSoft project 💖</p>
        <CheckoutForm />
      </div>
    </Layout>
  )
}

export default DonatePage
