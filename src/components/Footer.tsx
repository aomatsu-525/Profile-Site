"use client";

export default function Footer() {
  const quickLinks = [
    { label: "プロフィール", href: "#profile" },
    { label: "Gallery", href: "#gallery" },
    { label: "リンク", href: "#links" },
  ];

  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/60">
      <div className="max-w-6xl mx-8 md:mx-16 lg:mx-32 xl:mx-64 px-4 py-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="sm:col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            クイックリンク
          </h2>
          <nav className="flex flex-col gap-2">
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-pink-600 underline-offset-4 hover:underline transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Contact</h2>
          <div className="space-y-2 text-gray-700">
            <div>
              <span className="mr-2">Twitter</span>
              <a
                href="https://x.com/711Spoon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                @711Spoon
              </a>
            </div>
            <div>
              <span className="text-gray-600">ファンネーム</span>
              <span className="ml-2 font-medium">永遠組</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} 紅葉兎羽
      </div>
    </footer>
  );
}
