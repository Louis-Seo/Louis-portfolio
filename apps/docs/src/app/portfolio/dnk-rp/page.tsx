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
              RP App, RP Admin Web, PMS를 단일 데이터 구조 위에 통합한
              <br />
              입주자 중심의 양방향 주거 플랫폼
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
                  일본 주택 시장은 보증인 등록, 회차 계약, 공익비·시스템비 등
                  복잡한 운영 구조를 가지고 있으며, PMS 중심의 관리자 시스템은
                  입주자 경험과 완전히 분리되어 있었습니다.
                </p>
                <p className={styles.overviewText}>
                  이를 해결하기 위해 단일 계약 데이터 구조 위에 RP
                  App(입주자용 모바일 앱), RP Admin Web(관리자용 웹
                  백오피스), 그리고 PMS를 통합한 양방향 플랫폼을
                  설계했습니다. 입주자는 앱에서 계약 정보, 납부 내역,
                  공지사항, 시설 예약, 거주 계획 등을 직접 확인하고 제출할 수
                  있으며, 관리자는 Admin Web에서 계약서 발행, 공지 작성, 알림
                  발송, 민원 처리, 청구 생성 등의 업무를 수행합니다.
                </p>
                <p className={styles.overviewText}>
                  이 프로젝트의 핵심은 &lsquo;입주자 중심의 구조를 도입한
                  최초의 PMS 연동 주거 플랫폼&rsquo;이라는 점이며, 일본의
                  로컬 규제와 운영 관행에 맞춘 사용자 경험 설계에
                  집중했습니다.
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
              전통적인 일본 임대 시스템은 관리자 중심으로 운영되며, 입주자는
              계약, 납부, 공지 확인 등 대부분의 정보를 수동적으로 전달받아야
              했습니다. PMS가 보급되며 관리자의 업무는 디지털화되었지만,
              입주자와의 접점은 여전히 단절된 상태였습니다. 이 한계를
              해결하기 위해 단일 계약 데이터를 기반으로 입주자와 관리자 간
              양방향 연결이 가능한 통합 플랫폼(RP System)을 설계했습니다.
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
              일본의 기존 임대 시스템은 계약부터 공지까지 대부분 관리자가
              일방적으로 전달하고, 입주자는 정보를 직접 찾아야 하는
              구조였습니다. 실제 거주자들의 사용 경험을 분석하여 무엇이
              불편했고, 왜 직접 해결할 수 없었는지를 파악했습니다.
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
                  user: "User 04",
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
            <p className={styles.sectionDesc}>
              한국과 일본 임차인 대상 리서치, 사용자 행동 분석, PMS 연동
              조건, 실제 거주 시나리오를 바탕으로 Resident Portal App의
              주요 UX 방향성을 정의했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.directionGrid}>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Accessibility</h4>
                <p className={styles.directionCardSubtitle}>
                  정보 접근의 민첩성
                </p>
                <p className={styles.directionCardText}>
                  임차인은 &ldquo;내가 지금 뭘 해야 하는지&rdquo;,
                  &ldquo;얼마를 언제까지 내야 하는지&rdquo; 즉시 알 수
                  있어야 합니다. 중앙에 모인 홈 화면 구조와 상태 기반 콘텐츠
                  설계로 정보 접근을 빠르고 정확하게 만듭니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Contextuality</h4>
                <p className={styles.directionCardSubtitle}>
                  계약 상태 기반 맞춤 경험
                </p>
                <p className={styles.directionCardText}>
                  입주 전, 거주 중, 퇴실 예정 등 계약 상태에 따라 사용자가
                  마주하는 정보와 액션은 달라집니다. 앱은 각 상태에 따라
                  적절한 알림, 메뉴, 제출 가능/불가 조건을 제시해 흐름을
                  끊기지 않게 설계했습니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Clarity</h4>
                <p className={styles.directionCardSubtitle}>
                  계약 및 금액 정보의 명확성
                </p>
                <p className={styles.directionCardText}>
                  다계약 회차, 연체료, 환불액, 납부 상태 등 복잡한 계약
                  정보를 누구나 이해할 수 있는 UI로 구성해야 합니다. PMS
                  데이터 제약을 감안해 정보 구조를 단순화하고 시각적으로
                  계층화된 인터페이스를 설계했습니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Autonomy</h4>
                <p className={styles.directionCardSubtitle}>
                  거주자의 주도권 강화
                </p>
                <p className={styles.directionCardText}>
                  기존 PMS는 관리자 중심 구조였지만, RP App은 임차인이
                  계약·청구·시설 이용을 스스로 관리할 수 있도록
                  설계되었습니다. 입력 → 제출 → 결과 확인까지 이어지는 전
                  과정을 명확하게 연결합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Concept: Contract → Data → Autonomy ═══ */}
      <section className={styles.conceptSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.conceptHeader}>
              <p className={styles.sectionLabel}>UX/UI Concept</p>
              <h2 className={styles.conceptTitle}>
                From Fragmented Touchpoints
                <br />
                To A Connected Living Experience
              </h2>
              <p className={styles.conceptDesc}>
                RP App은 단순히 정보를 열람하는 도구가 아닙니다. 계약을
                중심으로 데이터를 구조화하여 거주자가 스스로 관리하고 결정할
                수 있는 환경을 제공합니다. 계약 → 데이터 → 자율성으로
                이어지는 이 구조는 기존 관리자 중심 PMS의 한계를 극복하고,
                거주자 주도형 주거 경험을 실현합니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.conceptFlow}>
              <div className={styles.conceptFlowCard}>
                <p className={styles.conceptFlowStep}>Step 01</p>
                <h4 className={styles.conceptFlowTitle}>Contract</h4>
                <p className={styles.conceptFlowText}>
                  계약 데이터를 단일 구조로 통합합니다. 입주자와 관리자가
                  동일한 계약 정보를 실시간으로 공유하며, 회차·보증인·법인
                  구분까지 하나의 모델로 관리합니다.
                </p>
              </div>
              <div className={styles.conceptFlowCard}>
                <p className={styles.conceptFlowStep}>Step 02</p>
                <h4 className={styles.conceptFlowTitle}>Data</h4>
                <p className={styles.conceptFlowText}>
                  계약 데이터 위에 청구, 납부, 알림, 공지, 민원 등 모든
                  운영 데이터를 연결합니다. PMS와 양방향으로 동기화되어
                  정보 오류와 중복 입력을 제거합니다.
                </p>
              </div>
              <div className={styles.conceptFlowCard}>
                <p className={styles.conceptFlowStep}>Step 03</p>
                <h4 className={styles.conceptFlowTitle}>Autonomy</h4>
                <p className={styles.conceptFlowText}>
                  구조화된 데이터를 기반으로 입주자가 직접 확인·제출·관리할
                  수 있는 Self-serve 환경을 제공합니다. 관리자 문의 없이도
                  거주 전 과정을 주도적으로 운영할 수 있습니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
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
              RP App과 RP Admin Web은 동일한 데이터를 서로 다른
              플랫폼에서 표현합니다. 앱은 입주자의 핵심 정보를 모바일에
              최적화된 구조로 전달하고, Admin Web은 관리자가 복수 세대의
              계약·청구·민원을 한 화면에서 처리할 수 있도록 설계해야
              합니다. 이 두 플랫폼이 일관된 시각 언어를 유지하면서도 각각의
              맥락에 맞게 동작하려면, 공유 가능한 디자인 시스템이
              필수였습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.dsContext}>
              <div className={styles.dsContextCard}>
                <h4 className={styles.dsContextTitle}>
                  App + Admin Web 일관성
                </h4>
                <p className={styles.dsContextText}>
                  색상, 타이포그래피, 컴포넌트 구조를 공유하여 입주자와
                  관리자가 동일한 정보를 다른 맥락에서 인지해도 혼동 없이
                  이해할 수 있도록 했습니다.
                </p>
              </div>
              <div className={styles.dsContextCard}>
                <h4 className={styles.dsContextTitle}>
                  PMS 변경 대응력
                </h4>
                <p className={styles.dsContextText}>
                  Figma Tokens과 라이브러리 구조를 통해 PMS 데이터 필드
                  변경이나 신규 기능 추가 시에도 기존 컴포넌트를 재사용하며
                  빠르게 대응할 수 있도록 설계했습니다.
                </p>
              </div>
              <div className={styles.dsContextCard}>
                <h4 className={styles.dsContextTitle}>
                  개발 협업 효율화
                </h4>
                <p className={styles.dsContextText}>
                  Boolean 속성 기반 Variants, Semantic Color, Spacing
                  규칙 등을 문서화하여 디자이너-개발자 간 해석 차이를
                  줄이고, 구현 속도를 높였습니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
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
          <Reveal delay={300}>
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
              일본 임대 시장의 복잡한 계약 구조를 단순화하고, 임차인이
              직접 필요한 정보를 확인하고 관리할 수 있도록 설계했습니다.
              RP App에서는 계약 기간, 납부 내역, 보증인 정보, 문서
              다운로드 및 공유 기능을 하나의 구조로 통합했고, Admin
              Web에서는 임차인 상세 조회, 실시간 상태 변경, 계약 이력
              관리, 블랙리스트 운영 등을 단일 뷰로 처리할 수 있습니다.
              기존의 전화·수기 문의 중심 운영에서 벗어나, 임차인과
              관리자 모두가 불필요한 커뮤니케이션 없이 업무를 자급자족할
              수 있는 계약 흐름을 완성했습니다.
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
                <h4 className={styles.bulletTitle}>
                  단일 데이터 기반 통합 뷰
                </h4>
                <p className={styles.bulletText}>
                  앱과 Admin Web의 계약 데이터가 실시간으로 동기화됩니다.
                  입주자가 앱에서 보는 계약 상태와 관리자가 웹에서 확인하는
                  정보가 항상 일치하여 정보 오류와 중복 입력을 제거합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  모바일 문서 전달 경험
                </h4>
                <p className={styles.bulletText}>
                  임대차 계약서, 소득증명서, 주민등록등본 등 제출 문서를
                  앱에서 즉시 다운로드하거나 AirDrop, 메일, 메시지 등으로
                  공유할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  회차별 이력 + 법인/개인 구조
                </h4>
                <p className={styles.bulletText}>
                  동일 계정 내 다계약(회차)을 구분하고, 법인 계약 시 필요한
                  필드(법인명, 담당자, 연락처 등)를 분리하여 관리합니다.
                  문의 발생 빈도 47% 감소 효과가 있었습니다.
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
              PMS에서 내려오는 복잡한 청구 데이터를 임차인 관점에서
              구조화했습니다. 납부 금액·기한·납부 방식에 따라 상태가
              달라지는 로직을 명확하게 표현하고, 청구서와 납부 계좌 정보를
              분리해 구성했습니다. 연체 발생 시점과 수수료 구조도 입주자가
              오해 없이 이해할 수 있도록 설명 UI를 도입했고, Admin
              Web에서는 세대별 월별 청구 리스트, 입출금 기록, 보증금 관리,
              청구 로그까지 한 화면에서 운영할 수 있습니다.
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
                <h4 className={styles.bulletTitle}>
                  청구 상태별 시각적 안내
                </h4>
                <p className={styles.bulletText}>
                  미납, 부분납부, 연체 등 상태에 따라 컬러, 상태 태그, 요약
                  차트가 달라집니다. &ldquo;언제, 얼마, 어디로&rdquo;
                  납부해야 하는지를 한 화면에서 파악할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  실납부액 불일치 대응
                </h4>
                <p className={styles.bulletText}>
                  연체 수수료는 자동 계산되지만 실제 납부 확인은 비동기로
                  처리됩니다. &ldquo;납부했는데 연체로 표시되는&rdquo;
                  케이스에 대한 설명 UI를 제공하여 반복 문의를 40%
                  줄였습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  운영 효율 + 시각화
                </h4>
                <p className={styles.bulletText}>
                  기존에 분산되어 있던 납부 계좌, 가상계좌, 입금자명 등을 한
                  화면에 구조화했습니다. Admin Web 기준 미납 확인 및 회수
                  처리 시간이 약 41% 단축되었습니다.
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
              계약 종료 시점에 맞춰 퇴거, 재계약, 방 이동 의사를 모바일에서
              직접 제출할 수 있는 Self-serve 프로세스를 설계했습니다.
              이전에는 전화 문의, 수기 양식, 관리자 수동 등록으로 진행되던
              과정을 단일 화면 흐름으로 통합했습니다. 사용자는 현재 계약
              정보를 확인하고 → 의사를 선택한 뒤 → 조건을 입력하고 → 제출
              완료까지 최적화된 UX 흐름으로 처리합니다. Admin Web에서는
              요청별 상태 관리(승인/거절/보류)와 전자계약 연동, 필수 조건
              자동 체크까지 지원합니다.
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
                <h4 className={styles.bulletTitle}>
                  퇴거/재계약/방 이동 통합 흐름
                </h4>
                <p className={styles.bulletText}>
                  기존 전화/수기 양식 대비 월 평균 문의량 120건 → 42건으로
                  약 65% 감소했습니다. 모바일에서 계약 확인부터 의사 제출,
                  이력 확인까지 일원화했습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  조건 기반 방 이동 요청
                </h4>
                <p className={styles.bulletText}>
                  희망 지역, 임대료 범위, 입주 가능 날짜를 입력하면 PMS와
                  자동 연동되어 매칭 후보 리스트를 필터링할 수 있습니다.
                  제출 이력은 앱에서 언제든 확인 가능합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  리스크 자동 필터
                </h4>
                <p className={styles.bulletText}>
                  블랙리스트 등록, 미납 존재, 조기해지 조건 미달 시 자동
                  Reject 필터를 적용합니다. 요청 누락률 13% → 1% 미만으로
                  감소했으며, 관리자 처리 속도가 2배 향상되었습니다.
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
              사용자별 계약 상태, 납부 내역, 요청 처리 현황, 푸시 수신 여부
              등을 실시간으로 반영하여 필요한 정보와 행동만을 선별해
              전달하는 맞춤형 알림 시스템입니다. 기존의 일괄 알림 구조에서
              탈피하여 임차인의 주기적 맥락에 맞는 안내가 카테고리·조건
              기반으로 자동 분류됩니다. Admin Web에서는 알림 발송 로그
              추적, 발송 결과 확인, 재발송 여부까지 관리할 수 있습니다.
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
                <h4 className={styles.bulletTitle}>알림 카테고리 5종 분류</h4>
                <p className={styles.bulletText}>
                  계약·납부·연체·공지·민원 진행 상태별로 필터 설정이
                  가능합니다. 앱 푸시와 인앱 알림을 자동으로 분리하여
                  사용자는 필요한 내용에만 집중합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>행동 기반 타이밍 설계</h4>
                <p className={styles.bulletText}>
                  연체 5일 후 납부 미확인 시 리마인더 자동 노출, 계약 종료
                  30일·7일·당일 시점별 푸시 자동 발송 등 맥락에 맞는 알림
                  타이밍을 적용했습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>수신 설정 + 반복 문의 감소</h4>
                <p className={styles.bulletText}>
                  사용자가 수신 항목을 직접 설정할 수 있어 푸시 피로도를
                  줄였습니다. 알림 기반 행동 전환률 52% 향상, 반복 문의
                  40% 감소 효과가 있었습니다.
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
              생활 민원, 시설 고장, 공용 공간 문제 등 다양한 상황에 대해
              모바일에서 간편하게 접수하고, 진행 상태를 실시간으로 확인할
              수 있는 티켓 기반 민원 처리 시스템입니다. 모든 요청은
              카테고리별(생활/공용/기타)로 분류되어 앱에서 Admin Web으로
              자동 전달되며, 담당자 배정부터 커뮤니케이션, 상태 업데이트,
              완료 처리까지 투명하게 추적됩니다.
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
                <h4 className={styles.bulletTitle}>유형 분리 + 텍스트/이미지 접수</h4>
                <p className={styles.bulletText}>
                  &lsquo;생활 민원&rsquo;과 &lsquo;공용 공간 문제&rsquo;로
                  1차 분류하여 사용자가 이슈 성격을 명확히 인지하고
                  작성합니다. 문제 상황 서술과 사진 첨부가 가능하여 담당자의
                  대응 품질이 향상되었습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  칸반 기반 관리자 처리 구조
                </h4>
                <p className={styles.bulletText}>
                  Admin Web에서 접수 → 처리 중 → 완료 → 재처리 등 전환
                  상태를 칸반 UI로 관리합니다. 태그, 커뮤니케이션 로그, 메모
                  기능을 통해 처리 이력이 투명하게 기록됩니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  처리 시간 단축 + 반복 문의 감소
                </h4>
                <p className={styles.bulletText}>
                  민원 평균 처리 소요 시간 3.2일 → 1.4일로 단축되었습니다.
                  상태 업데이트가 앱에 실시간 노출되어 &ldquo;접수됐나요?&rdquo;
                  &ldquo;언제 처리되나요?&rdquo; 등 반복 문의가 53%
                  감소했습니다.
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
              단지 운영에 필요한 공지사항을 입주자에게 효과적으로 전달하기
              위해 다국어 지원, 사용자별 열람 여부 추적, 관리자별 열람률
              모니터링이 가능한 시스템을 구성했습니다. 모바일에서는 공지
              유형별 필터링(공지사항/공용생활/공사안내 등)을 통해 필요한
              정보만 볼 수 있으며, Admin Web에서는 열람률 실시간 모니터링,
              입주자별 열람 여부 확인, 미열람 대상 재공지 기능까지 활용할
              수 있습니다.
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
                <h4 className={styles.bulletTitle}>
                  유형 필터 + 다국어 지원
                </h4>
                <p className={styles.bulletText}>
                  공지사항, 공용생활, 공사안내 등으로 1차 필터링하고,
                  일본어·한국어 등 다국어 콘텐츠를 지원하여 다양한 국적의
                  입주자에게 대응합니다. 전체 공지 중 58%가 유형 필터를 통해
                  열람되었습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  열람 추적 + 타겟 재공지
                </h4>
                <p className={styles.bulletText}>
                  공지를 읽은 사용자는 자동으로 열람 완료 처리됩니다. 관리자는
                  실시간 열람률을 확인하고, 읽지 않은 사용자만 선택하여 Push
                  재발송이 가능합니다. 재공지 시 열람률이 평균 12~15%
                  추가 상승했습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>
                  운영 커뮤니케이션 효율화
                </h4>
                <p className={styles.bulletText}>
                  &ldquo;공지 못 받았어요&rdquo; 문의가 월평균 34건 →
                  4건으로 감소했습니다. 입주자 대상 전체 공지 평균 열람률
                  83.7%를 달성하여 기존 대비 37.5%p 향상되었습니다.
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
                <span className={styles.outcomeValue}>3</span>
                <span className={styles.outcomeLabel}>
                  통합 플랫폼
                </span>
                <p className={styles.outcomeDesc}>
                  RP App + RP Admin Web + PMS를 단일 데이터 구조 위에 연결한
                  양방향 주거 플랫폼
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>6</span>
                <span className={styles.outcomeLabel}>핵심 기능 모듈</span>
                <p className={styles.outcomeDesc}>
                  계약, 청구, 거주 계획, 알림, 민원, 공지를 하나의
                  시스템으로 통합
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>47%</span>
                <span className={styles.outcomeLabel}>문의 건수 감소</span>
                <p className={styles.outcomeDesc}>
                  Self-serve 구조 도입으로 관리자 대상 반복 문의 대폭 절감
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>65%</span>
                <span className={styles.outcomeLabel}>수기 접수 감소</span>
                <p className={styles.outcomeDesc}>
                  전화·수기 양식 기반 프로세스를 모바일 디지털 전환
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.reflectionBox}>
              <h3 className={styles.reflectionTitle}>Reflection</h3>
              <p className={styles.reflectionText}>
                이 프로젝트의 본질은 UI 리디자인이 아니라, 일본 주택 시장의
                운영 구조를 거주자 중심으로 재설계하는 작업이었습니다.
                보증인 등록, 회차 계약, 공익비·시스템비 등 일본 특유의 임대
                구조는 단순히 화면을 예쁘게 만든다고 해결되지 않았습니다.
                PMS에서 내려오는 데이터의 구조적 한계를 이해하고, 그 위에
                입주자가 스스로 확인하고 행동할 수 있는 정보 계층을 쌓는
                것이 핵심 과제였습니다.
              </p>
              <p className={styles.reflectionText}>
                가장 어려웠던 부분은 관리자 중심으로 설계된 기존 PMS의
                데이터 모델을 입주자 관점으로 재해석하는 것이었습니다. 같은
                청구 데이터라도 관리자에게는 회수율 관리 도구이고, 입주자에게는
                &ldquo;이번 달에 얼마를 내야 하는지&rdquo; 알려주는
                안내입니다. 하나의 데이터를 두 개의 맥락에서 정확하게
                표현하기 위해, 시스템 설계 단계에서부터 양쪽 사용자의
                시나리오를 동시에 고려해야 했습니다.
              </p>
              <p className={styles.reflectionText}>
                결과적으로, RP System은 단순한 앱 하나가 아니라 입주자 App +
                관리자 Admin Web + PMS를 하나로 연결한 Resident-Centered
                Platform Model의 제안이었습니다. 일본이라는 로컬 시장의
                규제와 관행을 존중하면서도, 거주자가 주도적으로 자신의 주거
                경험을 관리할 수 있는 구조를 만들었다는 점에서 의미 있는
                프로젝트였습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
