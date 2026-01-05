import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronDown, Home, KeySquare, Search, WalletCards, } from "lucide-react";
import image2 from "../assets/image-area(1).jpg";
import image3 from "../assets/image-area(2).jpg";
import image4 from "../assets/image-area(3).jpg";
import image5 from "../assets/image-area(4).jpg";
import image6 from "../assets/image-area(5).jpg";
import image7 from "../assets/image-area(6).jpg";
import image8 from "../assets/image-area(7).jpg";
import image1 from "../assets/image-area.jpg";
import klarna from "../assets/klarna.png";
import master from "../assets/Mastercard.png";
import skirill from "../assets/Skrill.png";
import lite from "../assets/Lightcoin.png";
import amazon from "../assets/Amazon.png";
import visa from "../assets/visa.png";
import { useState } from "react";

export default function SecondPage() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const projects = [
  { title: "라이크디자인", image: image1 },
  { title: "MLP", image: image2 },
  { title: "다도디자인", image: image3 },
  { title: "나로디자인", image: image4 },
  { title: "나로디자인", image: image5 },
  { title: "다도디자인", image: image6 },
  { title: "라이크디자인", image: image7 },
  { title: "라이크디자인", image: image8 },
  ];

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
 const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "부실채권(NPL)이란?",
      answer: "NPL의 영어약자는 Non Performing Loan으로 은행에서 부동산담보대출을 받고 대출이자가 3개월 이상 연체된 무수익 여신을 가리키는 용어입니다. 흔히 부실채권이라고 부르기도 합니다. 채무자의 사정이 좋지 않아 원리금 상환이 어려운 경우 해당 대출금 대해 은행이 가지고 있는 금액이 부실채권입니다. 3개월 이상 이자가 들어오지 않는 대출을 '부실채권'으로 분류하고 있습니다."
    },
    {
      question: "부실채권의 관리 방법과 그 중요성은 무엇인가요?",
      answer: "부실채권 관리는 금융기관의 건전성 유지를 위해 매우 중요합니다."
    },
    {
      question: "부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?",
      answer: "효과적인 NPL 관리는 금융기관의 재무 건전성을 개선합니다."
    },
    {
      question: "부실채권(NPL)을 활용한 투자 전략은 어떻게 금융 수익을 극대화할 수 있나요?",
      answer: "NPL 투자는 높은 수익률을 창출할 수 있는 기회를 제공합니다."
    }
  ];

  const partners = [
  { name: "Klarna", logo: klarna },
  { name: "Mastercard", logo: master },
  { name: "Skrill", logo: skirill },
  { name: "VISA", logo: amazon },
  { name: "Litecoin", logo: lite },
  { name: "Amex", logo: master }
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
      <h2 className="text-xl sm:text-2xl lg:text-3xl mb-2 font-bold">
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
      <section className="mt-20 sm:mt-32">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* Title */}
    <h2 className="text-xl sm:text-2xl lg:text-3xl mb-2 font-bold">
      전국 모든 곳의 시행·시공 노하우
    </h2>
    <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
      지역별 프로젝트 사례를 확인해보세요.
    </p>

    {/* Filters */}
    <div className="
      flex gap-2 mb-8 sm:mb-10 
      overflow-x-auto scrollbar-hide
    ">
      {["서울/수도권", "대전", "전주", "광주", "대구", "부산"].map((c) => (
        <button
          key={c}
          className="
            px-4 py-2 rounded-full 
            border text-sm whitespace-nowrap
            hover:bg-black hover:text-white transition
          "
        >
          {c}
        </button>
      ))}
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {projects.map((p, i) => (
        <div key={i} className="group">
          <div className="
            aspect-[4/3] rounded-2xl overflow-hidden mb-3
          ">
            <img
              src={p.image}
              alt={p.title}
              className="
                w-full h-full object-cover
                group-hover:scale-105 transition-transform duration-300
              "
              loading="lazy"
            />
          </div>

          <div className="font-medium text-sm sm:text-base line-clamp-2">
            {p.title}
          </div>
          <div className="text-xs sm:text-sm text-orange-400">
            ★ 4.0
          </div>
        </div>
      ))}
    </div>

  </div>
    </section>

      {/* PARTNERS SLIDER */}
      <section className="mt-32 bg-gray-100 py-20">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

    <h2 className="text-xl sm:text-2xl lg:text-3xl mb-10 font-bold">
      우리와 함께하는 업체
    </h2>

    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex gap-6">
        {partners.map((partner, i) => (
          <div
            key={i}
            className="
              flex-[0_0_70%] 
              sm:flex-[0_0_33%] 
              lg:flex-[0_0_220px]
            "
          >
            <div className="
              h-28 
              rounded-xl 
              bg-white 
              flex items-center justify-center
              shadow-sm
            ">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
    </section>

      {/* FAQ */}
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-40 pb-20 sm:pb-28 lg:pb-40 flex flex-col gap-12">
    <div className="flex flex-col items-center gap-2 w-full">
    <div className="text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[150%] font-bold font-ibm text-gray-900">
    자주 묻는 질문
     </div>
      </div>

      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex gap-3 w-full overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
    {[
    "NPL",
    "제휴업체",
    "상품 등록",
    "홍보",
    "이용방법",
    "카페/블로그/밴드",
    ].map((item, i) => (
    <div
      key={item}
      className={`flex px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shrink-0
        ${i === 0 ? "bg-gray-900 text-white" : "bg-black/5 text-gray-900"}`}
    >
      {item}
    </div>
      ))}
    </div>

        <div className="flex flex-col w-full max-w-[1200px] mx-auto border-t border-gray-800">
          {faqs.map((faq, index) => (
            <div
            key={index}
              className="flex flex-col w-full px-2 sm:px-4 py-6 sm:py-8 gap-6 sm:gap-8 border-b border-gray-300">
              <button
               onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex items-start sm:items-center gap-4 sm:gap-6 w-full"
              >
                <div className="flex justify-between items-center flex-1">
                  <div className="text-base sm:text-lg lg:text-xl font-bold font-pretendard text-gray-900 text-left leading-snug line-clamp-2">
                   {faq.question}
                </div>

                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#141414"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex items-center gap-2.5 w-full">
                    <div className="text-sm sm:text-base font-pretendard text-gray-700 leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
}
