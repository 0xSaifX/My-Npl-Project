import React from "react";
import home from "../assets/home.png";
import img1 from "../assets/p4-1.png";
import hero from "../assets/hero6.jpg";
import { BiMoney } from "react-icons/bi";


export default function SixthPage() {
  return (
    <div className="w-full bg-[#f8f8f8] text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[260px] md:h-[360px] lg:h-[420px] object-cover bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/hero6.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            신속하고 믿음있는 금융상담
          </h1>
          <p className="mt-3 max-w-xl text-sm md:text-base opacity-90">
            빠르고 정확한 상담으로 금융 문제를 쉽고 효율적으로 해결해보세요.
          </p>
        </div>
      </section>

      {/* MAIN CARD */}
      <section className="relative -mt-16 md:-mt-20">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white px-6 py-12 md:px-12 md:py-16 shadow-sm">
          <h2 className="text-lg md:text-xl font-bold">
            부동산 구매에 추가 자금이 필요하신가요?
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            원하시는 조건에 맞는 최적의 금융을 신중하게 선정해드립니다.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "NPL 부동산 구매 자금 부족",
                desc: "재무 금융사로 자금을 빠르게 마련해드립니다.",
                icon: "⚠️",
              },
              {
                title: "제휴 금융사 자금 지원",
                desc: "최적의 금융사로 간편한 자금 지원을 제공합니다.",
                icon: "✅",
              },
              {
                title: "최저 이율 최대 대출 제공",
                desc: "낮은 이율로 최대 한도 대출을 지원합니다.",
                icon: <BiMoney/>,
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff6eb] text-2xl">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white">
              금융 상담 신청
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                →
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* GREEN BANNER */}
      <section className="mx-auto mt-16 max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#e6f5c7] p-8 md:p-10">
          <div className="max-w-lg">
            <span className="text-xs font-semibold text-green-700">
              NPL 실전투자
            </span>
            <h3 className="mt-2 text-lg font-bold">
              경매를 이기는 투자 바이블 놓치지 마세요!
            </h3>
            <p className="mt-2 text-sm text-green-900/80">
              지금 NPL 투자, 후순위 근저당권 투자 등 총정리!
            </p>
          </div>
          <img
            src= {home}
            alt="house"
            className="absolute right-6 bottom-0 h-28 md:h-36"
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto mt-24 max-w-6xl px-6 pb-24">
        <h2 className="text-xl font-bold">후기 모음</h2>
        <p className="mt-2 text-sm text-gray-500">
          생생한 후기로 만족도를 체험해보세요.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white p-6 text-sm shadow-sm"
            >
              <div className="flex items-center gap-2 font-semibold">
                금융캐피탈
              </div>
              <p className="mt-3 text-gray-600 line-clamp-3">
                정말 좋았어요. 타 이자율에 비해 낮은 편이었고 상담도
                친절했습니다.
              </p>
              <div className="mt-4 flex justify-between text-xs text-gray-400">
                <span>from. 이용자</span>
                <span>2025.03.06</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full border px-8 py-3 text-sm">
            더보기 +
          </button>
        </div>
      </section>
    </div>
  );
}
