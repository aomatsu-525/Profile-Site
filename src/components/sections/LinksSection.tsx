"use client";

export default function LinksSection() {
  return (
    <section className="max-w-6xl mx-auto p-4 " id="links">
      <p
        className="text-8xl text-left ml-8 mt-16 mb-16 font-thin
        bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
      >
        links
      </p>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        <button
          onClick={() => (window.location.href = "https://x.com/711Spoon/")}
          className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow-md text-center w-64"
        >
          Twitter
        </button>
        <button
          onClick={() =>
            (window.location.href = "https://www.instagram.com/___phrase.u/")
          }
          className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow text-center w-64"
        >
          Instagram
        </button>
        <button
          onClick={() =>
            (window.location.href = "https://www.tiktok.com/@nanatanaka711")
          }
          className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow text-center w-64"
        >
          TikTok
        </button>
        <button
          onClick={() =>
            (window.location.href = "https://youtube.com/@nanatanaka711")
          }
          className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow text-center w-64"
        >
          YouTube
        </button>
        <button
          onClick={() =>
            (window.location.href =
              "https://www.spooncast.net/jp/channel/315753423/tab/home")
          }
          className="text-2xl mb-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-3xl shadow text-center w-64"
        >
          Spoon
        </button>
      </div>
    </section>
  );
}
