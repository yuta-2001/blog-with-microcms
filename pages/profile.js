import Layout from "../components/layout";
import Image from "next/image";

export default function Profile () {
	return (
		<Layout title="MINETECH | PROFILE">
			<div className="bg-black text-white sticky top-0 left-0 w-full h-screen">
				<h2 className="text-5xl font-serif text-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-30">
					PROFILE
				</h2>
				<div className="absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full z-20"></div>
				<Image src="/profileMv.jpg" width={1280} height={800} quality={100} className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 block min-w-min min-h-screen w-screen h-screen z-10" alt="mv" />
			</div>
			<main className="w-full h-screen bg-black relative z-10 text-white font-serif">
				<div className="w-3/4 mx-auto py-40">
					<h3 className="font-bold ">
						<span className="text-5xl mb-4 inline-block tracking-wider">
							SUGIMINE YUTA
						</span><br />
						<span className="text-xl inline-block tracking-widest">
							STUDENT ENGINNER
						</span>
					</h3>
				</div>
			</main>
		</Layout>
	)
}