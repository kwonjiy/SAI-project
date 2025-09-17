// app/components/layout/Header.tsx

"use client";

import Link from "next/link";                 // ⬅️ Next.js 내장 라우팅 컴포넌트 (a 태그 대신 사용. CSR 전환 + Prefetch 이점)
import { usePathname } from "next/navigation"; // ⬅️ 현재 URL 경로를 읽어 활성 메뉴 하이라이트에 사용
import { useEffect, useState } from "react";   // ⬅️ 메뉴 열림/닫힘 상태 및 라우트 변경 시 닫기 처리

// 🔗 NavLink: 현재 경로에 따라 '활성' 스타일을 적용하는 작은 유틸 컴포넌트
function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const pathname = usePathname(); // ⬅️ "/features" 등 현재 경로 문자열
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

    return(
        <Link
            href={href}
            // ⬇️ Tailwind 클래스를 조건부로 적용.
            //    활성: 보라색 + 살짝 굵게 / 비활성: 회색 → hover 시 보라색
            className={`transistion-colors ${
                active
                    ? "text-puple-600 font-medium"
                    : "text-gray-600 hover:text-purple-600"
            }`}
        >
            {children}
        </Link>
    );
}

export default function Header(){
    const [open, setOpen] = useState(false); // ⬅️ 모바일 메뉴 열림/닫힘 상태
    const pathname = usePathname();         // ⬅️ 현재 경로 읽기
    useEffect(() => setOpen(false), [pathname]); // ⬅️ 경로 변경 시 메뉴 닫기

    return(
        // sticky: 스크롤해도 상단에 고정
        // backdrop-blur + 반투명 배경: 내용이 스르륵 비치는 느낌
        // border-b: 상단 바닥선
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        {/* 컨테이너: 좌우 여백/최대폭/수직 패딩/좌우 정렬 */}
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
            {/* 좌측: 로고(아이콘 + 텍스트) */}
            {/* Link: 홈으로 이동. group으로 hover 색 전파 */}
            <Link href="/" className="group flex items-center gap-2">
            {/* 아이콘은 아직 없으니 임시로 emoji 사용. 나중에 교체 가능 */}
            <span aria-hidden className="text-xl">🗓️</span>
            {/* 브랜드명: 'SAI'. hover 시 보라색으로 강조 */}
            <span className="font-semibold text-lg tracking-tight group-hover:text-purple-600">
                SAI
            </span>
            {/* 스크린 리더용 텍스트: 시각적 숨김 */}
            <span className="sr-only">홈으로</span>
            </Link>

            {/* 중간: 데스크톱 네비게이션 (md 이상에서만 표시) */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink href="/about">소개</NavLink>
            <NavLink href="/features">기능</NavLink>
            <NavLink href="/tour">둘러보기</NavLink>
            </nav>

            {/* 우측: 인증 버튼 영역 (md 이상에서만 표시) */}
            <div className="hidden md:flex items-center gap-3 text-sm">
            <Link href="/auth/login" className="hover:underline">
                로그인
            </Link>
            {/* 회원가입: 그라디언트 CTA 버튼 */}
            <Link
                href="/auth/signup"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
                회원가입
            </Link>
            </div>

            {/* 모바일: 햄버거 버튼 (md 미만에서만 표시) */}
            <button
            type="button"
            onClick={() => setOpen((v) => !v)} // ⬅️ 메뉴 토글
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 w-9 h-9"
            aria-label="메뉴 열기"    // ⬅️ 접근성: 버튼 목적 설명
            aria-expanded={open}     // ⬅️ 현재 열림 상태
            aria-controls="mobile-nav" // ⬅️ 어떤 영역 제어하는지 연결
            >
            {/* 심플 햄버거 아이콘 (SVG). 외부 라이브러리 없이 사용 */}
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            </button>
        </div>

        {/* 모바일 드롭다운 메뉴 (open일 때만 렌더) */}
        {open && (
            <div id="mobile-nav" className="md:hidden border-t border-gray-100">
            <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4 text-sm">
                <NavLink href="/about">소개</NavLink>
                <NavLink href="/features">기능</NavLink>
                <NavLink href="/tour">둘러보기</NavLink>

                {/* 분리선 */}
                <div className="h-px bg-gray-100 my-2" />

                <Link href="/auth/login" className="hover:underline">
                로그인
                </Link>
                <Link
                href="/auth/signup"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium w-fit"
                >
                회원가입
                </Link>
            </div>
            </div>
        )}
        </header>
    );
}