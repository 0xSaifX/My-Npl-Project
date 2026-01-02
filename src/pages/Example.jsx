function PartnerSearchSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  // Auto-scroll on desktop
  useEffect(() => {
    if (!emblaApi) return;
    if (window.innerWidth < 768) return; 

    let rafId;
    const speed = 1.4;

    const autoScroll = () => {
      emblaApi.scrollBy(speed);
      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(rafId);
  }, [emblaApi]);

  return (
    <section className="relative w-full py-24 bg-gray-50">
      {/* Search Card */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
        <h2 className="text-[40px] font-bold text-gray-900 text-center">제휴 업체 찾기</h2>
        <p className="text-lg text-gray-700 text-center">
          전국에 있는 풀하우스 제휴업체를 만나보세요.
        </p>

        {/* Search Input */}
        <div className="w-full max-w-[680px]">
          <div className="flex h-16 px-6 py-4 items-center w-full rounded-full bg-gray-200">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              className="flex-1 bg-transparent outline-none text-lg text-gray-700"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-gray-500"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.5509 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9057 16.3198C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z"
                fill="#616161"
              />
            </svg>
          </div>
        </div>

        {/* Hashtags */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-900 text-base">
          <span>#시행 · 시공</span>
          <span>#인테리어</span>
          <span>#NPL학원</span>
          <span>#법률자문</span>
          <span>#대부(사금융)</span>
        </div>
      </div>

      {/* Auto-scrolling Icons Slider */}
      <div className="mt-16">
        <div
          className="w-full bg-gray-200 overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-6">
            {partnerIcons.concat(partnerIcons).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white flex items-center justify-center shadow-md"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}