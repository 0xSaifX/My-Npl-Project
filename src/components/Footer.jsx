import cafe from "../assets/cafe.png";
import blog from "../assets/blog.png";
import youtube from "../assets/youtube.png";

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
          {/* Social icons */}
        <div className="flex gap-4 md:gap-6 items-center">
  <a
    href="#"
    aria-label="Cafe"
    className="p-3 rounded-full hover:bg-white/10 transition"
  >
    <img
      src={cafe}
      alt="Cafe"
      className="w-5 h-5 object-contain"
    />
  </a>

  <a
    href="#"
    aria-label="Blog"
    className="p-3 rounded-full hover:bg-white/10 transition"
  >
    <img
      src={blog}
      alt="Blog"
      className="w-5 h-5 object-contain"
    />
  </a>

  <a
    href="#"
    aria-label="YouTube"
    className="p-3 rounded-full hover:bg-white/10 transition"
  >
    <img
      src={youtube}
      alt="YouTube"
      className="w-5 h-5 object-contain"
    />
  </a>
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
