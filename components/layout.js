import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";

export default function Layout({ children, title="MINETECH" }) {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			<main>
				{children}
			</main>
			{ router.pathname !== '/' &&  <Footer />}
		</div>
	)
}