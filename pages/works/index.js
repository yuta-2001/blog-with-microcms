import Layout from "../../components/layout";
import { client } from "../../libs/client";
import Link from "next/link";
import Image from "next/image";

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
	works.map((work) => {
		console.log(work.img.url);
	});
	return (
		<Layout>
			<main className="bg-black w-full text-white font-serif py-48">
				<h2 className="font-serif text-center text-6xl tracking-widest mb-4 font-bold">
					Works
				</h2>
				<p className="font-serif text-center tracking-widest text-xl mb-28">
					I will introduce the works I have made so far and the products I have been involved in.
				</p>
				<ul className="flex flex-wrap w-11/12 max-w-6xl items-center justify-between mx-auto">
					{works.map((work) => (
						<li key={work.id} className="block w-1/2 rounded-lg max-w-lg text-black">
							<Link href={`/works/${work.id}`} className="block w-full h-full transition-all bg-white rounded-lg hover:opacity-70">
								<Image src={work.img.url} width={work.img.width} height={work.img.height} alt={`${work.name}のサムネイル`} className="w-full h-auto block rounded-lg" />
								<div className="py-6 text-center">
									<h3 className="font-bold text-lg tracking-wider">
										{work.name}
									</h3>
									<span>
										{work.category.name}
									</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</main>
		</Layout>
	)
}