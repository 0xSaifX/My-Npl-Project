// import {
//   Hammer,
//   Paintbrush,
//   GraduationCap,
//   Scale,
//   Landmark,
// } from "lucide-react";
import Amazon from "../assets/icons/amazon.png";
import visa from "../assets/icons/visa.png";
import Klarna from "../assets/icons/klarna.png";
import Skrill from "../assets/icons/Skrill.png";
import Mastercard from "../assets/icons/Mastercard.png";
import Lightcoin from "../assets/icons/Lightcoin.png";

const icons = [
  { src: Amazon, alt: "Amazon" },
  { src: visa, alt: "Visa" },
  { src: Klarna, alt: "Klarna" },
  { src: Skrill, alt: "Skrill" },
  { src: Mastercard, alt: "Mastercard" },
  { src: Lightcoin, alt: "Lightcoin" },
];

export default function PartnerSearchSection() {
  // Repeat icons to fill scrolling cards
  const marqueeItems = Array.from({ length: 12 }).map((_, i) => icons[i % icons.length]);

  return (
    <section className="relative h-[700px] w-full my-20">
      {/* Marquee Boxes with Icons */}
      <div className="absolute left-0 top-48 w-full h-[200px] overflow-hidden">
        <div className="flex animate-marquee gap-6">
          {marqueeItems.map((icon, i) => (
            <div
              key={i}
              className="w-[200px] h-[150px] flex-shrink-0 rounded-2xl bg-white shadow-md flex items-center justify-center"
            >
              <img src={icon.src} alt={icon.alt} className="w-50 h-50 object-contain" />
            </div>
          ))}
          {/* Duplicate for smooth infinite scroll */}
          {marqueeItems.map((icon, i) => (
            <div
              key={i + marqueeItems.length}
              className="w-[200px] h-[200px] flex-shrink-0 rounded-2xl bg-white shadow-md flex items-center justify-center"
            >
              <img src={icon.src} alt={icon.alt} className="w-16 h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Search Card */}
      <div className="absolute left-0 top-30 w-full flex justify-center z-10">
        <div className="flex max-w-[1800px] px-0 py-12 flex-col items-center gap-12 bg-white rounded-[14px] shadow-lg">
          {/* Title */}
          <div className="flex flex-col items-center gap-2 px-18">
            <h2 className="text-[40px] leading-[150%] font-bold font-ibm text-gray-900">
              제휴 업체 찾기
            </h2>
            <p className="text-lg font-pretendard text-gray-900">
              전국에 있는 풀하우스 제휴업체를 만나보세요.
            </p>
          </div>

          {/* Search Input */}
          <div className="flex flex-col items-center gap-7">
            <div className="flex flex-col items-start w-[680px]">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex h-16 max-h-16 px-7 py-4.5 items-center w-[500px] rounded-full bg-gray-300 ml-[90px]">
                  <div className="flex-1 text-lg font-pretendard text-gray-500">
                    검색어를 입력하세요.
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.5509 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9057 16.3198C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z"
                      fill="#616161"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hashtags */}
            <div className="flex justify-center items-center gap-5 w-full flex-wrap">
              {[
                "#시행 · 시공",
                "#인테리어",
                "#NPL학원",
                "#법률자문",
                "#대부(사금융)",
              ].map((tag, i) => (
                <div
                  key={i}
                  className="text-base font-medium font-pretendard text-gray-900"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            gap: 1.5rem;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
