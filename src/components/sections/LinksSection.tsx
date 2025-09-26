"use client";

export default function LinksSection() {
  const links = [
    { name: "Twitter", url: "https://x.com/711Spoon/", icon: "🐦" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/___phrase.u/",
      icon: "📷",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@nanatanaka711",
      icon: "🎵",
    },
    { name: "YouTube", url: "https://youtube.com/@nanatanaka711", icon: "📺" },
    {
      name: "Spoon",
      url: "https://www.spooncast.net/jp/channel/315753423/tab/home",
      icon: "🎙️",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-4" id="links">
      <p
        className="text-4xl sm:text-6xl md:text-8xl text-left ml-4 sm:ml-8 mt-8 sm:mt-16 mb-8 sm:mb-16 font-thin
        bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
      >
        Links
      </p>

      <div className="flex flex-col items-center mb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                  {link.name}
                </h3>
                <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
          ))}
        </div>

        {/* 装飾的な要素 */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-4">
            各種SNSでも配信情報をお届けしています✨
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
