import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronDown, Home, KeySquare, Search, WalletCards, } from "lucide-react";

export default function SecondPage() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

const services = [
  {
    title: "문제 진단",
    icon: Search,
  },
  {
    title: "법률 문제 해결",
    icon: KeySquare,
  },
  {
    title: "전문 설계·시공",
    icon: WalletCards,
  },
  {
    title: "정확한 완공",
    icon: Home,
  },
];

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section
        className="relative h-[320px] sm:h-[320px] lg:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2400)",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-[42px] font-bold tracking-tight">OLNY 풀하우스</h1>
          <p className="mt-3 text-sm opacity-90">
            풀하우스에서 경험할 수 있는 차별화된 서비스를 만나보세요.
          </p>
        </div>
      </section>

      {/* SERVICES */}
       <section className="relative -mt-24">
      <div className="max-w-[1280px] mx-auto bg-white rounded-[32px] px-16 py-20 shadow-sm">

      <div className="mx-20">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
        반값 물건 시행·시공에 어려움이 있으신가요?
      </h2>
      <p className="text-sm text-gray-500 mb-14">
        각 분야의 전문가들이 처음부터 끝까지 함께합니다.
      </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mx-20">
      {services.map(({ title, icon: Icon }, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center gap-4"
        >
          <div className="w-20 h-20 rounded-2xl bg-[#FFF5EB] flex items-center justify-center">
              <Icon className="w-9 h-9 text-orange-500" strokeWidth={1.5} />
          </div>

          <div className="font-medium">{title}</div>
          <div className="text-xs text-gray-400">NPL 부동산 전문</div>
        </div>
      ))}
    </div>

    <div className="mt-14 flex justify-center">
      <button className="flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full text-sm">
        통합 컨설팅 상담 신청
        <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center">
          →
        </span>
      </button>
    </div>

    </div>
  </section>


      {/* PROJECTS */}
      <section className="max-w-[1280px] mt-28 mx-20">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">전국 모든 곳의 시행·시공 노하우</h2>
        <p className="text-sm text-gray-500 mb-8">
          지역별 프로젝트 사례를 확인해보세요.
        </p>

        <div className="flex gap-2 mb-10">
          {["서울/수도권", "대전", "전주", "광주", "대구", "부산"].map((c) => (
            <button
              key={c}
              className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white"
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="h-[180px] rounded-xl bg-gray-200" />
              <div className="font-medium">서울 빌딩</div>
              <div className="text-xs text-gray-400">준공일 2025년 2월</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS SLIDER */}
      <section className="mt-32 bg-gray-50 py-20">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">우리와 함께하는 업체</h2>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {["Klarna", "Mastercard", "Skrill", "VISA", "Litecoin", "Amex"].map(
                (b, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_70%] sm:flex-[0_0_33%] lg:flex-[0_0_220px]"
                  >
                    <span className="font-semibold">{b}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1280px] py-32 mx-20">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">자주 묻는 질문</h2>

        <div className="flex gap-2 mb-8">
          {["NPL", "계약", "상품", "홍보", "이용방법", "카테고리"].map((t) => (
            <button
              key={t}
              className="px-4 py-2 rounded-full border text-sm hover:bg-black hover:text-white"
            >
              {t}
            </button>
          ))}
        </div>

        <div className="divide-y">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="py-6 flex justify-between items-center cursor-pointer"
            >
              <span className="font-medium">
                부실채권(NPL)이란 무엇인가요?
              </span>
              <span><ChevronDown/></span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
