"use client";

interface HeaderProps {
  activeSection: "profile" | "links" | "gallery";
  onSectionChange: (section: "profile" | "links" | "gallery") => void;
}

export default function Header({
  activeSection,
  onSectionChange,
}: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          {/* ロゴ部分 */}
          <div className="text-2xl font-bold text-pink-600">紅葉兎羽</div>

          {/* ナビゲーションメニュー */}
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => onSectionChange("profile")}
                className={`transition-colors ${
                  activeSection === "profile"
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                プロフィール
              </button>
            </li>
            <li>
              <button
                onClick={() => onSectionChange("gallery")}
                className={`transition-colors ${
                  activeSection === "gallery"
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => onSectionChange("links")}
                className={`transition-colors ${
                  activeSection === "links"
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                リンク
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
