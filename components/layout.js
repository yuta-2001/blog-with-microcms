import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title="MINETECH" }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</div>
	)
}