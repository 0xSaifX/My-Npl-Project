import React from "react";
import c1 from "../assets/pd1.png";
import c2 from "../assets/pd2.png";
import c3 from "../assets/pd3.png";
import c4 from "../assets/pd4.png";
import c5 from "../assets/pd5.png";
import c6 from "../assets/pd6.png";

export default function FifthPage() {

  const communityPosts = [
  {
    image: c1,
    text: "부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?",
    title: "2025 NEW NPL 투자 기초반",
    date: "2025. 4. 5",
    hot: true,
  },
  {
    image: c2,
    text: "부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?",
    title: "NPL 경매 실전 후기",
    date: "2025. 4. 2",
    hot: true,
  },
  {
    image: c3,
    text: "부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?",
    title: "부동산 투자 트렌드 분석",
    date: "2025. 3. 28",
    hot: true,
  },
  {
    image: c4,
    text: "부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?",
    title: "초보자를 위한 NPL 가이드",
    date: "2025. 3. 20",
    hot: true,
  },
];

  return (
    <main className="w-full bg-white text-gray-900">
      {/* HERO SECTION */}
      <section
        className="relative h-[420px] md:h-[520px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-law.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-[1280px] mx-auto h-full px-6 flex flex-col justify-center">
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
              className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-sm border">
              <img
                src={`/images/service-${i}.jpg`}
                alt="service"
                className="h-[180px] w-full object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-orange-500 font-semibold">
                  부동산 · 유치권
                </span>
                <h3 className="mt-1 font-bold">퍼스트존 법률사무소</h3>
                <p className="text-sm text-gray-500 mt-1">서울 강남구</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 rounded-full bg-black text-white">
            법률 상담 신청 →
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
            src="/images/green-house.png"
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="text-center">
              <img
                src={`/images/lawyer-${i}.jpg`}
                alt="lawyer"
                className="mx-auto rounded-xl h-[220px] w-full object-cover"
              />
              <h4 className="mt-3 font-bold">김대성 변호사</h4>
              <p className="text-sm text-gray-500">부동산 전문</p>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST CONSULTATIONS */}
      <section className="mt-20 mx-4 bg-gray-300 sm:mx-10 lg:mx-20">
  <h3 className="font-semibold text-lg">커뮤니티</h3>
  <p className="text-sm text-gray-500 mt-1">
    엄선된 NPL 학원 관련 모든 커뮤니티 글을 확인해보세요.
  </p>

 <div className="flex gap-2 mb-10 mt-4 text-sm ">
          {["서울수도권", "부대구산"].map((c) => (
            <button
              key={c}
              className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white"
            >
              {c}
            </button>
          ))}
        </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
    {communityPosts.map((post, i) => (
      <div key={i} className="flex gap-4 bg-[#e8f6d1] p-4 items-start">
        {/* Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
          loading="lazy"
        />

        {/* Text */}
        <div>
          {post.hot && (
            <span className="text-xs text-orange-500">🔥 인기</span>
          )}
          <h4 className="text-sm font-medium mt-1 line-clamp-2">
            {post.title}
          </h4>
          <p className="text-xs text-gray-500 mt-3">{post.text}</p>
          <p className="text-xs text-gray-400 mt-1">{post.date}</p>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-10">
    <button className="px-6 py-2 border rounded-full text-sm hover:bg-gray-100 transition">
      더보기 +
    </button>
  </div>
          </section>
    </main>
  );
}
