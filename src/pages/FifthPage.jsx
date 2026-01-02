import React from "react";
import img1 from "../assets/image-area(2).jpg";
import img2 from "../assets/image-area(4).jpg";
import img3 from "../assets/image-area(6).jpg";
import img4 from "../assets/image-area(7).jpg";
import law1 from "../assets/lawyer1.png";
import law2 from "../assets/lawyer2.png";
import law3 from "../assets/lawyer3.png";
import law4 from "../assets/lawyer4.png";
import law5 from "../assets/lawyer5.png";
import law6 from "../assets/lawyer6.png";
import law7 from "../assets/lawyer7.png";
import law8 from "../assets/lawyer8.png";
import home from "../assets/home.png";


export default function FifthPage() {

  const services = [
  {
    image: img1,
    category: "부동산 · 유치권",
    name: "퍼스트존 법률사무소",
    location: "서울 강남구",
  },
  {
    image: img2,
    category: "법률자문",
    name: "에이스 법무법인",
    location: "서울 서초구",
  },
  {
    image: img3,
    category: "채권 분석",
    name: "NPL 솔루션",
    location: "경기 성남시",
  },
  {
    image: img4,
    category: "부동산 경매",
    name: "탑옥션 컨설팅",
    location: "부산 해운대구",
  },
];

const lawyers = [
  { image: law1, name: "김대성 변호사", specialty: "부동산 전문" },
  { image: law2, name: "박지훈 변호사", specialty: "경매 · NPL" },
  { image: law3, name: "이수현 변호사", specialty: "부동산 소송" },
  { image: law4, name: "정민재 변호사", specialty: "채권 추심" },
  { image: law5, name: "오세훈 변호사", specialty: "부동산 자문" },
  { image: law6, name: "최은지 변호사", specialty: "경매 컨설팅" },
  { image: law7, name: "한지민 변호사", specialty: "부동산 계약" },
  { image: law8, name: "윤성호 변호사", specialty: "법률 자문" },
];

  return (
    <main className="w-full bg-white text-gray-900">
      {/* HERO SECTION */}
      <section
        className="relative h-[320px] md:h-[420px] w-full bg-cover bg-center"
          style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2400)",
        }}
>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-[1280px] items-center mx-auto h-full px-6 flex flex-col justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            법률 문제, 전문가와 함께
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-base md:text-lg">
            해결이 어려운 부동산·법률 문제를 전문가와 함께 가장 합리적인 방향으로 해결해보세요.
          </p>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2">법률자문 서비스</h2>
        <p className="text-gray-600 mb-8">
          유치권, 명도소송, 가등기 등 복잡한 부동산 법률 문제를 빠르고 정확하게 해결합니다.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['인기순', '추천순', '리뷰순', '분야별', '지역 찾기'].map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-black hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Service Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       {services.map((item, i) => (
     <div
      key={i}
      className="rounded-xl overflow-hidden shadow-sm border bg-white"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-orange-500 font-semibold">
          {item.category}
        </span>
        <h3 className="mt-1 font-bold text-sm line-clamp-1">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {item.location}
        </p>
      </div>
    </div>
    ))}
  </div>

        <div className="flex justify-center mt-12">
            <button
          className="flex items-center justify-between w-80 px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
        >
          <span className="text-white font-bold text-lg">
            통합 컨설팅 상담 신청
          </span>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            →
          </div>
        </button>
        </div>
      </section>

      {/* HIGHLIGHT BANNER */}
      <section className="max-w-[1280px] mx-auto px-6 mb-24">
        <div className="relative rounded-2xl bg-lime-200 p-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="text-sm font-semibold">NPL 실전투자</span>
            <h3 className="mt-2 text-xl font-bold">
              경매를 이기는 투자 바이블 놓치지 마세요!
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              실전 NPL 투자, 후회 없는 선택을 도와드립니다.
            </p>
          </div>
          <img
            src= {home}
            alt="banner"
            className="h-[120px] mt-6 md:mt-0"
          />
        </div>
      </section>

      {/* LAWYER SECTION */}
      <section className="max-w-[1280px] mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold mb-2">변호사</h2>
        <p className="text-gray-600 mb-6">
          다양한 분야의 전문 변호사들이 여러분의 어려움을 해결해드립니다.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 mb-10">
          <span className="text-blue-600 font-semibold text-sm">이벤트</span>
          <p className="mt-1 font-bold">4월 한달간 변호사 수임료 50% 할인</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {['인기순', '추천순', '리뷰순', '분야별', '지역 찾기'].map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-black hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
  {lawyers.map((lawyer, i) => (
    <div key={i} className="text-center">
      <div className="aspect-[3/4] overflow-hidden rounded-xl">
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h4 className="mt-3 font-bold text-sm sm:text-base">
        {lawyer.name}
      </h4>
      <p className="text-xs sm:text-sm text-gray-500">
        {lawyer.specialty}
      </p>
    </div>
  ))}
</div>

      </section>

      {/* LATEST CONSULTATIONS */}
      <section className="max-w-[1280px] mx-auto px-6 pb-32">
        <h2 className="text-2xl font-bold mb-2">최신 상담글</h2>
        <p className="text-gray-600 mb-8">
          생생한 상담 내용과 후기들을 확인해보세요.
        </p>
         <div className="flex gap-2 mb-10 text-sm ">
          {["서울/도권", "부산대구"].map((c) => (
            <button
              key={c}
              className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white"
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border rounded-xl p-6">
              <span className="text-xs text-orange-500 font-semibold">
                부동산 · 유치권
              </span>
              <h3 className="mt-2 font-bold">
                지상권 등기 원인 무효와 지상권 진로 관련 문제
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                상담을 진행하며 발생한 복잡한 지상권 문제에 대해 조언을 구합니다.
              </p>
              <p className="mt-4 text-xs text-gray-400">2025.04.05</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 border rounded-full text-sm">
            더보기 +
          </button>
        </div>
      </section>
    </main>
  );
}
