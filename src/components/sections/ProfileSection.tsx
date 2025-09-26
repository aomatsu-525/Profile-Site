import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="max-w-6xl mx-auto p-4" id="profile">
      <p
        className="text-8xl text-left ml-8 mt-16 mb-16 font-thin
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

          <div className="mt-4">
            <div className="mb-2">
              <p className="text-xl text-pink-500">年齢</p>
              <p className="text-base">24歳</p>
            </div>

            <div className="mb-2">
              <p className="text-xl text-pink-500">よくやるゲーム</p>
              <p className="text-base">ポケモンユナイト</p>
              <p className="text-base">ポケモンスリープ</p>
              <p className="text-base">ポケモンフレンダ</p>
              <p className="text-base">ぷちぷちおみせっち</p>
            </div>

            <div className="mb-2">
              <p className="text-xl text-pink-500">誕生日</p>
              <p className="text-base">５月２５日</p>
            </div>

            <div className="mb-2">
              <p className="text-xl text-pink-500">初配信日</p>
              <p className="text-base">７月１１日</p>
            </div>

            <div className="mb-2">
              <p className="text-xl text-pink-500">好きなこと</p>
              <p className="text-base">
                うさぎと遊ぶこと・たくさん寝ること・音楽を聴くこと
              </p>
            </div>

            <div className="mb-2">
              <p className="text-xl text-pink-500">身長</p>
              <p className="text-base">153cm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
