import { client } from "../../libs/client";
import styles from "../../styles/Detail.module.scss";

//SSG
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const data = await client.get({endpoint: "portfolio", contentId: id});

	return {
		props: {
			portfolio: data,
		},
	};
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "portfolio" });

  const paths = data.contents.map((content) => `/portfolio/${content.id}`);
  return {
    paths,
    fallback: false,
  }
};

export default function PortfolioId({ portfolio }) {
	return (
		<main className={styles.main}>
			<h1 className={styles.name}>{portfolio.name}</h1>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: `${portfolio.description}` }}></div>
			<span className={styles.publishedAt}>{portfolio.publishedAt}</span>
		</main>
	)
}

