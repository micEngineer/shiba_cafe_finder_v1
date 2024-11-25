import React from 'react';
import { Star, MapPin, Clock, Phone } from 'lucide-react';

interface CafeProps {
  name: string;
  rating: number;
  address: string;
  hours: string;
  phone: string;
  imageUrl: string;
  shibaCount: number;
}

export default function CafeCard({ name, rating, address, hours, phone, imageUrl, shibaCount }: CafeProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {shibaCount} 柴犬
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="text-gray-700">{rating.toFixed(1)}</span>
        </div>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{address}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{hours}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}