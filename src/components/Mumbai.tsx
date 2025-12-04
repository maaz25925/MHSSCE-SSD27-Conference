import { useState } from 'react';

// Import local images from components folder
import GatewayOfIndia from './images/Gateway_of_India.jpg';
import ChhatrapatiShivajiTerminus from './images/Chhatrapati_shivaji_terminus.jpg';
import MarineDrive from './images/Marine_Drive.jpg';
import ElephantaCaves from './images/Elephanta_Caves.JPG';
import ChowpattyBeach from './images/chowpatty_beach.jpg';
import SiddhivinayakTemple from './images/Siddhivinayak_Temple.jpg';
import SanjayGandhiNationalPark from './images/Sanjay_Gandhi_National_Park.JPG';
import HajiAliDargah from './images/haji-ali-dargah.jpg';

interface Attraction {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function Mumbai() {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  const attractions: Attraction[] = [
    {
      id: 1,
      name: "Gateway of India",
      image: GatewayOfIndia,
      description: "The Gateway of India is an arch-monument built in the early 20th century in South Mumbai, India. Located on the waterfront of Apollo Bunder, it overlooks the Arabian Sea. This iconic structure was built to commemorate the landing of King George V and Queen Mary in December 1911. The monument is a blend of Indo-Saracenic and Islamic architectural styles, featuring a prominent dome and intricate latticework. It stands as a symbol of Mumbai's rich colonial history and is one of the city's most recognizable landmarks."
    },
    {
      id: 2,
      name: "Chhatrapati Shivaji Maharaj Terminus",
      image: ChhatrapatiShivajiTerminus,
      description: "Chhatrapati Shivaji Maharaj Terminus (CSMT), formerly Victoria Terminus, is a historic railway station and UNESCO World Heritage Site in Mumbai. Built in 1887 to celebrate the Golden Jubilee of Queen Victoria, this magnificent structure combines Victorian Gothic Revival architecture with traditional Indian palace architecture. The station serves as the headquarters of India's Central Railways and is one of the busiest railway stations in India, handling over 3 million passengers daily. Its stunning stone carvings, turrets, and grand dome make it an architectural masterpiece."
    },
    {
      id: 3,
      name: "Marine Drive",
      image: MarineDrive,
      description: "Marine Drive, also known as the Queen's Necklace, is a 3.6-kilometer-long boulevard in South Mumbai that curves along the coast of the Arabian Sea. The name 'Queen's Necklace' comes from the view of its streetlights that, when illuminated at night, resemble a string of pearls. This iconic promenade is flanked by Art Deco buildings on one side and the vast Arabian Sea on the other. It's a popular spot for locals and tourists alike to enjoy the sea breeze, watch the sunset, and experience the vibrant atmosphere of Mumbai."
    },
    {
      id: 4,
      name: "Elephanta Caves",
      image: ElephantaCaves,
      description: "The Elephanta Caves are a UNESCO World Heritage Site located on Elephanta Island in Mumbai Harbor, about 10 kilometers east of Mumbai. These rock-cut cave temples date back to the 5th to 7th centuries AD and are dedicated to the Hindu god Shiva. The main cave, Cave 1, is famous for its magnificent sculptures, including the massive 6-meter-tall Trimurti Sadashiva (three-headed Shiva), Nataraja (Shiva as the Lord of Dance), and Yogishvara (Shiva as the Lord of Yoga). The caves showcase the artistic excellence of ancient Indian rock-cut architecture and sculpture."
    },
    {
      id: 5,
      name: "Chowpatty Beach",
      image: ChowpattyBeach,
      description: "Chowpatty Beach, officially known as Girgaum Chowpatty, is a popular urban beach along the Western Railway in South Mumbai. The beach stretches for about 1.5 kilometers and is famous for its street food, particularly bhelpuri and pav bhaji. It's a favorite spot for locals and tourists to relax, enjoy the sea breeze, and watch the sunset. The beach hosts various events including the annual Ganesha Chaturthi celebrations, where thousands gather to immerse idols of Lord Ganesha in the sea. Chowpatty is also known for its vibrant atmosphere and stunning views of the Marine Drive skyline."
    },
    {
      id: 6,
      name: "Siddhivinayak Temple",
      image: SiddhivinayakTemple,
      description: "The Siddhivinayak Temple is a famous Hindu temple dedicated to Lord Ganesha, located in the Prabhadevi neighborhood of Mumbai. Built in 1801, the temple is one of the richest and most visited temples in Mumbai. The idol of Lord Ganesha is believed to be 'Swayambhu' (self-originated) and is covered with a golden sheet with a silver lining. The temple's architecture features a gold-plated dome and a silver-plated entrance with a copper plate inscribed with the Ganesha Chalisa. It attracts thousands of devotees daily, including many Bollywood celebrities, especially on Tuesdays and during Ganesh Chaturthi."
    },
    {
      id: 7,
      name: "Sanjay Gandhi National Park",
      image: SanjayGandhiNationalPark,
      description: "Sanjay Gandhi National Park, formerly known as Borivali National Park, is a 104 square kilometer forest in the northern part of Mumbai. It is one of the world's largest national parks within city limits and serves as the green lung of Mumbai. The park is home to a rich variety of flora and fauna, including leopards, deer, and numerous bird species. It also houses the ancient Kanheri Caves, a group of 109 rock-cut monuments dating back to the 1st century BCE. The park offers nature trails, a lion and tiger safari, and various educational programs about conservation and wildlife."
    },
    {
      id: 8,
      name: "Haji Ali Dargah",
      image: HajiAliDargah,
      description: "Haji Ali Dargah is a Muslim shrine and mosque located on a small islet off the coast of Worli in South Mumbai. The dargah (tomb) is dedicated to the Sufi saint Pir Haji Ali Shah Bukhari, who died in Mecca but his coffin miraculously floated to this spot. The structure is connected to the mainland by a 500-meter causeway that gets submerged during high tide, creating a stunning visual effect. The dargah is an important place of worship for people of all faiths and is known for its message of peace and brotherhood. Its beautiful white marble architecture and intricate carvings make it one of Mumbai's most picturesque landmarks."
    }
  ];

  return (
    <section id="mumbai" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Mumbai
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the famous landmarks and historical places that make Mumbai the city of dreams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              onClick={() => setSelectedAttraction(attraction)}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg text-shadow-lg">
                    {attraction.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {attraction.description.split('. ')[0]}.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-emerald-600 font-semibold">Click to explore</span>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedAttraction && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex">
                <div className="w-1/3">
                  <img
                    src={selectedAttraction.image}
                    alt={selectedAttraction.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {selectedAttraction.name}
                    </h3>
                    <button
                      onClick={() => setSelectedAttraction(null)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-gray-700 leading-relaxed text-base md:text-lg">
                    {selectedAttraction.description}
                  </div>
                  <div className="mt-6 flex gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                      Historical
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      Tourist Attraction
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                      Mumbai Heritage
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
