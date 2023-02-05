import Link from "next/link";
import Image from "next/image";


export default function Header () {
	return (
		<header className="fixed w-full top-0 left-0">
			<div className="container w-4/5 mx-auto flex items-center">
				<Link href="/" className="w-40 h-40 mr-auto">
					<Image src="/MINETECH.png" width={150} height={150} alt="logo" className="block w-full h-full" />
				</Link>
				<nav className="text-lg">
					<ul className="flex">
						<li className="inline-block">
							<Link href="/" className="inline-block p-2">
								WORKS
							</Link>
						</li>
						<li className="ml-3">
							<Link href="/" className="inline-block p-2">
								SKILL
							</Link>
						</li>
						<li className="ml-3">
							<a href="https://www.yupro.tech/" target="_blank" rel="noopener" className="inline-block p-2">
								Blog
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}