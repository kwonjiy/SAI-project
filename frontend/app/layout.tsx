// ⬆️ 앱 전체의 공통 레이아웃. 모든 페이지가 이 레이아웃 안에 랜더링된다.

import type { Metadata } from "next"; //메타데이터 타입 정의의
import Header from "./components/layout/Header"; // ⬅️ Header 연결
import Footer from "./components/layout/Footer"; // ⬅️ Footer 연결
import { Geist, Geist_Mono } from "next/font/google"; //폰트 로드
import "./globals.css"; //전역 스타일


//폰트 설정정
const geistSans = Geist({
  variable: "--font-geist-sans", //CSS 변수명
  subsets: ["latin"], //폰트 서브셋 - 라틴 문자만 로드(용량 최적화)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", //CSS 변수명
  subsets: ["latin"], //폰트 서브셋 - 라틴 문자만 로드(용량 최적화)
});

//페이지 메타데이터 (HTML <head> 태그 내부에 들어가는 정보)
export const metadata: Metadata = {
  title: "SAI - 일상공유", //브라우저 택 제목
  description: "캘린더, 루틴, 위치 기반 일기까지 한 번에", //검색엔진용 설명
};

//해당 파일의 메인 함수 정의
export default function RootLayout({
  children,
}: Readonly<{ //일기 전용 타입(불변성 보장)
  children: React.ReactNode; //자식 컴포넌트, React에서 렌더링 가능한 모든 것의 타입입
}>) {
  return (
    <html lang="ko">
      {/* 
        body:
        - antialiased: 폰트 렌더링을 조금 더 부드럽게
        - min-h-screen: 뷰포트 높이만큼 최소 높이
      */}
      <body className="min-h-screen bg-white antialiased">
        <Header />
        {/* 페이지 본문 */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
