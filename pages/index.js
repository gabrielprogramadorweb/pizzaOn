import Head from "next/head";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Services from "../components/Services";
import { client } from "../lib/client";
import css from "../styles/Home.module.css"
import ReactDOM from "react-dom/client";


//Retornar a pizza do backend sanity para o frontend//
export default function Home({ pizzas }) {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>OnPizza</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>

        {/* body */}
        <main>

          <Hero />
          <Services />
          <Menu pizzas={pizzas} />
        </main>

      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas
    }
  }
}