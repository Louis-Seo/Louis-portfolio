"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import styles from "./page.module.css";

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible=""
      className={`${styles.reveal} ${className || ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CaseImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`${styles.imageFrame} ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes="(max-width: 828px) 100vw, 1080px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default function DnkRpPage() {
  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.heroLabel}>UX/UI Design · 2025–</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>DNK RP Web/App</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDescription}>
              일본 임대 시장의 복잡한 운영 구조 위에
              <br />
              입주자 중심의 PMS 연동 주거 플랫폼을 설계했습니다
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>UX/UI Designer</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>2025–</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Contribution</span>
                <span className={styles.metaValue}>
                  Planning, Design, DS, Maintenance
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team</span>
                <span className={styles.metaValue}>
                  Designer, PM, Dev, DL Engineer
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={400}>
          <div className={styles.heroVisual}>
            <CaseImage
              src="/images/portfolio/dnk-rp/hero.png"
              alt="DNK RP App on iPhone"
              className={styles.heroImage}
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Overview ═══ */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewLeft}>
                <p className={styles.sectionLabel}>Overview</p>
                <h2 className={styles.overviewTitle}>
                  입주자 중심의
                  <br />
                  양방향 주거 플랫폼
                </h2>
              </div>
              <div className={styles.overviewRight}>
                <p className={styles.overviewText}>
                  일본 주택 시장의 복잡한 운영 구조 (보증인 등록, 회차 계약,
                  공익비·시스템비 항목 등)와 PMS 중심의 관리자 시스템은 입주자
                  경험과 분리되어 있었습니다.
                </p>
                <p className={styles.overviewText}>
                  이를 해결하기 위해 단일 데이터 구조 위에 RP App(입주자용 모바일
                  앱), RP Admin Web(관리자용 웹툴), 그리고 PMS를 통합한 양방향
                  플랫폼을 설계했습니다.
                </p>
                <p className={styles.overviewText}>
                  이 프로젝트의 핵심은 &lsquo;입주자 중심의 구조를 도입한 최초의
                  PMS 연동 주거 플랫폼&rsquo;이라는 점이며, 특히 일본의 로컬
                  규제와 운영 관행에 맞춘 사용자 경험에 집중했습니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Market Research ═══ */}
      <section className={styles.researchSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Market Research</p>
            <h2 className={styles.sectionTitle}>
              임대 시스템은 진화했지만,
              <br />
              경험은 연결되지 않았습니다
            </h2>
            <p className={styles.sectionDesc}>
              전통적인 일본 임대 시스템은 관리자 중심으로 운영되며, 입주자는 계약,
              납부, 공지 확인 등 대부분의 정보를 수동적으로 전달받아야 했습니다.
              PMS가 보급되며 관리자는 디지털 시스템을 사용하게 되었지만, 입주자와의
              소통과 접근성은 여전히 단절되어 있습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/market-research.png"
              alt="Market research timeline — 2000 to 2025"
              className={styles.fullImage}
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ Product Overview ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Product</p>
            <h2 className={styles.sectionTitle}>RP App Overview</h2>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/product-overview.png"
              alt="RP App home screen with feature tags"
              className={styles.fullImage}
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ User Research ═══ */}
      <section className={styles.researchSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>User Research</p>
            <h2 className={styles.sectionTitle}>
              입주자는 매번,
              <br />
              스스로 찾아야 했습니다
            </h2>
            <p className={styles.sectionDesc}>
              일본의 기존 임대 시스템은 계약부터 공지까지 대부분 관리자가 일방적으로
              전달하고, 입주자는 정보를 직접 찾아야 하는 구조였습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.userQuoteGrid}>
              {[
                {
                  user: "User 01",
                  tag: "#불명확한 납부정보",
                  quote:
                    "이번 달에 내가 총 얼마를 내야 하는지 한눈에 안 보여서 매번 헷갈려요.",
                },
                {
                  user: "User 02",
                  tag: "#계약정보 접근 불가",
                  quote:
                    "내 계약 정보나 납부 내역을 찾으려면 너무 복잡해요.",
                },
                {
                  user: "User 03",
                  tag: "#연체정보 인지 불가",
                  quote:
                    "연체료가 발생했는데 언제, 얼마가 추가됐는지 앱에서 바로 확인이 안 돼요.",
                },
                {
                  user: "User 03",
                  tag: "#시설예약 비직관적",
                  quote:
                    "시설 예약을 하고 싶은데 방법을 잘 모르겠고, 항상 관리자한테 직접 물어봐야 해요.",
                },
                {
                  user: "User 05",
                  tag: "#공동 거주자 미지원",
                  quote:
                    "같이 사는 가족은 아무것도 확인이 안 돼요. 입주자도 따로 로그인이 있었으면 좋겠어요.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className={styles.userQuoteCard}>
                    <span className={styles.userQuoteLabel}>{item.user}</span>
                    <span className={styles.userQuoteTag}>{item.tag}</span>
                    <p className={styles.userQuoteText}>{item.quote}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Insight ═══ */}
      <section className={styles.insightSection}>
        <div className={styles.containerWide}>
          <Reveal>
            <CaseImage
              src="/images/portfolio/dnk-rp/insight.png"
              alt="Insight — From Fragmented Touchpoints To A Connected Living Experience"
              className={styles.insightImage}
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ Direction ═══ */}
      <section className={styles.directionSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Direction</p>
            <h2 className={styles.sectionTitleLight}>
              임차인의 실제 거주 흐름을 기반으로
              <br />
              UX 핵심 방향 4가지를 도출했습니다
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.directionGrid}>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Accessibility</h4>
                <p className={styles.directionCardSubtitle}>
                  정보 접근의 민첩성
                </p>
                <p className={styles.directionCardText}>
                  임차인은 &ldquo;내가 지금 뭘 해야 하는지&rdquo;, &ldquo;얼마를
                  언제까지 내야 하는지&rdquo; 즉시 알 수 있어야 합니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Contextuality</h4>
                <p className={styles.directionCardSubtitle}>
                  계약 상태 기반 맞춤 경험
                </p>
                <p className={styles.directionCardText}>
                  입주 전, 거주 중, 퇴실 예정 등 계약 상태에 따라 사용자가
                  마주하는 정보와 액션은 달라집니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Clarity</h4>
                <p className={styles.directionCardSubtitle}>
                  계약 및 금액 정보의 명확성
                </p>
                <p className={styles.directionCardText}>
                  다계약 회차, 연체료, 합불액, 납부 상태 등 복잡한 계약 정보를
                  누구나 이해할 수 있는 UI로 구성해야 합니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Autonomy</h4>
                <p className={styles.directionCardSubtitle}>
                  거주자의 주도권 강화
                </p>
                <p className={styles.directionCardText}>
                  기존 PMS는 관리자 중심 구조였지만, RP App은 입주자가
                  계약/청구/시설 이용을 스스로 관리할 수 있도록 설계되었습니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Concept ═══ */}
      <section className={styles.conceptSection}>
        <div className={styles.container}>
          <Reveal>
            <CaseImage
              src="/images/portfolio/dnk-rp/concept.png"
              alt="Concept — Contract → Data → Autonomy"
              className={styles.fullImage}
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ Design System ═══ */}
      <section className={styles.designSystemSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Design System</p>
            <h2 className={styles.sectionTitle}>
              모바일 앱과 웹 백오피스를 아우르는
              <br />
              통합 UI/UX 시스템
            </h2>
            <p className={styles.sectionDesc}>
              색상, 타이포그래피, 레이아웃, 컴포넌트, 아이콘, 상태값 등 모든
              디자인 자산을 컴포넌트 기반으로 정리했습니다. FIGMA TOKENS와
              라이브러리 구조를 통해 협업과 확장성을 고려했고, 실제 운영 중인
              PMS/임차인 앱 서비스의 변경 요구에 유연하게 대응할 수 있도록
              설계되었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.dsGrid}>
              <CaseImage
                src="/images/portfolio/dnk-rp/ds-typography.png"
                alt="Typography / Spacing & Layout"
                className={styles.dsImage}
              />
              <CaseImage
                src="/images/portfolio/dnk-rp/ds-color.png"
                alt="Color System"
                className={styles.dsImage}
              />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.dsGrid}>
              <CaseImage
                src="/images/portfolio/dnk-rp/ds-icon.png"
                alt="Icon System"
                className={styles.dsImage}
              />
              <CaseImage
                src="/images/portfolio/dnk-rp/ds-button.png"
                alt="Button & Interaction System"
                className={styles.dsImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 1: My Contract ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Category</p>
            <h2 className={styles.featureTitle}>My Contract</h2>
            <p className={styles.featureDescription}>
              일본 임대 시장의 복잡한 계약 구조를 단순화하고, 임차인이 스스로 필요한
              정보를 확인하고 관리할 수 있도록 설계했습니다. RP App에서는 계약 기간,
              납부 내역, 보증인 정보, 문서 다운로드/공유 기능 등을 하나의 구조로
              통합했고, 웹 백오피스에서는 실시간 상태 변경, 납부 현황, 계약 이력 등
              모든 정보를 단일 뷰로 운영할 수 있습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/contract-main.png"
              alt="My Contract — App and Admin Web views"
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>단일 데이터 기반 통합</h4>
                <p className={styles.bulletText}>
                  앱과 웹의 계약 데이터가 실시간으로 동기화되어 정보 오류와 중복
                  입력을 제거합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>모바일 문서 KYC 인증</h4>
                <p className={styles.bulletText}>
                  계약 갱신, 계약서, 스크류장점서 등 제출 문서를 앱에서 즉시
                  다운로드/공유(AirDrop, 메일, 메시지 등) 가능합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>회차별 이력 구분</h4>
                <p className={styles.bulletText}>
                  동일 계정 내 다계약(회차)를 구분하고, 필요 시 필요 필드(법인명,
                  담당자, 연락처 등)를 분리합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 2: Billing & Overdue ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Category</p>
            <h2 className={styles.featureTitle}>Billing & Overdue</h2>
            <p className={styles.featureDescription}>
              PMS에서 내려오는 복잡한 청구 데이터를 임차인 관점에서 구조화해, 납부
              금액·기한·납부 방식에 따라 상태가 달라지는 로직을 명확하게
              표현했습니다. 청구서의 납부 계정 정보를 분리해 구성하고, 연체 발생
              시점과 수수료 구조도 입주자가 오해 없이 이해할 수 있도록 UX로
              구현했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/billing-main.png"
              alt="Billing & Overdue — Web and App views"
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>청구서 상태별 명확한 안내</h4>
                <p className={styles.bulletText}>
                  미납, 부분납부, 연체 등 상태에 따라 표시되는 컬러, 상태 태그,
                  요약 차트 내 구성으로 즉시 파악할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>PMS 인보이스 실납부액 불일치 대응</h4>
                <p className={styles.bulletText}>
                  기존 Web UI에서 분산되어있던 납부 계획, 가산금계, 입금구좌를 한
                  화면에 구조화했습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>가시성 높은 시각화</h4>
                <p className={styles.bulletText}>
                  청구 상세 정보와 입금 내역을 차트 형태로 구성하여 누적 입금,
                  미납, 연체분 등을 명확히 비교합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 3: Intent Submission ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Category</p>
            <h2 className={styles.featureTitle}>Intent Submission</h2>
            <p className={styles.featureDescription}>
              RP App은 임차인이 계약 종료 시점에 맞춰 퇴거, 재계약, 방 이동 의사를
              모바일에서 직접 제출할 수 있는 Self-serve 프로세스를 제공합니다.
              사용자는 단일 화면에서 현재 계약 정보를 확인하고 → 의사를 선택한 뒤 →
              조건 입력 → 제출 완료까지의 최적화된 UX 흐름으로 처리할 수 있습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/intent-main.png"
              alt="Intent Submission — Web and App views"
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Self-serve 의사 표출</h4>
                <p className={styles.bulletText}>
                  기존 전화 문의, 수기 양식 대비 일 평균 문의량 120건 → 42건으로
                  약 65% 감소. 모바일에서 계약 확인 + 의사 제출 + 이력 확인까지
                  일원화합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  조건 기반 &lsquo;방 이동&rsquo; 요청
                </h4>
                <p className={styles.bulletText}>
                  희망 지역, 임대료 범위, 입주 가능 날짜 등을 입력하면 PMS와 자동
                  연동되어 매칭 후보 리스트 필터링이 가능합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>요청 누락율 감소</h4>
                <p className={styles.bulletText}>
                  관리자 처리 속도 2배 향상, 요청 상태별 가시성 확보. 블랙리스트,
                  조기해지 조건 미달 시 자동 Reject 필터 적용으로 리스크 감소.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 4: Notifications System ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Category</p>
            <h2 className={styles.featureTitle}>Notifications System</h2>
            <p className={styles.featureDescription}>
              RP App은 사용자별 계약 상태, 납부 내역, 요청 처리, 푸시 수신 여부
              등의 상황을 실시간으로 반영하여, 필요한 정보와 행동만을 선별해
              전달하는 맞춤형 알림 시스템을 제공합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/notification-main.png"
              alt="Notifications System — log and settings"
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>알림 카테고리 6종 분류</h4>
                <p className={styles.bulletText}>
                  계약/납부/연체/공지/진행 상태별 필터 설정 가능. 앱 표시 + 인앱
                  알림을 자동 분기하여 사용자는 필요한 내용만 집중합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>사용자 행동 기반 타이밍</h4>
                <p className={styles.bulletText}>
                  매 계약 5일 전 납부 안내, 시크리인더 자동 노출. 계약 종료
                  30/7/당일 전 시퀀셜 푸시 자동 발송합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>수신 항목 설정 UI</h4>
                <p className={styles.bulletText}>
                  사용자 컨트롤 제공으로 불필요한 반복 제거. 옵트인 설정으로 푸시
                  피로도 감소, 사용자 신호 반영합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 5: Tenant Requests ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Category</p>
            <h2 className={styles.featureTitle}>Tenant Requests</h2>
            <p className={styles.featureDescription}>
              RP App은 임차인이 겪는 생활 민원, 시설 고장, 공용 공간 문제 등 다양한
              상황에 대해 모바일에서 간편하게 요청을 접수하고, 진행 상태를
              실시간으로 확인할 수 있는 민원 처리 시스템을 제공합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/tenant-main.png"
              alt="Tenant Requests — ticket system"
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>민원 유형 분리로 접수 간소화</h4>
                <p className={styles.bulletText}>
                  &lsquo;생활 민원&rsquo;과 &lsquo;공용 공간 문제&rsquo;로 1차
                  분류. 앱 사용자가 명확하게 이슈 성격을 인지하고 작성 가능합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>텍스트 + 이미지 접수</h4>
                <p className={styles.bulletText}>
                  문자 상황을 상세히 서술 + 사진 첨부 가능. 처리 담당자의 정확한
                  인지 및 대응 품질 향상에 기여합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>민원 평균 제척 소요 시간 단축</h4>
                <p className={styles.bulletText}>
                  3.2일 → 1.4일 단축 (빠른 담당 배정 + 명확한 접수 내용 덕분).
                  커뮤니케이션 반복 비용 53% 감소.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 6: Building Announcements ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Category</p>
            <h2 className={styles.featureTitle}>Building Announcements</h2>
            <p className={styles.featureDescription}>
              RP App은 단지 운영에 필요한 공지사항을 입주자에게 효과적으로 전달할 수
              있도록, 다국어 지원 + 사용자별 열람 여부 추적 + 관리자별 열람을
              모니터링이 가능한 시스템으로 구성했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/dnk-rp/announcement-main.png"
              alt="Building Announcements — Web and App views"
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>공지 유형별 + 언어 자동 분류</h4>
                <p className={styles.bulletText}>
                  공지사항/공용생활/공사안내 등으로 1차 필터링. 일본어, 한국어 등
                  다국어 컨텐츠 지원으로 다양한 입주자 대응합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>열람 상태 자동 추적</h4>
                <p className={styles.bulletText}>
                  공지를 읽은 사용자는 자동으로 &lsquo;열람 완료&rsquo;로 처리되어
                  중복 확인을 피합니다. 관리자는 실시간 모니터링이 가능합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>운영 커뮤니케이션 효율화</h4>
                <p className={styles.bulletText}>
                  관리자 건 발행대비 열람 평균 3.4건 → 4.2건으로 감소. 입주자 대상
                  전체 공지 평균 열람률 83.7% 달성합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Outcome ═══ */}
      <section className={styles.outcomeSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Outcome & Reflection</p>
            <h2 className={styles.outcomeTitle}>프로젝트 성과</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.outcomeGrid}>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>6</span>
                <span className={styles.outcomeLabel}>핵심 기능 모듈</span>
                <p className={styles.outcomeDesc}>
                  Contract, Billing, Intent, Notification, Request,
                  Announcement 통합 플랫폼
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>2</span>
                <span className={styles.outcomeLabel}>
                  플랫폼 (Web + App)
                </span>
                <p className={styles.outcomeDesc}>
                  입주자용 모바일 앱 + 관리자용 웹 백오피스 양방향 구조
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>40%</span>
                <span className={styles.outcomeLabel}>문의 건수 감소</span>
                <p className={styles.outcomeDesc}>
                  Self-serve 기능으로 관리자 부담 대폭 절감
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>65%</span>
                <span className={styles.outcomeLabel}>수기 문의 감소</span>
                <p className={styles.outcomeDesc}>
                  전화/수기 양식 대비 디지털 전환 효과
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.reflectionBox}>
              <h3 className={styles.reflectionTitle}>Reflection</h3>
              <p className={styles.reflectionText}>
                DNK RP는 일본이라는 특수한 부동산 시장의 로컬 규제와 운영 관행을
                깊이 이해해야 하는 프로젝트였습니다. 보증인 구조, 회차 계약,
                공익비·시스템비 등 일본 특유의 복잡한 임대 구조를 입주자가 직관적으로
                이해할 수 있는 UI로 풀어내는 것이 가장 큰 도전이었습니다.
              </p>
              <p className={styles.reflectionText}>
                기존 관리자 중심 PMS의 한계를 극복하고, 입주자가 스스로 정보를
                확인하고 행동할 수 있는 양방향 플랫폼을 설계함으로써, 단순한 정보
                전달 도구가 아닌 &lsquo;거주자 주도형 주거 경험&rsquo;이라는 새로운
                제품 방향을 제시했습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
