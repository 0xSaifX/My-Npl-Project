import useEmblaCarousel from "embla-carousel-react";
import box from "../assets/box.png";
import home from "../assets/home.png";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function FourthPage() {
  const [emblaRef] = useEmblaCarousel({ align: "start", loop: false });

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
          <p>
            
          </p>
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
          <section className="mt-8 m-20 items-center">
            <h3 className="text-base font-semibold mb-4">
              풀하우스만의 차별화된 NPL 교육
            </h3>

            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex-[0_0_70%] sm:flex-[0_0_40%] lg:flex-[0_0_240px]"
                  >
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={`/images/academy-${i}.jpg`}
                        className="w-full h-[150px] object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <span className="text-orange-500 text-xs"><FaStar/> 추천</span>
                      <h4 className="text-sm font-medium mt-1">
                        강남 NPL 경매학원
                      </h4>
                      <p className="text-xs text-gray-400">서울 강남구</p>
                    </div>
                  </div>
                ))}
              </div>
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
          <section className="mt-16 m-20">
            <h3 className="font-semibold">지역별</h3>

            <div className="flex gap-2 mt-4 overflow-x-auto">
              {["전체", "서울", "부산", "대구", "광주"].map((r) => (
                <button
                  key={r}
                  className="px-4 py-1.5 rounded-full border text-sm whitespace-nowrap"
                >
                  {r}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i}>
                  <div className="rounded-xl overflow-hidden aspect-[4/3]">
                    <img
                      src={`/images/grid-${i}.jpg`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-2">
                    <div className="text-orange-500 text-xs">★ 4.0</div>
                    <h4 className="text-sm font-medium">
                      NPL 경매학원
                    </h4>
                    <p className="text-xs text-gray-400">서울 강남구</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* COMMUNITY */}
          <section className="mt-20 m-20 center items-center">
            <h3 className="font-semibold">커뮤니티</h3>
            <p className="text-sm text-gray-500 mt-1">
              엄선된 NPL 학원 관련 모든 커뮤니티 글을 확인해보세요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex gap-4">
                  <img
                    src={`/images/community-${i}.jpg`}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div>
                    <span className="text-xs text-orange-500">🔥 인기</span>
                    <h4 className="text-sm font-medium mt-1">
                      2025 NEW NPL 투자 기초반
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      2025. 4. 5
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <button className="px-6 py-2 border rounded-full text-sm">
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
