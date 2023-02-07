import { client } from "../../libs/client";
import styles from "../../styles/Detail.module.scss";

//SSG
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const data = await client.get({endpoint: "works", contentId: id});

	return {
		props: {
			work: data,
		},
	};
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/works/${content.id}`);
  return {
    paths,
    fallback: false,
  }
};

export default function WorkId({ work }) {
	return (
		<main className={styles.main}>
			<h1 className={styles.name}>{work.name}</h1>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: `${work.description}` }}></div>
			<span className={styles.publishedAt}>{work.publishedAt}</span>
		</main>
	)
}

