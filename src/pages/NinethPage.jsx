import { useState } from "react";
import { X } from "lucide-react";

export default function InquiryModal() {
  const [selectedTypes, setSelectedTypes] = useState(["통합상담신청"]);
  const [content, setContent] = useState("");

  const inquiryTypes = [
    "NPL반값 부동산",
    "통합상담신청",
    "광고 홍보 문의",
    "신규 입점 문의",
    "NPL 학원 강좌 상담",
    "법률 상담",
    "비즈니스 제안",
    "대출 상담",
    "기타문의",
  ];

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className=" bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-[720px] bg-white rounded-[28px] shadow-2xl p-8 sm:p-10 relative">

        {/* Close button */}
        <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <p className="text-sm font-medium text-gray-500 mb-2">문의하기</p>
        <h2 className="text-xl sm:text-2xl font-bold mb-8">
          NPL 부동산, 궁금한 점 언제든지 문의하세요!
        </h2>

        {/* Summary Card */}
        <div className="border rounded-2xl p-6 flex flex-col sm:flex-row gap-6 mb-10">
          <img
            src="/images/sample-interior.jpg"   // 🔁 replace with your image
            alt="preview"
            className="w-full sm:w-[180px] h-[140px] object-cover rounded-xl"
          />

          <div className="flex-1 text-sm text-gray-700 space-y-2">
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <div>건물형태</div><div className="font-medium">상가건물</div>
              <div>면적</div><div className="font-medium">40평</div>
              <div>시공기간</div><div className="font-medium">3개월</div>
              <div>스타일</div><div className="font-medium">모던스타일</div>
              <div>예상비용</div><div className="font-medium">5천만원</div>
            </div>

            <div className="border-t pt-4 mt-4 flex justify-between items-center">
              <span className="text-gray-500">예상 견적가</span>
              <span className="text-lg font-bold text-black">
                6,300만원
              </span>
            </div>
          </div>
        </div>

        {/* Inquiry Types */}
        <div className="mb-8">
          <p className="text-sm font-medium mb-3">
            문의 유형 <span className="text-gray-400">(복수 선택 가능)</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {inquiryTypes.map((type) => {
              const active = selectedTypes.includes(type);
              return (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`px-4 py-2 rounded-full text-sm border transition
                    ${
                      active
                        ? "border-black bg-black text-white"
                        : "border-gray-200 bg-gray-100 text-gray-700"
                    }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            성함/회사명
          </label>
          <input
            type="text"
            placeholder="이름 혹은 회사명을 입력해주세요."
            className="w-full h-12 px-4 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Contact */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            연락처/이메일
          </label>
          <input
            type="text"
            placeholder="연락처 혹은 이메일을 입력해주세요."
            className="w-full h-12 px-4 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value.slice(0, 1000))}
            placeholder="문의 내용을 작성해주세요.(1000자 이내)"
            className="w-full h-[160px] p-4 border rounded-xl text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black"
          />
          <div className="text-right text-xs text-gray-400 mt-1">
            {content.length}/1000
          </div>
        </div>

        {/* Privacy */}
        <div className="flex items-center gap-2 mb-10">
          <input type="checkbox" className="w-4 h-4" />
          <span className="text-sm">
            개인정보 보호정책에 동의합니다.{" "}
            <span className="text-gray-400">(필수)</span>
          </span>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button className="w-[220px] h-14 rounded-full bg-black text-white text-sm font-medium">
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
}
