function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-20 flex flex-col gap-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 w-full">
          {/* Logo + info */}
          <div className="flex flex-col gap-6 md:gap-12 w-full md:w-auto">
            <div className="text-[22px] md:text-2xl font-bold font-['Readex_Pro'] uppercase">
              FULLHOUSE
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-base font-medium">
                <span className="hover:text-orange-400 cursor-pointer">이메일무단수집거부</span>
                <span className="hover:text-orange-400 cursor-pointer">이용약관</span>
              </div>
              <div className="text-sm text-white/50">
                서울특별시 강남구 언주로 651 삼원빌딩 8층
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 md:gap-6 items-center">
            <button className="p-3 rounded-full hover:bg-white/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M14.7754 8.72363C16.0044 8.72373 16.9988 9.71724 16.999 10.9404C16.999 12.1638 16.0046 13.1581 14.7754 13.1582H13.543L13.4229 13.4863C12.669 15.537 10.6931 17 8.375 17C5.40545 16.9999 3.00055 14.5992 3 11.6396V8.72363H14.7754Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            </button>
            <button className="p-3 rounded-full hover:bg-white/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 3H17V17H3V3Z" stroke="white" strokeWidth="2" />
              </svg>
            </button>
            <button className="p-3 rounded-full hover:bg-white/10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 w-full"></div>

        {/* Bottom copyright */}
        <div className="text-sm font-medium text-white/50 text-center md:text-left">
          Copyrightⓒ HMKholdings. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
