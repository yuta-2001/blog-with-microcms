import Layout from "../components/layout";
import Link from 'next/link';
import { client } from '../libs/client';
import Image from 'next/image';

//SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "portfolio" });

  return {
    props: {
      portfolio: data.contents,
    }
  }
};


export default function Home({ portfolio }) {
  console.log(portfolio);
  return (
    <Layout>
      {/* <ul className={styles.list}>
        {portfolio.map((portfolio) => (
          <li key={portfolio.id}>
            <Link href={`portfolio/${portfolio.id}`}>
              <Image
                src={portfolio.img.url}
                width={portfolio.img.width}
                height={portfolio.img.height}
              />
              <div>
                <h3>
                  {portfolio.name}
                </h3>
                <p>
                  {portfolio.category.name ?? 'インターン'}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul> */}
    </Layout>
  )
}
