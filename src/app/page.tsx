import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto p-4" id="profile">
        <p
          className="text-8xl text-left ml-8 mt-16 mb-16 font-thin font-[var(--font-hachi-maru-pop)]
          bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
        >
          Profile
        </p>

        <div className="flex flex-col md:flex-row mb-16">
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <Image
              src="/image/icon.PNG"
              alt="プロフィール画像"
              width={360}
              height={360}
              className="rounded-full shadow-lg"
              priority
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col pt-16 pl-16 md:text-left">
            <p className="text-xl  text-gray-600 mb-4">
              うさぎが好きなおしゃべり系配信者
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">
              紅葉兎羽
            </h1>
            <p className="text-2xl text-pink-400">Momiji Towa</p>
          </div>
        </div>

        <div className="space-y-12 mx-16">
          <div>
            <h2 className="text-3xl mb-2 font-bold text-pink-500">年齢</h2>
            <li className="text-2xl">24歳</li>
          </div>

          <div>
            <h2 className="text-3xl mb-2 font-bold text-pink-500">
              よくやるゲーム
            </h2>
            <li className="text-2xl">ポケモンユナイト</li>
            <li className="text-2xl">ポケモンスリープ</li>
            <li className="text-2xl">ポケモンフレンダ</li>
            <li className="text-2xl">ぷちぷちおみせっち</li>
          </div>

          <div>
            <h2 className="text-3xl mb-2 font-bold text-pink-500">誕生日</h2>
            <li className="text-2xl">５月２５日</li>
          </div>

          <div>
            <h2 className="text-3xl mb-2 font-bold text-pink-500">初配信日</h2>
            <li className="text-2xl">７月１１日</li>
          </div>

          <div>
            <h2 className="text-3xl mb-2 font-bold text-pink-500">
              好きなこと
            </h2>
            <li className="text-2xl">
              うさぎと遊ぶこと、たくさん寝ること、音楽を聴くこと
            </li>
          </div>

          <div>
            <h2 className="text-3xl mb-2 font-bold text-pink-500">身長</h2>
            <li className="text-2xl">153cm</li>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-pink-500 mb-16 text-center">
            各種リンク
          </h2>
          {/* <div className="grid grid-cols-2 gap-4 justify-items-center">
                <button onClick="window.location.href='https://x.com/711Spoon/'"
                    className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow-md text-center w-64">
                    Twitter
                </button>
                <button onClick="window.location.href='https://www.instagram.com/___phrase.u/'"
                    className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow text-center w-64">
                    Instagram
                </button>
                <button onClick="window.location.href='https://www.tiktok.com/@nanatanaka711'"
                    className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow text-center w-64">
                    TikTok
                </button>
                <button onClick="window.location.href='https://youtube.com/@nanatanaka711'"
                    className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow text-center w-64">
                    YouTube
                </button>
                <button onClick="window.location.href='https://www.spooncast.net/jp/channel/315753423/tab/home'"
                    className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow text-center w-64">
                    Spoon
                </button>
            </div> */}
        </div>
      </main>
    </div>
  );
}
