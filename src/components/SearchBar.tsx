import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        placeholder="エリアや駅名で柴犬カフェを検索..."
        className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
}