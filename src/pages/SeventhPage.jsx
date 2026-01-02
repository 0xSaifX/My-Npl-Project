import { Flame, Search } from "lucide-react";
import React from "react";
import house from "../assets/hball.png";
import p7 from "../assets/p7.png";
import p72 from "../assets/p72.png";
import p73 from "../assets/p73.png";
import p74 from "../assets/p74.png";
import p75 from "../assets/p75.png";
import p76 from "../assets/p76.png";
import p77 from "../assets/p77.png";
import p78 from "../assets/p78.png";

export default function SeventhPage() {

  const cafes = [
  { image: p7, title: "NPL 투자 아카데미", members: 2356 },
  { image: p72, title: "부동산 경매 스터디", members: 1870 },
  { image: p73, title: "NPL 실전 투자", members: 920 },
  { image: p74, title: "부동산 법무 카페", members: 1320 },
  { image: p75, title: "인테리어 실무자", members: 840 },
  { image: p76, title: "시행·시공 전문가", members: 1560 },
  { image: p77, title: "대부 금융 정보", members: 610 },
  { image: p78, title: "부동산 투자 네트워크", members: 2890 },
];

  return (
    <div className="w-full bg-[#FAFAFA] text-gray-900">
      {/* HERO SEARCH */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h1 className="text-[32px] md:text-[40px] font-bold mb-4">풀하우스 통합 검색</h1>
          <p className="text-gray-500 mb-10">
            네이버, 밴드, 카페를 검색하고, 가입 없이 풀하우스에서 최신 정보를 확인하세요.
          </p>

          <div className="relative max-w-[520px] mx-auto">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              className="w-full h-[52px] rounded-full bg-gray-100 px-6 pr-14 text-sm focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search/>
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-6 text-sm text-black font-bold flex-wrap">
            <span>#부동산</span>
            <span>#NPL</span>
            <span>#경매</span>
            <span>#투자</span>
            <span>#대출</span>
          </div>
        </div>
      </section>

      {/* POPULAR POSTS */}
      <section className="py-24 px-10">
        <div className="max-w-[1200px] mx-10 sm:mx-20 px-4">
          <h2 className="text-xl font-bold mb-2">인기글</h2>
          <p className="text-sm text-gray-500 mb-8">
            NPL·부동산 관련 인기글을 제공합니다. 풀하우스에서 나만의 기회를 발견해보세요.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl p-4 flex gap-4">
                <img
                  src={`/images/post-${i}.jpg`}
                  alt="post"
                  className="w-[120px] h-[80px] rounded-lg object-cover"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-orange-500 font-medium"><Flame/> 인기</span>
                    <h3 className="font-semibold text-sm mt-1 line-clamp-2">
                      2025 NEW NPL투자 기초반 정규강의 안내
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                      경매·NPL 투자자 필수 과정! 실전 중심 커리큘럼을 만나보세요.
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-400">2025.04.05</span>
                </div>
              </div>
            ))}
          </div>

          <button className="mx-auto mt-10 block px-6 py-2 border hover:text-bg-black rounded-full text-sm">
            더보기 +
          </button>
        </div>
      </section>

      {/* POPULAR CAFES */}
      <section className="py-24 bg-white">
  <div className="max-w-[1200px] mx-4 sm:mx-20 px-4">
    <h2 className="text-xl font-bold mb-6">주제별 인기 카페</h2>

    {/* Tags */}
    <div className="flex gap-2 mb-8 overflow-x-auto">
      {["전체", "시행·시공", "인테리어", "NPL 학원", "법무", "대부(사금융)"].map(
        (tag) => (
          <button
            key={tag}
            className="px-4 py-2 text-sm rounded-full bg-gray-100 whitespace-nowrap"
          >
            {tag}
          </button>
        )
      )}
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cafes.map((cafe, i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={cafe.image}
              alt={cafe.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="p-4">
            <span className="text-xs text-orange-500">네이버카페</span>
            <h3 className="text-sm font-semibold mt-1 line-clamp-2">
              {cafe.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              가입자수 {cafe.members.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>

    <button className="mx-auto mt-10 block px-6 py-2 border rounded-full text-sm">
      더보기 +
    </button>
  </div>
</section>


      {/* BOTTOM BANNER */}
      <section className="bg-[#5AA6D6] py-10">
        <div className="max-w-[1200px] mx-10 sm:mx-20 px-4 flex items-center justify-between flex-col md:flex-row gap-6">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">풀하우스만의 특별 상담</h3>
            <p className="text-sm text-white/80">
              풀하우스의 전문가와 실시간 상담을 만나보세요.
            </p>
          </div>
          <img
            src= {house}
            alt="consult"
            className="w-[160px] object-cover"
          />
        </div>
      </section>
    </div>
  );
}
