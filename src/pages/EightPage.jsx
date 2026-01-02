import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BiLeftArrow } from "react-icons/bi";

const notices = [
  {
    title: "NPL 사업 운영 변경 사항 안내",
    date: "2025.1.23",
    content: `1. 서비스 범위 확대
앞으로 NPL 사업은 기존의 채권 관리 및 회수 서비스 외에도, 채권 재구성 및 법적 조치 서비스를 추가로 제공합니다.

2. 고객 맞춤형 솔루션 도입
각 고객의 필요에 맞춘 맞춤형 솔루션 제공을 강화합니다.

3. 온라인 서비스 플랫폼 개선
실시간 채권 상태 추적 및 결제 시스템을 강화합니다.`,
  },
  {
    title: "시스템 점검으로 인한 서비스 일시 중단 안내",
    date: "2025.1.23",
    content: "시스템 안정화를 위한 점검이 예정되어 있습니다.",
  },
  {
    title: "부실채권 회수율 개선 전략 도입 안내",
    date: "2025.1.23",
    content: "새로운 회수 전략이 도입됩니다.",
  },
  {
    title: "실시간 채권 상태 조회 기능 개선 완료",
    date: "2025.1.23",
    content: "조회 속도 및 정확도가 개선되었습니다.",
  },
];

export default function EightPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="min-h-screen bg-white px-4 sm:px-8 py-24">

         <div className="flex justify-center gap-8 mb-2 text-sm text-black font-bold flex-wrap">
            <span>투자대출 <hr /> </span>
            <span>공지사항</span>
            <span>경매부동산</span>
          </div>
        <div className="border-t border-gray-400 mb-6" />
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-xl font-semibold mb-2">공지사항</h1>
        <p className="text-sm text-gray-600 mb-10">
          NPL 사업에 대한 최신 공지와 안내를 전달드립니다.
        </p>

       {/* Filters */}
        <div className="flex flex-wrap font-bold gap-2 mb-10">
          {['NPL', '인기순', '추천순', '리뷰순', '분야별', '지역 찾기'].map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-black hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-6" />

        {/* FAQ List */}
        <ul className="space-y-0">
          {notices.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <li key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-sm sm:text-base font-medium">
                    {item.title}
                  </span>

                  <div className="flex items-center gap-6">
                    <span className="text-xs text-gray-400">
                      {item.date}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.content}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-16 text-sm text-gray-400">
          <button className="hover:text-white">&laquo;</button>
          <button className="hover:text-white">&lsaquo;</button>
          <button className="w-8 h-8 rounded-full bg-gray-700 text-white">
            2
          </button>
          <button className="hover:text-white">3</button>
          <button className="hover:text-white">4</button>
          <button className="hover:text-white">5</button>
          <button className="hover:text-white">&rsaquo;</button>
          <button className="hover:text-white">&raquo;</button>
        </div>
      </div>
    </section>
  );
}
