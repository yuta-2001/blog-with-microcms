import Link from "next/link";
import Image from "next/image";


export default function Header () {
	return (
		<header>
			<div>
				<Link href="/">
					<Image src="/MINETECH.png" width={150} height={150} alt="logo" />
				</Link>
				<nav>
					<ul>
						<li>
							<Link href="/">
								WORKS
							</Link>
						</li>
						<li>
							<Link href="/">
								SKILL
							</Link>
						</li>
						<li>
							<a href="https://www.yupro.tech/" target="_blank" rel="noopener">
								Blog
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}