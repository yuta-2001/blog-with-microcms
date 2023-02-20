import { client } from "../../libs/client";
import styles from "../../styles/Detail.module.scss";
import Layout from "../../components/layout";
import Image from "next/image";

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
		<Layout>
			<div class={styles.top}>
				<h2 class={styles.topTitle}>
					{work.name}<br />
					<span class={styles.topTitleSub}>
						{work.category.name}
					</span>
				</h2>
				<Image src={work.img.url} width={1280} height={800} quality={100} alt={`${work.name}のサムネイル`} className={styles.topImage} />
			</div>
			<main className={styles.main}>
				<div className={styles.mainContainer}>
					<div className={styles.content} dangerouslySetInnerHTML={{ __html: `${work.description}` }}></div>
					<span className={styles.publishedAt}>{work.publishedAt}</span>
				</div>
			</main>
		</Layout>
	)
}

