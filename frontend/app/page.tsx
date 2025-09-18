// app/page.tsx
// 메인 랜딩 페이지: 히어로 섹션 + 핵심 기능 + 선택 이유 + 하단 CTA 밴드

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ============ 히어로 ============ */}
      <section className="relative">
        {/* 은은한 배경 그라디언트 (상단 사진 느낌) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.12),rgba(255,255,255,0))]" />

        {/* 컨텐츠 컨테이너 */}
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 text-center">
          {/* 상단 배지 */}
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-3 py-1 text-xs text-purple-700 backdrop-blur">
            <span>✨ 새로운 라이프스타일 관리 플랫폼</span>
          </div>

          {/* 큰 타이틀 */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 sm:text-6xl">
            일상을 더 특별하게
          </h1>

          {/* 서브카피 */}
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            캘린더, 루틴, 위치 기반 일기를 하나로 통합한
            <br className="hidden sm:block" />
            스마트한 라이프스타일 관리 앱
          </p>

          {/* CTA 버튼 */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            >
              무료로 시작하기
            </a>
            <a
              href="/tour"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              둘러보기
            </a>
          </div>
        </div>
      </section>

      {/* ============ 핵심 기능 ============ */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-center text-2xl font-bold text-gray-600 sm:text-3xl">핵심 기능</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
          당신의 일상을 더욱 체계적이고 의미있게 만들어줄 기능들
        </p>

        {/* 기능 카드 4개 */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-gray-600">
          <FeatureCard
            icon={
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50  text-blue-600">
                🗓️
              </span>
            }
            title="스마트 캘린더"
            desc="일정, 루틴, 생리기간을 한 곳에서 관리하세요"
          />
          <FeatureCard
            icon={
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                📍
              </span>
            }
            title="위치 기반 일기"
            desc="특별한 장소에서의 추억을 기록하고 공유해요"
          />
          <FeatureCard
            icon={
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                🔁
              </span>
            }
            title="개인화된 루틴"
            desc="아이콘으로 쉽게 만드는 나만의 습관 관리"
          />
          <FeatureCard
            icon={
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-50 text-pink-600">
                👥
              </span>
            }
            title="커플 & 다인 모드"
            desc="소중한 사람들과 일정과 추억을 공유해요"
          />
        </div>
      </section>

      {/* ============ 왜 선택해야 할까요? ============ */}
      <section className="mx-auto max-w-6xl px-6 py-6 sm:py-10 text-gray-600">
        <h3 className="text-center text-xl font-semibold sm:text-2xl">
          왜 우리 앱을 선택해야 할까요?
        </h3>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <WhyItem
            icon="📱"
            title="모바일 & 웹"
            desc="언제 어디서나 접근 가능"
          />
          <WhyItem
            icon="🌐"
            title="실시간 동기화"
            desc="모든 기기에서 즉시 업데이트"
          />
          <WhyItem
            icon="🛡️"
            title="프라이버시 보호"
            desc="안전한 데이터 암호화"
          />
        </div>
      </section>

      {/* ============ 하단 CTA 밴드 ============ */}
      <section className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center text-white">
          <h4 className="text-2xl font-bold sm:text-3xl">지금 바로 시작해보세요</h4>
          <p className="mt-2 text-white/90">
            무료로 가입하고 더 체계적인 일상을 경험해보세요
          </p>
          <div className="mt-6">
            <a
              href="/signup"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
            >
              회원가입
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===== 재사용 가능한 작은 컴포넌트들 ===== */

// 기능 카드
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
      <div>{icon}</div>
      <h3 className="mt-4 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
    </div>
  );
}

// 이유 항목
function WhyItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
        <span className="text-lg">{icon}</span>
      </div>
      <div>
        <div className="text-base font-semibold">{title}</div>
        <div className="mt-1 text-sm text-gray-600">{desc}</div>
      </div>
    </div>
  );
}
