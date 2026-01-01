import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import image1 from "../assets/image-area.jpg";
import image2 from "../assets/image-area(1).jpg";
import image3 from "../assets/image-area(2).jpg";
import image4 from "../assets/image-area(3).jpg";
import image5 from "../assets/image-area(4).jpg";
import image6 from "../assets/image-area(5).jpg";
import image7 from "../assets/image-area(6).jpg";
import image8 from "../assets/image-area(7).jpg";
import t1 from "../assets/tp1.png";
import t2 from "../assets/tp2.png";
import t3 from "../assets/tp3.png";
import t4 from "../assets/tp4.png";
import t5 from "../assets/tp5.png";
import t6 from "../assets/tp6.png";
import t7 from "../assets/tp7.png";
import t8 from "../assets/tp8.png";
import b from "../assets/box.png";
import visa from "../assets/visa.png";
import klarna from "../assets/klarna.png";
import master from "../assets/Mastercard.png";
import skirill from "../assets/Skrill.png";
import lite from "../assets/Lightcoin.png";
import amazon from "../assets/Amazon.png";
import home from "../assets/home.png";

const partners = [
  { name: "", logo: klarna },
  { name: "", logo: master },
  { name: "", logo: skirill },
  { name: "", logo: amazon },
  { name: "", logo: lite },
  { name: "", logo: visa },
];

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

const products = [
  { title: "삼중단열 창호", image: t1, price: "₩3,180,200" },
  { title: "이중단열 창호", image: t2, price: "₩3,180,200" },
  { title: "독일식 시스템 창호", image: t3, price: "₩3,180,200" },
  { title: "원목 도어", image: t4, price: "₩3,180,200" },
  { title: "독일식 시스템 창호", image: t5, price: "₩3,180,200" },
  { title: "이중단열 창호", image: t6, price: "₩3,180,200" },
  { title: "독일식 시스", image: t7, price: "₩3,180,200" },
  { title: "삼중단열 창호", image: t8, price: "₩3,180,200" },
];

export default function ThirdPage() {
  const [emblaRef] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 4000 })]
  );

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[320px] sm:h-[320px] lg:h-[400px] bg-cover bg-center"
      style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2400)",
        }}>
        
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-[1280px] mx-auto h-full flex flex-col text-center justify-center px-6">
          <h1 className="text-4xl font-bold text-white mb-3">
            새로운 공간, 새로운 스타일
          </h1>
          <p className="text-white/80">
            감각적인 인테리어 솔루션을 경험하세요
          </p>
        </div>
      </section>

      {/* PARTNER SLIDER */}
      <section className="relative -mt-24">
        <div className="bg-white rounded-[32px] max-w-[1280px] mx-auto px-12 py-16 shadow-sm">
          <h2 className="font-bold mb-8 ml-20">ONLY 풀하우스</h2>

          <div ref={emblaRef} className="overflow-hidden align-center ml-20">
            <div className="flex gap-6">
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="flex-[0_0_220px] bg-gray-50  rounded-2xl p-10 text-center"
                >
                  <img
                    src={p.logo}
                    className="h-10 mx-10 mb-4 object-contain"
                  />
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-orange-400 mt-1">★ 4.0</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GREEN CTA */}
          <section className="mt-12 bg-[#e6f3c8] rounded-2xl p-6 m-20 flex items-center justify-between">
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
              className="w-20 sm:block shrink-0"
            />
          </section>


      {/* PROJECTS */}
      <section className="max-w-[1280px] mx-20 px-6 mt-32">
        <h2 className="font-bold text-2xl mb-6">지역별</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p, i) => (
            <div key={i}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                <img
                  src={p.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-orange-400">★ 4.0</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-[1280px] mx-20 px-6 mt-32">
        <h2 className="font-bold text-2xl mb-6">상품군</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((p, i) => (
            <div key={i}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src={p.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-medium">{p.title}</div>
              <div className="text-orange-500 font-semibold text-sm mt-1">
                {p.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-40 bg-[#4BA3D7]">
        <div className="max-w-[1280px] mx-20 px-6 pt-20 text-white flex justify-between items-center">
          <div>
            <div className="text-sm opacity-80 mb-2">NPL 부동산 A to Z</div>
            <h3 className="text-3xl font-bold mb-4">
              이영준 박사 NPL 특강 회원모집
            </h3>
          </div>
          <img
            src= {b}
            className="w-40 hidden md:block"
          />
        </div>
      </section>

    </main>
  );
}
