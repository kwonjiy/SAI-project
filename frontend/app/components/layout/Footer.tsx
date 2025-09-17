// app/components/Footer.tsx
// ⬆️ Footer 컴포넌트 (사이트 공통 하단 영역)

"use client"; 
// ⬅️ 엄밀히 말하면 Footer는 상태 관리가 필요 없으니 client 선언이 필수는 아님.
//     다만, 향후 다크모드 토글/버튼 클릭 같은 인터랙션 추가 대비해서 client로 선언해둬도 무방.

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
      {/* 컨테이너 */}
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* 좌측: 카피라이트 */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} <span className="font-semibold text-purple-600">SAI</span>. All rights reserved.
        </p>

        {/* 우측: 링크 모음 */}
        <nav className="flex gap-6 text-sm">
          <Link href="/privacy" className="text-gray-600 hover:text-purple-600">
            개인정보 처리방침
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-purple-600">
            이용약관
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-purple-600">
            문의하기
          </Link>
        </nav>
      </div>
    </footer>
  );
}
