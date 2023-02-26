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
				<Image src="/profileMv.jpg" width={1280} height={800} quality={100} className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 block min-w-min min-h-screen w-screen h-screen z-10" alt="mv" />
			</div>
			<main className="w-full bg-black relative z-10 text-white font-serif">
                <h3 className="font-bold w-5/6 max-w-5xl md:w-11/12 lg:w-3/4 mx-auto pt-28 mb-6">
                    <span className="text-5xl mb-4 inline-block tracking-wider">
                        SUGIMINE YUTA
                    </span><br />
                    <span className="text-xl inline-block tracking-widest">
                        STUDENT ENGINNER
                    </span>
                </h3>
				<div className="w-5/6 max-w-5xl md:w-11/12 lg:w-3/4 mx-auto ">
					<div className="flex flex-col md:flex-row items-center mb-20">
						<div className="mb-10 md:mb-0 mr-auto">
                            <h4 className="font-bold text-4xl mb-12 inline-block tracking-wider">
                                基本情報
                            </h4>
							<p className="md:text-lg lg:text-xl font-bold text-mono tracking-wider mb-2">
								出身：東京都府中市<br />
                                生年月日：2002年2月10日<br />
								所属大学：横浜市立大学国際商学部< br/>
								趣味：サウナ、サッカー、米津玄師、旅行<br />
							</p>
						</div>
						<Image src="/profileMyImage.jpg" width={250} height={400} quality={100} alt="作者の画像" className="w-full md:w-80 lg:w-96 h-auto block rounded-xl"/>
					</div>
                    <div className="pb-12">
                        <h4 className="font-bold text-4xl mb-8 inline-block tracking-wider">
                            経歴
                        </h4>
                        <ul>
                            <li className="w-full rounded-md border-white border-4 box-border px-4 py-4 mb-4">
                                <h5 className="font-bold text-2xl tracking-wider mb-4 border-b-4 inline-block">
                                    中学時代
                                </h5>
                                <p className="md:text-lg text-mono tracking-wider mb-2">
                                    府中市立府中第八中学校に入学。<br />
                                    部活動で三年間サッカーをしていました。
                                    <br />
                                    <span className="font-bold inline-block text-xl mt-8 mb-2">
                                    主な実績
                                    </span><br />
                                    ・府中市中学校サッカー大会 優勝<br />
                                    ・第９ブロック【武蔵野、府中、調布、三鷹、狛江】サッカー大会 準優勝 （都大会進出）<br />
                                    ・東京都中学サッカー大会 ベスト８
                                </p>
                            </li>
                            <li className="w-full rounded-md border-white border-4 box-border px-4 py-4 mb-4">
                                <h5 className="font-bold text-2xl tracking-wider mb-4 border-b-4 inline-block">
                                    高校時代
                                </h5>
                                <p className="md:text-lg text-mono tracking-wider mb-2">
                                    東京都立南平高等学校に入学。<br />
                                    中学校に引き続き、部活動で三年間サッカーをしていました。
                                    <br />
                                    <span className="font-bold text-xl inline-block mt-8 mb-2">
                                    主な実績
                                    </span><br />
                                    ・東京新人戦（新人選手権大会）第7地区 準優勝
                                </p>
                            </li>
                            <li className="w-full rounded-md border-white border-4 box-border px-4 py-4">
                                <h5 className="font-bold text-2xl tracking-wider mb-4 border-b-4 inline-block">
                                    大学時代
                                </h5>
                                <p className="md:text-lg text-mono tracking-wider mb-2">
                                    大学入学直後にコロナウイルスが流行った影響で、一年生の時ははほとんど家で生活していました。
                                    サークル活動もなく、サッカーもできない状況で、かなり退屈な日々が続きました。
                                    そこで昔から物作りが好きと言うこともあり、動画編集とプログラミングを始めました。
                                    動画編集は途中でやめてしまいましたが、プログラミングは今でも続けています。
                                    いつか世の中にインパクトを与える素晴らしいプロダクトの開発に携われるよう、日々勉強中です。
                                    また、現在大学三年生ですが、来年度一年間休学し、ベトナムの開発企業でのインターンシップに参加する予定です。
                                    <br />
                                    <span className="font-bold text-xl inline-block mt-8 mb-2">
                                    アルバイト・インターンシップ参加歴
                                    </span><br />
                                    ・(2020/6 ~ 2022/1) アマゾン合同会社の倉庫内スタッフを派遣社員として勤務<br />
                                    ・(2022/2 ~ 2022/8) 株式会社EISHINのWEBサイト制作のインターンシップに参加<br />
                                    ・(2022/9 ~ ) 株式会社EISHIN社内移動にて、自社サービスの開発に携わる
                                </p>
                            </li>
                        </ul>
                    </div>
				</div>
			</main>
		</Layout>
	)
}