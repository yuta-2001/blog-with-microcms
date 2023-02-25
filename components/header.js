import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Header () {

	const [openMenu, setOpenMenu] = useState(false);
	const handleMenuOpen = () => {
		setOpenMenu(!openMenu);
	}

	return (
		<header className="fixed z-50 w-full top-0 left-0 font-serif">
			<div className="container md:w-4/5 mx-auto flex items-center">
				<h1 className="mr-auto md:w-40 md:h-40 w-28 h-28">
					<Link href="/" className="block w-full h-full transition-all hover:opacity-70">
						<Image src="/MINETECH.png" width={150} height={150} alt="logo" className="block w-full h-full" />
					</Link>
				</h1>
				<nav className="text-lg hidden md:block">
					<ul className="flex">
						<li>
							<Link href="/" className="inline-block p-2 text-white tracking-wide transition-all hover:text-pink-500">
								HOME
							</Link>
						</li>
						<li className="ml-5">
							<Link href="/profile" className="inline-block p-2 text-white tracking-wide transition-all hover:text-pink-500">
								PROFILE
							</Link>
						</li>
						<li className="ml-5">
							<Link href="/works" className="inline-block p-2 text-white tracking-wide transition-all hover:text-pink-500">
								WORKS
							</Link>
						</li>
						<li className="ml-5">
							<a href="https://www.yupro.tech/" target="_blank" rel="noopener" className="inline-block p-2 text-white tracking-wide transition-all hover:text-pink-500">
								BLOG
							</a>
						</li>
					</ul>
				</nav>
				
				{/* ハンバーガーボタン */}
				<button onClick={handleMenuOpen} type="button" className="z-10 w-8 h-8 relative block md:hidden mr-5">
					<div className={openMenu ? "absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-8 h-1 bg-black rotate-45 transition-all" : "absolute top-0 left-0 w-8 h-1 bg-white rounded-lg transition-all"} />
					<div className={openMenu ? "opacity-0 transition-all" : "w-8 h-1 bg-white rounded-lg transition-all"} />
					<div className={openMenu ? "absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-8 h-1 bg-black  -rotate-45 transition-all" : "absolute bottom-0 left-0 w-8 h-1 bg-white rounded-lg transition-all"} />
				</button>

				{/* ハンバーガーボタン開けた際のナビゲーションメニュー */}
				<nav className={
					openMenu ? 'fixed inset-0 w-full h-full text-center bg-white text-pink-500'
					: 'fixed right-[-100%]'
				}>
					<ul className="text-center mt-32">
						<li className="text-center mb-12">
							<Link href="/" className="text-3xl">
								HOME
							</Link>
						</li>
						<li className="text-center mb-12">
							<Link href="/profile" className="text-3xl">
								PROFILE
							</Link>
						</li>
						<li className="text-center mb-12">
							<Link href="/profile" className="text-3xl">
								WORKS
							</Link>
						</li>
						<li className="text-center mb-12">
							<a href="https://www.yupro.tech/" target="_blank" rel="noopener" className="text-3xl">
								TECHBLOG
							</a>
						</li>
						<li className="text-center mb-12">
							<a href="https://www.yupro.tech/contact/" target="_blank" rel="noopener" className="text-3xl">
								CONTACT
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}