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
			<main className="w-full bg-black relative z-10 text-white font-serif">
				<div className="w-3/4 mx-auto py-40">
					<div className="flex items-center mb-20">
						<div className="mr-auto">
							<h3 className="font-bold mb-20">
								<span className="text-5xl mb-4 inline-block tracking-wider">
									SUGIMINE YUTA
								</span><br />
								<span className="text-xl inline-block tracking-widest">
									STUDENT ENGINNER
								</span>
							</h3>
							<p className="text-xl font-bold text-mono tracking-wider">
								出身：東京都府中市<br />
								誕生：2002年<br />
								所属：横浜市立大学国際商学部< br/>
								趣味：サウナ、サッカー、米津玄師、旅行<br />
							</p>
						</div>
						<Image src="/profileMyImage.jpg" width={250} height={400} quality={100} alt="作者の画像" className="w-96 h-auto block rounded-xl"/>
					</div>
					<p className="text-lg font-sans">
						現在文系大学の３年生をしながらWEB系のエンジニアとして活動している者です。<br />
						<br />
						小学生から高校生までの12年間、ずっとサッカーをしておりました。<br />
						<br />
						当時の自分はあまり勉強は好きではなく、どちらかというと運動大好きな少年という感じでした。<br />
						<br />
						その上今となっては考えられませんが、タイピングもクラスの中で一番遅いほどのパソコン音痴でした。<br />
						<br />
						しかし、大学２年生の夏頃にプログラミングに出会い、今ではPC触りまくりの学生となりました。<br />
						<br />
						半年ほどプログラミングに関することを独学したのちに、WEBサイト制作のインターン生として株式会社EISHINに入社しました。<br />
						<br />
						その後社内での移動を経て、現在は自社サービスの保守・運用等に携わっております。<br />
						<br />
						業務内では、JavaScript、PHP（Laravel）あたりをメインで使用しております。<br />
						<br />
						2023年は所属している横浜市立大学を休学させていただき、ベトナムの方で半年間の海外インターンに参加する予定です。<br />
						<br />
						将来世界中で使用されるようなサービス開発に携わるベく、よりクリエイティブな活動をしていければなと考えております。
					</p>
				</div>
			</main>
		</Layout>
	)
}