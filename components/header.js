import Link from "next/link";
import Image from "next/image";


export default function Header () {
	return (
		<header className="fixed z-50 w-full top-0 left-0 font-serif">
			<div className="container w-4/5 mx-auto flex items-center">
				<h1 className="mr-auto w-40 h-40">
					<Link href="/" className="block w-full h-full duration-75 hover:opacity-70">
						<Image src="/MINETECH.png" width={150} height={150} alt="logo" className="block w-full h-full" />
					</Link>
				</h1>
				<nav className="text-lg">
					<ul className="flex">
						<li>
							<Link href="/profile" className="inline-block p-2 text-white tracking-wide duration-75 hover:text-pink-500">
								PROFILE
							</Link>
						</li>
						<li className="ml-5">
							<Link href="/works" className="inline-block p-2 text-white tracking-wide duration-75 hover:text-pink-500">
								WORKS
							</Link>
						</li>
						<li className="ml-5">
							<a href="https://www.yupro.tech/" target="_blank" rel="noopener" className="inline-block p-2 text-white tracking-wide duration-75 hover:text-pink-500">
								BLOG
							</a>
						</li>
						<li className="ml-5">
							<a href="https://www.yupro.tech/contact/" target="_blank" rel="noopener" className="inline-block p-2 text-white tracking-wide duration-75 hover:text-pink-500">
								CONTACT
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}