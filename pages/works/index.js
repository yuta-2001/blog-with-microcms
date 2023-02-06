import Layout from "../../components/layout";
import { client } from "../../libs/client";
import Link from "next/link";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

//SSG
export const getStaticProps = async() => {
	const data = await client.get({ endpoint: "works" });

	return {
		props: {
			works: data.contents,
		}
	}
};

export default function Works({works}) {
	console.log(works);
	return (
		<Layout>
			<main className="bg-black h-screen w-full text-white font-serif py-48">
				<h2 className="font-serif text-center text-6xl tracking-widest mb-4 font-bold">
					Works
				</h2>
				<p className="font-serif text-center tracking-widest text-xl mb-16">
					Here are some of the things I have produced so far
				</p>
				<ul className="flex flex-wrap w-4/5 items-center justify-between mx-auto">
					{
						works.map((work) => {
							<li key={work.id} className="block w-2/5">
								<Link href={`/works/${work.id}`} className="block w-full h-full transition-all">
									<Image src={work.img.url} width={work.img.width} height={work.img.height} alt={`${work.name}のサムネイル`} className="w-full h-auto block" />
								</Link>
							</li>
						})
					}
				</ul>
			</main>
		</Layout>
	)
}