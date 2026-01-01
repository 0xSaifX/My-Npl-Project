import useEmblaCarousel from "embla-carousel-react";
import box from "../assets/box.png";
import home from "../assets/home.png";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import img1 from "../assets/p4-1.png";
import img2 from "../assets/p4-2.png";
import img3 from "../assets/p4-3.png";
import img4 from "../assets/p4-4.png";
import img5 from "../assets/p4-5.png";
import img6 from "../assets/p4-6.png";
import img7 from "../assets/p4-7.png";
import img8 from "../assets/p4-8.png";
import c1 from "../assets/pd1.png";
import c2 from "../assets/pd2.png";
import c3 from "../assets/pd3.png";
import c4 from "../assets/pd4.png";
import c5 from "../assets/pd5.png";
import c6 from "../assets/pd6.png";

export default function FourthPage() {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: false });

  const academies = [
  {
    image: img3,
    title: "강남 NPL 경매학원",
    location: "서울 강남구",
  },
  {
    image: img5,
    title: "부동산 실전 투자반",
    location: "서울 서초구",
  },
  {
    image: img8,
    title: "NPL 초보 입문 과정",
    location: "경기 성남시",
  },
  {
    image: img4,
    title: "고수익 NPL 마스터반",
    location: "부산 해운대구",
  },
];

  const cards = [
  {
    image: img1,
    rating: "4.0",
    title: "NPL 경매학원",
    location: "서울 강남구",
  },
  {
    image: img2,
    rating: "4.2",
    title: "부동산 컨설팅",
    location: "서울 서초구",
  },
  {
    image: img3,
    rating: "4.5",
    title: "시행 · 시공 업체",
    location: "부산 해운대",
  },
  {
    image: img4,
    rating: "4.1",
    title: "인테리어 전문",
    location: "대구 수성구",
  },
  {
    image: img5,
    rating: "4.3",
    title: "법률자문",
    location: "광주 북구",
  },
  {
    image: img6,
    rating: "4.0",
    title: "금융 컨설팅",
    location: "서울 영등포",
  },
  {
    image: img7,
    rating: "4.4",
    title: "대부업체",
    location: "인천 연수구",
  },
  {
    image: img8,
    rating: "4.6",
    title: "NPL 투자",
    location: "경기 성남",
  },
];

const communityPosts = [
  {
    image: c1,
    title: "2025 NEW NPL 투자 기초반",
    date: "2025. 4. 5",
    hot: true,
  },
  {
    image: c2,
    title: "NPL 경매 실전 후기",
    date: "2025. 4. 2",
    hot: true,
  },
  {
    image: c3,
    title: "부동산 투자 트렌드 분석",
    date: "2025. 3. 28",
    hot: true,
  },
  {
    image: c4,
    title: "초보자를 위한 NPL 가이드",
    date: "2025. 3. 20",
    hot: true,
  },
  {
    image: c5,
    title: "NPL 수익 구조 완전 정리",
    date: "2025. 3. 15",
    hot: true,
  },
  {
    image: c6,
    title: "법률 리스크 체크 포인트",
    date: "2025. 3. 10",
    hot: true,
  },
];


  return (
    <main className="bg-[#f7f7f7]">
      {/* Hero */}
      <section className="relative h-[160px] sm:h-[220px] lg:h-[320px] object-cover bg-cover
      "style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2400)",
        }}
      >
        <img
          src="/images/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
            NPL 전문가로의 첫걸음
          </h1>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="bg-white rounded-t-[32px] -mt-10 relative z-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0 py-12">

          {/*  INTRO  */}
          <section className="ml-20 items-center justify-center">
            <h2 className="text-lg font-semibold">NPL 특수물건 학원</h2>
            <p className="mt-2 text-sm text-gray-500">
              NPL 전문가가 되고 싶으신가요? 차별화된 NPL 교육을 직접 경험해보세요.
            </p>
          </section>

          {/* SLIDER */}
          <section className="mt-8 mx-4 sm:mx-10 lg:mx-20">
  <h3 className="text-base font-semibold mb-4">
    풀하우스만의 차별화된 NPL 교육
  </h3>

  <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-6
  ">
    {academies.map((item, i) => (
      <div key={i}>
        {/* Image */}
        <div className="rounded-xl overflow-hidden aspect-[4/3]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="mt-2">
          <span className="text-orange-500 text-xs flex items-center gap-1">
            <FaStar /> 추천
          </span>
          <h4 className="text-sm font-medium mt-1 line-clamp-1">
            {item.title}
          </h4>
          <p className="text-xs text-gray-400">{item.location}</p>
        </div>
      </div>
    ))}
  </div>
</section>


          {/* GREEN CTA */}
          <section className="mt-12 bg-[#e6f3c8] rounded-2xl p-6 m-20 sm:m-40 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#4f6f1d]">
                NPL 실전투자
              </p>
              <h3 className="mt-1 font-semibold">
                경매를 이기는 투자 바이블 놓치지 마세요!
              </h3>
            </div>
            <img
              src={home}
              className="w-20 object-contain sm:block shrink-0"
            />
          </section>

          {/* REGION */}
          <section className="mt-16 mx-4 sm:mx-10 lg:mx-20">
  <h3 className="font-semibold text-lg">지역별</h3>

  {/* Region Pills */}
  <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
    {["전체", "서울", "부산", "대구", "광주"].map((r) => (
      <button
        key={r}
        className="px-4 py-1.5 rounded-full border text-sm whitespace-nowrap hover:bg-black/50 transition"
      >
        {r}
      </button>
    ))}
  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    {cards.map((item, i) => (
      <div key={i} className="group">
        {/* Image */}
        <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text */}
        <div className="mt-2">
          <div className="text-orange-500 text-xs">★ {item.rating}</div>
          <h4 className="text-sm font-medium">{item.title}</h4>
          <p className="text-xs text-gray-400">{item.location}</p>
        </div>
      </div>
    ))}
  </div>
          </section>


          {/* COMMUNITY */}
          <section className="mt-20 mx-4 sm:mx-10 lg:mx-20">
  <h3 className="font-semibold text-lg">커뮤니티</h3>
  <p className="text-sm text-gray-500 mt-1">
    엄선된 NPL 학원 관련 모든 커뮤니티 글을 확인해보세요.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
    {communityPosts.map((post, i) => (
      <div key={i} className="flex gap-4 bg-[#a8f4d1] p-4 items-start">
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

        </div>

        {/* BOTTOM CTA */}
        <section className="bg-[#4aa0d8] mt-24 ">
          <div className="max-w-[1280px] mx-20 px-4 pt-12 flex items-center justify-between">
            <div className="text-white mb-5">
              <p className="text-sm">NPL 특강 A to Z</p>
              <h3 className="text-xl font-semibold mt-1">
                이영준 박사 NPL 특강 회원모집
              </h3>
              <p className="text-xs mt-2 opacity-80">
                2025년 4월 | 선착순 모집
              </p>
            </div>
            <img
              src= {box}
              className="w-38 hidden sm:block shrink-0"
            />
          </div>
        </section>

      </div>
    </main>
  );
}
