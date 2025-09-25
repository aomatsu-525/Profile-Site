export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          {/* ロゴ部分 */}
          <div className="text-2xl font-bold text-pink-600">
            紅葉兎羽
          </div>

          {/* ナビゲーションメニュー */}
          <ul className="flex space-x-6">
            <li>
              <a href="#profile" className="text-gray-700 hover:text-pink-600 transition-colors">
                プロフィール
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#links" className="text-gray-700 hover:text-pink-600 transition-colors">
                リンク
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
