import React, { useState } from 'react';
import { Dog } from 'lucide-react';
import SearchBar from './components/SearchBar';
import CafeCard from './components/CafeCard';

// サンプルデータ
const CAFES = [
  {
    id: 1,
    name: "柴カフェ 渋谷店",
    rating: 4.8,
    address: "東京都渋谷区神南1-1-1",
    hours: "10:00 - 19:00",
    phone: "03-1234-5678",
    imageUrl: "https://images.unsplash.com/photo-1593874105671-d745ff7ce8ba?auto=format&fit=crop&q=80",
    shibaCount: 5
  },
  {
    id: 2,
    name: "Shiba Paradise 原宿",
    rating: 4.6,
    address: "東京都渋谷区神宮前1-1-1",
    hours: "11:00 - 20:00",
    phone: "03-8765-4321",
    imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80",
    shibaCount: 7
  },
  {
    id: 3,
    name: "柴犬の森カフェ 新宿",
    rating: 4.9,
    address: "東京都新宿区新宿3-1-1",
    hours: "10:30 - 21:00",
    phone: "03-2468-1357",
    imageUrl: "https://images.unsplash.com/photo-1583336663277-620dc1996580?auto=format&fit=crop&q=80",
    shibaCount: 6
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCafes = CAFES.filter(cafe => 
    cafe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cafe.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Dog className="w-8 h-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-800">柴犬カフェファインダー</h1>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 py-8">
        {/* 検索セクション */}
        <div className="flex justify-center mb-12">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* カフェ一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCafes.map(cafe => (
            <CafeCard key={cafe.id} {...cafe} />
          ))}
        </div>

        {/* 検索結果が0の場合 */}
        {filteredCafes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              申し訳ありません。お探しの柴犬カフェが見つかりませんでした。
            </p>
          </div>
        )}
      </main>

      {/* フッター */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © 2024 柴犬カフェファインダー All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;