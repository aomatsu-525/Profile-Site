"use client";

import { useState } from "react";

interface HeaderProps {
  activeSection: "profile" | "links" | "gallery";
  onSectionChange: (section: "profile" | "links" | "gallery") => void;
}

export default function Header({
  activeSection,
  onSectionChange,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionChange = (section: "profile" | "links" | "gallery") => {
    onSectionChange(section);
    setIsMenuOpen(false); // メニューを閉じる
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          {/* ロゴ部分 */}
          <div className="text-2xl font-bold text-pink-600">紅葉兎羽</div>

          {/* デスクトップ用ナビゲーションメニュー */}
          <ul className="hidden md:flex space-x-6">
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

          {/* モバイル用ハンバーガーメニューボタン */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </nav>

        {/* モバイル用ドロップダウンメニュー */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="py-2 space-y-2 border-t border-gray-200 mt-3">
            <li>
              <button
                onClick={() => handleSectionChange("profile")}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  activeSection === "profile"
                    ? "text-pink-600 font-semibold bg-pink-50"
                    : "text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                プロフィール
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("gallery")}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  activeSection === "gallery"
                    ? "text-pink-600 font-semibold bg-pink-50"
                    : "text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSectionChange("links")}
                className={`block w-full text-left px-4 py-2 transition-colors ${
                  activeSection === "links"
                    ? "text-pink-600 font-semibold bg-pink-50"
                    : "text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                }`}
              >
                リンク
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
