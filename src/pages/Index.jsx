import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import site from '../client/assets/site.png';
import inter from '../client/assets/interior.png';

import klarna from "../assets/klarna.png";
import master from "../assets/mastercard.png";
import skirill from "../assets/Skrill.png";
import lite from "../assets/lightcoin.png";
import amazon from "../assets/amazon.png";
import visa from "../assets/visa.png";

export default function Index() {
  return (
  <div className="w-full bg-white">
      {/* <Header /> */}
      <HeroSlider />
      <ServicesSection />
      <NPLPropertiesSection />
      <PartnersSection />
      <PopularPostsSection />
      <FAQSection />
      <VideosSection />
      <PartnerSearchSection />
      {/* <Footer /> */}
    </div>
  );
}

// import { Link, useLocation } from "react-router-dom";

// export default function Header() {
//   const location = useLocation();
  
//   const menuItems = [
//     { path: "/construction", label: "시행・시공" },
//     { path: "/interior", label: "인테리어" },
//     { path: "/academy", label: "NPL 학원" },
//     { path: "/legal", label: "법률자문" },
//     { path: "/finance", label: "금융 상담" },
//   ];

//   return (
//     <header className="flex justify-center items-center py-[30px] bg-white">
//       <div className="flex max-w-[1280px] px-10 justify-between items-center flex-1">
//         <div className="flex items-center gap-5">
//           <Link to="/" className="text-[22px] font-bold font-['Readex_Pro'] uppercase text-gray-900">
//             FULLHOUSE
//           </Link>
//         </div>
//         <div className="flex items-center gap-[52px]">
//           <nav className="flex items-center gap-10">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex justify-center items-center ${
//                   location.pathname === item.path
//                     ? "text-orange-primary font-bold"
//                     : "text-gray-900 font-bold hover:text-orange-primary"
//                 } font-pretendard text-base leading-[150%]`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>
//           <button className="w-7 h-7">
//             <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//               <path fillRule="evenodd" clipRule="evenodd" d="M2.3335 6.99967C2.3335 6.35534 2.85583 5.83301 3.50016 5.83301H24.5002C25.1445 5.83301 25.6668 6.35534 25.6668 6.99967C25.6668 7.64401 25.1445 8.16634 24.5002 8.16634H3.50016C2.85583 8.16634 2.3335 7.64401 2.3335 6.99967ZM2.3335 13.9997C2.3335 13.3553 2.85583 12.833 3.50016 12.833H24.5002C25.1445 12.833 25.6668 13.3553 25.6668 13.9997C25.6668 14.644 25.1445 15.1663 24.5002 15.1663H3.50016C2.85583 15.1663 2.3335 14.644 2.3335 13.9997ZM2.3335 20.9997C2.3335 20.3553 2.85583 19.833 3.50016 19.833H24.5002C25.1445 19.833 25.6668 20.3553 25.6668 20.9997C25.6668 21.644 25.1445 22.1663 24.5002 22.1663H3.50016C2.85583 22.1663 2.3335 21.644 2.3335 20.9997Z" fill="#141414"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const slides = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d9e8ad580f27ad9aa7a12ddfb6c5c29a82713990?width=940",
      title: "시행 · 시공부터 인테리어까지\n컨설팅 상담만 해도",
      highlight: "하이웰컴",
      subtitle: " 할인쿠폰 제공"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8c636a20e0a7da240128759d6247e023149e24a2?width=1200",
      title: "전문가 집단이 함께하는",
      highlight: "NPL 특수물건",
      subtitle: " 투자의 모든 것"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/056329b4121d7d9e0012df411c7c4b41a31ea075?width=940",
      title: "안전하고 투명한",
      highlight: "부동산 투자",
      subtitle: " 솔루션"
    }
  ];

  return (
    <section className="flex justify-center items-center gap-36 pt-20 px-8">
      <div className="w-full max-w-[1920px] flex items-center gap-36">
        <div className="flex-1">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[350px] object-cover rounded-3xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[92px] w-[520px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="text-[28px] leading-[150%] font-pretendard text-[#1C232C]">
                {slides[selectedIndex].title}
              </div>
              <div className="text-5xl leading-[150%] font-bold font-ibm">
                <span className="text-orange-light">{slides[selectedIndex].highlight}</span>
                <span className="text-[#1C232C]">{slides[selectedIndex].subtitle}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-7">
              <div className="text-base font-medium font-pretendard">01</div>
              <div className="flex items-center gap-0">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-0.5 transition-all duration-300 ${
                      index === selectedIndex ? "w-[60px] bg-gray-900" : "w-[60px] bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-base font-medium font-pretendard">0{slides.length}</div>
            </div>
            <div className="flex items-center gap-0">
              <button
                onClick={() => scrollTo(selectedIndex - 1)}
                className="flex justify-center items-center w-11 h-11 rounded-full hover:bg-gray-100"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.92259 4.4107C9.24803 4.73614 9.24803 5.26378 8.92259 5.58922L5.34518 9.16663H16.6667C17.1269 9.16663 17.5 9.53972 17.5 9.99996C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H5.34518L8.92259 14.4107C9.24803 14.7361 9.24803 15.2638 8.92259 15.5892C8.59715 15.9147 8.06951 15.9147 7.74408 15.5892L2.74408 10.5892C2.41864 10.2638 2.41864 9.73614 2.74408 9.4107L7.74408 4.4107C8.06951 4.08527 8.59715 4.08527 8.92259 4.4107Z" fill="#222222"/>
                </svg>
              </button>
              <button
                onClick={() => scrollTo(selectedIndex + 1)}
                className="flex justify-center items-center w-11 h-11 rounded-full hover:bg-gray-100"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.0774 4.4107C11.4028 4.08527 11.9305 4.08527 12.2559 4.4107L17.2559 9.4107C17.5814 9.73614 17.5814 10.2638 17.2559 10.5892L12.2559 15.5892C11.9305 15.9147 11.4028 15.9147 11.0774 15.5892C10.752 15.2638 10.752 14.7361 11.0774 14.4107L14.6548 10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 9.99996C2.5 9.53972 2.8731 9.16663 3.33333 9.16663H14.6548L11.0774 5.58922C10.752 5.26378 10.752 4.73614 11.0774 4.4107Z" fill="#222222"/>
                </svg>
              </button>
              <button className="flex justify-center items-center w-11 h-11 rounded-full opacity-50 hover:opacity-100">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.73219 4.16663C7.22852 4.16663 7.63088 4.57125 7.63088 5.07038L7.63088 14.9295C7.63088 15.4287 7.22852 15.8333 6.73219 15.8333C6.23585 15.8333 5.8335 15.4287 5.8335 14.9295L5.8335 5.07038C5.8335 4.57125 6.23585 4.16663 6.73219 4.16663ZM13.2681 4.16663C13.7645 4.16663 14.1668 4.57125 14.1668 5.07038L14.1668 14.9295C14.1668 15.4287 13.7645 15.8333 13.2681 15.8333C12.7718 15.8333 12.3694 15.4287 12.3694 14.9295L12.3694 5.07038C12.3694 4.57125 12.7718 4.16663 13.2681 4.16663Z" fill="#222222"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: (
        <svg width="100" height="100" viewBox="0 0 14 100" fill="none">
          <path d="M14 99.9999V0L-86 99.9999H14Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="-36" y1="197.945" x2="-101.883" y2="23.3124">
              <stop stopColor="#7C7C7C" stopOpacity="0.01"/>
              <stop offset="1" stopColor="#7C7C7C" stopOpacity="0.12"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "시행 · 시공",
      description: "NPL 특수물건과 관련된 개발 및 건설 프로젝트를 전문적으로 기획하고 실행하는 서비스로, 고객의 니즈에 맞는 맞춤형 솔루션을 제공합니다.",
      active: false
    },
    {
      icon: (
        <svg width="82" height="100" viewBox="0 0 82 100" fill="none">
          <path d="M39.6404 16.6667C46.5721 16.6667 52.1914 22.3442 52.1914 29.3478L52.1914 87.3189C52.1914 94.3225 46.5721 100 39.6404 100C32.7086 100 27.0894 94.3225 27.0894 87.3189L27.0894 29.3478C27.0894 22.3442 32.7086 16.6667 39.6404 16.6667Z" fill="#7C7C7C"/>
        </svg>
      ),
      title: "인테리어",
      description: "특수물건의 가치를 극대화하기 위한 전문 인테리어 서비스로, 공간의 활용성을 높이고 투자 가치를 향상시키는 고급 인테리어를 제공합니다.",
      active: false
    },
    {
      icon: (
        <div className="relative w-[148px] h-[200px]">
          <div className="absolute left-[71px] top-[46px] w-[77px] h-[154px] bg-[#FE9A0C]"></div>
          <div className="absolute left-0 top-0 w-[99px] h-[200px] bg-gradient-to-br from-[rgba(254,154,12,0.01)] to-[rgba(254,154,12,0.12)]"></div>
          <div className="absolute left-[56px] top-[93px] w-[43px] h-[107px] bg-gradient-to-b from-white to-transparent"></div>
        </div>
      ),
      title: "NPL 특수물건 학원",
      description: "NPL 특수물건에 대한 전문 지식과 시장 흐름을 익히는 교육을 운영하며, 실무 중심 강의로 전문가 성장을 돕습니다.",
      active: true
    },
    {
      icon: (
        <svg width="98" height="100" viewBox="0 0 98 100" fill="none">
          <path d="M97.5093 33.0371C97.5093 46.8442 86.2591 58.0371 72.3811 58.0371C58.5032 58.0371 47.2529 46.8442 47.2529 33.0371C47.2529 19.23 58.5032 8.03711 72.3811 8.03711C86.2591 8.03711 97.5093 19.23 97.5093 33.0371Z" fill="#7C7C7C"/>
        </svg>
      ),
      title: "부동산 법률 자문",
      description: "NPL 특수물건과 관련된 복잡한 법률 문제를 해결하기 위해 전문가의 맞춤형 자문 서비스를 제공합니다. 안정적인 거래와 투자를 지원합니다.",
      active: false
    },
    {
      icon: (
        <svg width="103" height="100" viewBox="0 0 103 101" fill="none">
          <path d="M83.3039 53.8242L98.5784 68.6693L98.5098 68.7359C104.83 76.2328 104.39 87.3129 97.1898 94.3108C89.9895 101.309 78.5888 101.736 70.8751 95.5937L70.8065 95.6604L55.532 80.8153C47.863 73.3619 47.863 61.2776 55.532 53.8242C63.201 46.3708 75.6349 46.3708 83.3039 53.8242Z" fill="#7C7C7C"/>
        </svg>
      ),
      title: "대부 (사금융)",
      description: "NPL 특수물건 투자 자금 지원을 통해 원활한 조달을 돕고, 신뢰 기반의 안전하고 유연한 금융 솔루션을 제공합니다.",
      active: false
    }
  ];
    const [activeIndex, setActiveIndex] = useState(2); // start with 3rd active
    const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };
  
  return (
    <section className="w-full py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center gap-16">

        {/* SLIDER */}
        <div className="relative w-full">
          <div
            className="flex gap-8 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${(activeIndex + 0.5) * 280}px))`,
            }}
          >
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 rounded-3xl transition-all duration-700
                    ${isActive
                      ? "w-[320px] h-[380px] bg-[#FFFAF7] scale-100 shadow-xl"
                      : "w-[260px] h-[320px] bg-[#FBFBFC] scale-90 opacity-70"}
                  `}
                >
                  <div className="h-full p-8 flex flex-col justify-end gap-4">
                    <div  className={`
                     w-[80px] h-[80px]
                     transition-transform duration-700
                      ${isActive ? "scale-110 -translate-y-6" : "scale-100 -translate-y-4"}
                      `}>
                      {service.icon}
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3
                        className={`text-xl font-bold ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed ${
                          isActive ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={nextService}
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
  );
}

function NPLPropertiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: "start",
    slidesToScroll: 4
  });

  const properties = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d0b6dffe0526b819f910d951e743a72630905b0e?width=1152",
      rating: "4.0",
      code: "2024-105003",
      location: "서울시 중랑구 면목동",
      type: "근린주택"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ddced8f645912319e0bb85ea74259734b9667bde?width=1929",
      rating: "4.0",
      code: "2024-105159",
      location: "서울시 송파구 문정동",
      type: "근린주택"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/127bb2bac78a597ac130885eebdea15db72b7ef3?width=1542",
      rating: "4.0",
      code: "2024-105851",
      location: "서울시 관악구 신사동",
      type: "근린주택"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f7e1be1e2113ab60cf7c5e5f11b5723250bb0471?width=1812",
      rating: "4.0",
      code: "2024-105074",
      location: "서울시 강남구 성내동",
      type: "근린주택"
    }
  ];

  return (
    <section className="flex flex-col items-center max-w-[1280px] mx-auto px-10 pt-40 pb-50 gap-15">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex items-center gap-1">
              <div className="text-[40px] leading-[150%] font-bold font-ibm text-gray-900">최신 NPL 물건</div>
            </div>
            <div className="text-lg font-pretendard text-gray-900">
              엄선된 반값 부동산 물건을 만나보세요. 모든 어려움은 풀하우스의 전문가 집단이 해결해드립니다.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {properties.map((property, index) => (
                <div key={index} className="flex flex-col gap-6 ">
                  <img
                    src={property.image}
                    alt={property.code}
                    className="w-full h-[504px] object-cover rounded-3xl"
                  />
                  <div className="flex flex-col gap-2 px-1">
                    <div className="flex items-center gap-1">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.51584 1.33175C8.82211 1.18572 9.17792 1.18572 9.48419 1.33175C9.74895 1.45798 9.89493 1.67716 9.96854 1.7974C10.0447 1.92171 10.1228 2.08006 10.1989 2.23441L11.8157 5.50986L15.4322 6.03847C15.6025 6.06331 15.7772 6.08881 15.9189 6.12288C16.0559 6.15584 16.3094 6.22713 16.511 6.44001C16.7444 6.68629 16.8541 7.0247 16.8097 7.36102C16.7713 7.65175 16.6079 7.85818 16.5163 7.96531C16.4215 8.07603 16.295 8.19917 16.1718 8.31918L13.5559 10.867L14.1731 14.4657C14.2023 14.6354 14.2322 14.8095 14.2437 14.9548C14.2548 15.0954 14.2656 15.3586 14.1255 15.6164C13.9636 15.9145 13.6757 16.1237 13.342 16.1855C13.0536 16.239 12.8066 16.1474 12.6764 16.0934C12.5417 16.0375 12.3854 15.9553 12.233 15.8751L9.00002 14.1749L5.76702 15.8751C5.61465 15.9553 5.45834 16.0375 5.32368 16.0934C5.19345 16.1474 4.94649 16.239 4.65803 16.1855C4.32438 16.1237 4.03647 15.9145 3.8745 15.6164C3.73448 15.3586 3.74524 15.0954 3.75637 14.9548C3.76787 14.8095 3.79777 14.6354 3.82691 14.4657L4.44413 10.867L1.82828 8.31921C1.70501 8.19919 1.57852 8.07604 1.48378 7.96531C1.39213 7.85818 1.22875 7.65175 1.19036 7.36102C1.14594 7.0247 1.25567 6.68629 1.48899 6.44001C1.69067 6.22713 1.9441 6.15584 2.08117 6.12288C2.22286 6.08881 2.39755 6.06331 2.56779 6.03847L6.18432 5.50986L7.78946 2.25802C7.87726 2.08006 7.95539 1.92171 8.03149 1.7974C8.10511 1.67716 8.25108 1.45798 8.51584 1.33175Z" fill="#FF7D2F"/>
                      </svg>
                      <div className="text-lg font-bold font-pretendard text-orange-primary">{property.rating}</div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xl font-bold font-pretendard text-gray-900">{property.code}</div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="text-base font-pretendard text-gray-900">{property.location}</div>
                        <div className="w-px h-3 bg-gray-400"></div>
                        <div className="text-base font-pretendard text-gray-900">{property.type}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="flex justify-center items-center gap-1.5 px-6 py-5 rounded-full border border-gray-400 max-h-14 hover:bg-gray-50 transition-colors">
            <div className="text-base font-medium font-pretendard text-gray-800">더 보러가기</div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.58162 2.06301C10.4303 1.2433 11.567 0.789722 12.7469 0.799975C13.9268 0.810228 15.0555 1.28349 15.8898 2.11782C16.7241 2.95216 17.1974 4.08082 17.2077 5.2607C17.2179 6.44059 16.7643 7.5773 15.9446 8.42601L13.6856 10.6852C13.2294 11.1415 12.6803 11.4945 12.0758 11.72C11.4712 11.9455 10.8252 12.0384 10.1816 11.9923C9.53793 11.9462 8.91175 11.7622 8.34547 11.4529C7.7792 11.1435 7.28608 10.7159 6.89958 10.1992C6.65147 9.86752 6.71923 9.39751 7.05092 9.1494C7.3826 8.9013 7.85262 8.96905 8.10072 9.30074C8.3584 9.64522 8.68714 9.93025 9.06465 10.1365C9.44217 10.3428 9.85963 10.4654 10.2887 10.4961C10.7178 10.5269 11.1485 10.465 11.5515 10.3146C11.9546 10.1643 12.3206 9.92898 12.6247 9.62474L14.87 7.37948C15.4137 6.81415 15.7145 6.05826 15.7077 5.27374C15.7009 4.48715 15.3854 3.73471 14.8291 3.17848C14.2729 2.62226 13.5205 2.30675 12.7339 2.29992C11.949 2.2931 11.1928 2.59416 10.6274 3.13839L9.34143 4.41685C9.04769 4.70889 8.57281 4.7075 8.28078 4.41376C7.98874 4.12001 7.99012 3.64514 8.28387 3.3531L9.58162 2.06301Z" fill="#282828"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 3
  });

  const partners = [
    { name: "클라나", rating: "4.0", reviews: "14", contracts: "3", bg: "#FFB4D5", logo: klarna },
    { name: "머스타드 카드", rating: "3.0", reviews: "14", contracts: "3", bg: "#FFA500", logo: master },
    { name: "스크릴 인테리어", rating: "2.5", reviews: "14", contracts: "3", bg: "#6CB4EE", logo: skirill },
    { name: "아마존 익스프레스", rating: "4.0", reviews: "14", contracts: "3", bg: "#FFF8DC", logo: amazon },
    { name: "롯데 시그니처 서울", rating: "4.0", reviews: "14", contracts: "3", bg: "#FF6B6B", logo: lite },
    { name: "비자", rating: "4.0", reviews: "14", contracts: "3", bg: "#1A1F71", logo: visa }
  ];

  return (
<section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-40 pb-20 sm:pb-28 lg:pb-40">
<div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-2 w-full max-w-[1200px] text-center">
          <div className="flex items-center gap-1">
            <div className="text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[150%] font-bold font-ibm text-gray-900">
                ONLY 풀하우스
            </div>
          </div>
          <div className="text-sm sm:text-base lg:text-lg font-pretendard text-gray-900">
              풀하우스만의 차별화된 업체를 만나보세요.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col gap-6 ">
                <div className="flex h-[300px] justify-center items-center rounded-2xl" style={{ backgroundColor: partner.bg }}>
                  <div className="text-2xl font-bold text-white">{partner.logo}</div>
                </div>
                <div className="flex flex-col gap-2 px-1">
                  <div className="flex items-center gap-1">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.51584 1.33175C8.82211 1.18572 9.17792 1.18572 9.48419 1.33175C9.74895 1.45798 9.89493 1.67716 9.96854 1.7974C10.0447 1.92171 10.1228 2.08006 10.1989 2.23441L11.8157 5.50986L15.4322 6.03847C15.6025 6.06331 15.7772 6.08881 15.9189 6.12288C16.0559 6.15584 16.3094 6.22713 16.511 6.44001C16.7444 6.68629 16.8541 7.0247 16.8097 7.36102C16.7713 7.65175 16.6079 7.85818 16.5163 7.96531C16.4215 8.07603 16.295 8.19917 16.1718 8.31918L13.5559 10.867L14.1731 14.4657C14.2023 14.6354 14.2322 14.8095 14.2437 14.9548C14.2548 15.0954 14.2656 15.3586 14.1255 15.6164C13.9636 15.9145 13.6757 16.1237 13.342 16.1855C13.0536 16.239 12.8066 16.1474 12.6764 16.0934C12.5417 16.0375 12.3854 15.9553 12.233 15.8751L9.00002 14.1749L5.76702 15.8751C5.61465 15.9553 5.45834 16.0375 5.32368 16.0934C5.19345 16.1474 4.94649 16.239 4.65803 16.1855C4.32438 16.1237 4.03647 15.9145 3.8745 15.6164C3.73448 15.3586 3.74524 15.0954 3.75637 14.9548C3.76787 14.8095 3.79777 14.6354 3.82691 14.4657L4.44413 10.867L1.82828 8.31921C1.70501 8.19919 1.57852 8.07604 1.48378 7.96531C1.39213 7.85818 1.22875 7.65175 1.19036 7.36102C1.14594 7.0247 1.25567 6.68629 1.48899 6.44001C1.69067 6.22713 1.9441 6.15584 2.08117 6.12288C2.22286 6.08881 2.39755 6.06331 2.56779 6.03847L6.18432 5.50986L7.78946 2.25802C7.87726 2.08006 7.95539 1.92171 8.03149 1.7974C8.10511 1.67716 8.25108 1.45798 8.51584 1.33175Z" fill="#F37021"/>
                    </svg>
                    <div className="text-lg font-bold font-pretendard text-orange-light">{partner.rating}</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xl font-bold font-pretendard text-gray-900">{partner.name}</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="text-base font-pretendard text-gray-900">계약자리뷰 {partner.reviews}</div>
                      <div className="w-px h-3 bg-gray-400"></div>
                      <div className="text-base font-pretendard text-gray-900">최근계약 {partner.contracts}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

function PopularPostsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
     breakpoints: {
    "(min-width: 1024px)": { dragFree: false }
  }
  });

  useEffect(() => {
  if (!emblaApi) return;

  const mediaQuery = window.matchMedia("(min-width: 1024px)");
  let rafId = null;
  const speed = 0.4;

  const autoScroll = () => {
    emblaApi.scrollBy(speed);
    rafId = requestAnimationFrame(autoScroll);
  };

  const handleChange = () => {
    if (mediaQuery.matches) {
      // Desktop → start auto-scroll
      if (!rafId) {
        rafId = requestAnimationFrame(autoScroll);
      }
    } else {
      // Mobile / Tablet → stop auto-scroll
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }
  };

  // Initial check
  handleChange();

  // Listen for screen size changes
  mediaQuery.addEventListener("change", handleChange);

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    mediaQuery.removeEventListener("change", handleChange);
  };
}, [emblaApi]);


  const posts = [
    {
      tag: "법률자문",
      title: "신속하고 정확한 투자 결정을 돕는 서비스!",
      excerpt:
        "이 서비스를 활용하면 부실채권(NPL)의 상태를 실시간으로 확인할 수 있어, 투자 결정을 보다 신속하고 정확하게 내릴 수 있었습니다.",
      date: "2025.03.08",
      featured: false,
    },
    {
      tag: "시행 · 시공",
      title: "반값 NPL 앱 이용해보니깐 너무 좋네요.",
      excerpt:
        "여러 시행·시공 사례를 비교하면서 보다 효율적인 방안을 찾을 수 있었고, 프로젝트 진행 과정에서 발생할 수 있는 문제도 미리 예측하고 대비할 수 있었습니다.",
      date: "2025.03.10",
      featured: true,
    },
    {
      tag: "인테리어",
      title: "인테리어 공사, 이 서비스 덕분에 수월하게 진행되었습니다!",
      excerpt:
        "인테리어 공사를 진행하면서 디자인과 시공을 체계적으로 관리할 수 있어 큰 도움이 되었습니다.",
      date: "2025.03.06",
      featured: false,
    },
    {
      tag: "시행 · 시공",
      title: "효율적인 의사결정 좋았습니다:)",
      excerpt:
        "시행·시공을 진행하면서 다양한 변수와 리스크를 고려해야 하는데, 이 서비스 덕분에 보다 체계적으로 관리할 수 있었습니다.",
      date: "2025.03.02",
      featured: false,
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16 sm:py-24 lg:py-[140px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-12 sm:gap-16 lg:gap-[72px]">
        {/* Title */}
       <div className="text-center space-y-3 sm:space-y-4">
  <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-gray-900">
    오늘의 인기글
  </h2>
  <p className="text-sm sm:text-base lg:text-lg text-gray-700">
    카페 · 밴드에서 많은 사람들이 관심 가진 글을 만나보세요.
  </p>
</div>
        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {posts.concat(posts).map((post, index) => (
              <div
              key={index}
                className={`flex-shrink-0
                   w-[85vw] sm:w-[300px] lg:w-[380px]
                   h-auto min-h-[300px] lg:h-[360px]
                   rounded-2xl p-6 sm:p-8
                   flex flex-col justify-between
                   ${post.featured ? "bg-orange-500 text-white" : "bg-white text-gray-900"}
                  `}>

                <div className="space-y-5">
                  {/* Tag */}
                  <span
  className={`inline-block px-3 py-1 text-xs sm:text-sm rounded
  ${post.featured
    ? "bg-white/20"
    : "bg-orange-primary/10 text-orange-primary"}`}
>
  {post.tag}
</span>
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                   className={`text-sm sm:text-base leading-relaxed line-clamp-4
                   ${post.featured ? "text-white/90" : "text-gray-700"}`}
                  ></p>
                </div>

                {/* Date */}
                <span
                  className={`text-sm sm:text-sm
                  ${post.featured ? "text-white/80" : "text-gray-500"}`}>
                  {post.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
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

  return (
<section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-28 lg:pt-40 pb-20 sm:pb-28 lg:pb-40 flex flex-col gap-12">
<div className="flex flex-col items-center gap-2 w-full">
<div className="text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[150%] font-bold font-ibm text-gray-900">
    자주 묻는 질문
  </div>
      </div>

      <div className="flex flex-col items-start gap-8 w-full">
        <div className="flex h-11 justify-center items-center gap-3 w-full">
          <div className="flex px-5 py-2.5 justify-center items-center gap-1 rounded-full bg-gray-900">
              <div className="text-xs sm:text-sm font-bold font-pretendard text-white">NPL</div>
          </div>
          <div className="flex px-5 py-2.5 justify-center items-center gap-1 rounded-full bg-black/5">
            <div className="text-xs sm:text-sm font-bold font-pretendard text-gray-900">제휴업체</div>
          </div>
          <div className="flex px-5 py-2.5 justify-center items-center gap-1 rounded-full bg-black/5">
            <div className="text-xs sm:text-sm font-bold font-pretendard text-gray-900">상품 등록</div>
          </div>
          <div className="flex px-5 py-2.5 justify-center items-center gap-1 rounded-full bg-black/5">
            <div className="text-xs sm:text-sm font-bold font-pretendard text-gray-900">홍보</div>
          </div>
          <div className="flex px-5 py-2.5 justify-center items-center gap-1 rounded-full bg-black/5">
            <div className="text-xs sm:text-sm font-bold font-pretendard text-gray-900">이용방법</div>
          </div>
          <div className="flex px-5 py-2.5 justify-center items-center gap-1 rounded-full bg-black/5">
            <div className="text-xs sm:text-sm font-bold font-pretendard text-gray-900">카페/블로그/밴드</div>
          </div>
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
  );
}

function VideosSection() {
  return (
<section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 flex flex-col gap-10 sm:gap-12">
<div className="flex items-center w-full">
       <div className="flex flex-col items-center gap-2 flex-1 text-center">
    <div className="text-2xl sm:text-3xl lg:text-[40px] leading-tight sm:leading-[150%] font-bold font-ibm text-gray-900">
      풀하우스 이야기
    </div>
    <div className="text-sm sm:text-base lg:text-lg font-pretendard text-gray-900">
      풀하우스의 다양한 이야기를 확인해보세요.
    </div>
  </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/97b60a92c9400ae5ce90d99e71c3b0fc2035e3ef?width=1128"
          alt="Video thumbnail 1"
          className="w-full aspect-video rounded-2xl object-cover"
        />
            <img 
            src={site}
            alt="Video thumbnail 2"
          className="w-full aspect-video rounded-2xl object-cover"
            />
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
       <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <img
          src={inter}
            alt="Video thumbnail 3"
            className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      </div>
    </section>
  );
}

function PartnerSearchSection() {
  return (
    <section className="relative h-[627px] w-full my-20">
      <div className="absolute left-0 top-48 w-full h-[200px] flex items-center gap-6 overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {Array(12).fill(null).map((_, i) => (
            <div key={i} className="w-[200px] h-[200px] flex-shrink-0 rounded-2xl bg-white shadow-md"></div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-30 w-full flex justify-center">
        <div className="flex max-w-[1920px] px-0 py-12 flex-col items-center gap-12 bg-white rounded-[14px] shadow-lg z-10">
          <div className="flex flex-col items-center gap-2 px-18">
            <div className="text-[40px] leading-[150%] font-bold font-ibm text-gray-900">제휴 업체 찾기</div>
            <div className="text-lg font-pretendard text-gray-900">
              전국에 있는 풀하우스 제휴업체를 만나보세요.
            </div>
          </div>

          <div className="flex flex-col items-center gap-7">
            <div className="flex flex-col items-start w-[680px]">
              <div className="flex flex-col items-start gap-1.5 w-full">
                <div className="flex h-16 max-h-16 px-7 py-4.5 items-center w-full rounded-full bg-gray-200">
                  <div className="flex-1 text-lg font-pretendard text-gray-500">검색어를 입력하세요.</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

            <div className="flex justify-center items-center gap-5 w-full">
              <div className="text-base font-medium font-pretendard text-gray-900">#시행 · 시공</div>
              <div className="text-base font-medium font-pretendard text-gray-900">#인테리어</div>
              <div className="text-base font-medium font-pretendard text-gray-900">#NPL학원</div>
              <div className="text-base font-medium font-pretendard text-gray-900">#법률자문</div>
              <div className="text-base font-medium font-pretendard text-gray-900">#대부(사금융)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


