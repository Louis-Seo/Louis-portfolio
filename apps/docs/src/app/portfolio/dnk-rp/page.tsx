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

function CaseImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
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
            <h1 className={styles.heroTitle}>DNK Resident Portal</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDescription}>
              관리자 중심이던 일본 임대 운영을
              <br />
              거주자 중심 플랫폼으로 재설계했습니다
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
                  Product Planning, UX/UI Design,
                  <br />
                  Design System, Cross-platform Structure
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team</span>
                <span className={styles.metaValue}>Designer, PM, Dev, DL Engineer</span>
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
                  일본 주택 시장은 보증인 등록, 회차 계약, 공익비·시스템비 등 복잡한 운영 구조를
                  가지고 있으며, PMS 중심의 관리자 시스템은 입주자 경험과 완전히 분리되어
                  있었습니다.
                </p>
                <p className={styles.overviewText}>
                  이를 해결하기 위해 단일 계약 데이터 구조 위에 RP App(입주자용 모바일 앱), RP Admin
                  Web(관리자용 웹 백오피스), 그리고 PMS를 통합한 양방향 플랫폼을 설계했습니다.
                  입주자는 앱에서 계약 정보, 납부 내역, 공지사항, 시설 예약, 거주 계획 등을 직접
                  확인하고 제출할 수 있으며, 관리자는 Admin Web에서 계약서 발행, 공지 작성, 알림
                  발송, 민원 처리, 청구 생성 등의 업무를 수행합니다.
                </p>
                <p className={styles.overviewText}>
                  입주자 중심 구조를 본격 도입한 PMS 연동 주거 플랫폼입니다. 일본의 로컬 규제와 운영
                  관행을 존중하면서도, 거주자가 주도적으로 정보를 확인하고 행동할 수 있는 경험을
                  설계했습니다.
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
              전통적인 일본 임대 시스템은 관리자 중심으로 운영되며, 입주자는 계약, 납부, 공지 확인
              등 대부분의 정보를 수동적으로 전달받아야 했습니다. PMS가 보급되며 관리자의 업무는
              디지털화되었지만, 입주자와의 접점은 여전히 단절된 상태였습니다. 운영 시스템이 아니라,
              거주 경험 전체를 다시 설계해야 했습니다.
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
              일본의 기존 임대 시스템은 계약부터 공지까지 대부분 관리자가 일방적으로 전달하고,
              입주자는 정보를 직접 찾아야 하는 구조였습니다. 실제 거주자들의 경험을 분석한 결과,
              문제는 기능 부족이 아니라 계약·납부·공지·요청이 하나의 거주 흐름으로 연결되지 않았다는
              데 있었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.userQuoteGrid}>
              {[
                {
                  user: "User 01",
                  tag: "#불명확한 납부정보",
                  quote: "이번 달에 내가 총 얼마를 내야 하는지 한눈에 안 보여서 매번 헷갈려요.",
                },
                {
                  user: "User 02",
                  tag: "#계약정보 접근 불가",
                  quote: "내 계약 정보나 납부 내역을 찾으려면 너무 복잡해요.",
                },
                {
                  user: "User 03",
                  tag: "#연체정보 인지 불가",
                  quote: "연체료가 발생했는데 언제, 얼마가 추가됐는지 앱에서 바로 확인이 안 돼요.",
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
              한국과 일본 임차인 대상 리서치, 사용자 행동 분석, PMS 연동 조건, 실제 거주 시나리오를
              바탕으로 Resident Portal App의 주요 UX 방향성을 정의했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.directionGrid}>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Accessibility</h4>
                <p className={styles.directionCardSubtitle}>정보 접근의 민첩성</p>
                <p className={styles.directionCardText}>
                  &ldquo;내가 지금 뭘 해야 하는지&rdquo;, &ldquo;얼마를 언제까지 내야 하는지&rdquo;
                  즉시 알 수 있어야 합니다. 홈 화면에서 바로 파악할 수 있도록 상태 기반 구조로
                  설계했습니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Contextuality</h4>
                <p className={styles.directionCardSubtitle}>계약 상태 기반 맞춤 경험</p>
                <p className={styles.directionCardText}>
                  입주 전, 거주 중, 퇴실 예정 — 계약 상태에 따라 필요한 정보와 액션이 다릅니다.
                  상태별로 알림, 메뉴, 제출 조건이 자동으로 분기되도록 설계했습니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Clarity</h4>
                <p className={styles.directionCardSubtitle}>계약 및 금액 정보의 명확성</p>
                <p className={styles.directionCardText}>
                  다계약 회차, 연체료, 환불액, 납부 상태 — 복잡한 금액 구조를 시각적으로 번역해야
                  합니다. PMS 데이터 제약 안에서 정보를 단순화하고 계층화하여 즉시 이해할 수 있도록
                  설계했습니다.
                </p>
              </div>
              <div className={styles.directionCard}>
                <h4 className={styles.directionCardTitle}>Autonomy</h4>
                <p className={styles.directionCardSubtitle}>거주자의 주도권 강화</p>
                <p className={styles.directionCardText}>
                  기존 PMS는 관리자 중심 구조였습니다. RP App은 임차인이 계약·청구·시설 이용을 직접
                  제출하고 확인하고 추적할 수 있도록 설계했습니다.
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
                계약을 중심으로 데이터를 구조화하고, 그 위에 거주자가 스스로 관리하고 결정할 수 있는
                환경을 쌓았습니다. 계약 → 데이터 → 자율성으로 이어지는 이 구조가 RP System의
                핵심입니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.conceptFlow}>
              <div className={styles.conceptFlowCard}>
                <p className={styles.conceptFlowStep}>Step 01</p>
                <h4 className={styles.conceptFlowTitle}>Contract</h4>
                <p className={styles.conceptFlowText}>
                  계약 데이터를 단일 구조로 통합합니다. 입주자와 관리자가 동일한 계약 정보를
                  실시간으로 공유하며, 회차·보증인·법인 구분까지 하나의 모델로 관리합니다.
                </p>
              </div>
              <div className={styles.conceptFlowCard}>
                <p className={styles.conceptFlowStep}>Step 02</p>
                <h4 className={styles.conceptFlowTitle}>Data</h4>
                <p className={styles.conceptFlowText}>
                  계약 데이터 위에 청구, 납부, 알림, 공지, 민원 등 모든 운영 데이터를 연결합니다.
                  PMS와 양방향으로 동기화되어 정보 오류와 중복 입력을 제거합니다.
                </p>
              </div>
              <div className={styles.conceptFlowCard}>
                <p className={styles.conceptFlowStep}>Step 03</p>
                <h4 className={styles.conceptFlowTitle}>Autonomy</h4>
                <p className={styles.conceptFlowText}>
                  구조화된 데이터를 기반으로 입주자가 직접 확인·제출·관리할 수 있는 Self-serve
                  환경을 제공합니다. 관리자에게 묻지 않아도 거주 전 과정을 스스로 운영할 수 있도록
                  만들었습니다.
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
              RP App과 RP Admin Web은 같은 계약 데이터를 다른 맥락에서 표현합니다. 앱에서 입주자가
              보는 청구 상태 태그와 Admin Web에서 관리자가 보는 납부 현황 테이블은 동일한
              데이터지만, 표현 방식과 우선순위가 다릅니다. 여기에 PMS 필드 변경이나 신규 기능
              요구까지 대응하려면, 두 플랫폼이 공유하는 디자인 시스템이 필수였습니다. 이 시스템
              덕분에 App과 Admin Web을 동시에 확장하면서도 일관된 경험을 유지할 수 있었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.dsContext}>
              <div className={styles.dsContextCard}>
                <h4 className={styles.dsContextTitle}>App ↔ Admin Web 시각 언어 통일</h4>
                <p className={styles.dsContextText}>
                  앱의 &lsquo;미납&rsquo; 태그와 Admin Web의 납부 상태 컬럼이 같은 컬러·아이콘을
                  쓰도록 통일했습니다. 입주자와 관리자가 같은 정보를 다른 화면에서 봐도 혼동이
                  없습니다.
                </p>
              </div>
              <div className={styles.dsContextCard}>
                <h4 className={styles.dsContextTitle}>PMS 변경에 흔들리지 않는 구조</h4>
                <p className={styles.dsContextText}>
                  PMS에서 청구 항목이 추가되거나 계약 필드가 변경될 때마다 화면을 다시 만들 수
                  없습니다. Figma Tokens과 컴포넌트 라이브러리 구조로 기존 요소를 재조합해 빠르게
                  대응합니다.
                </p>
              </div>
              <div className={styles.dsContextCard}>
                <h4 className={styles.dsContextTitle}>디자이너-개발자 간 해석 차이 제거</h4>
                <p className={styles.dsContextText}>
                  버튼의 Boolean Variants, Semantic Color 용도, Spacing 규칙 등을 명세화하여
                  &ldquo;이 상태에서 어떤 스타일이 맞는지&rdquo; 논의 없이 바로 구현할 수 있도록
                  했습니다.
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
              일본 임대 계약은 회차 갱신, 보증인 등록, 법인/개인 구분 등 구조 자체가 복잡합니다.
              입주자는 앱에서 계약 기간, 납부 내역, 보증인 정보, 제출 문서를 직접 확인하고 공유할 수
              있으며, 관리자는 Admin Web에서 임차인 상세 조회, 상태 변경, 블랙리스트 운영까지 단일
              뷰로 처리합니다. 전화·수기 문의 없이 양쪽 모두 자급자족할 수 있는 계약 흐름을
              만들었습니다.
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
                <h4 className={styles.bulletTitle}>App: 계약 정보 + 문서 공유</h4>
                <p className={styles.bulletText}>
                  입주자는 앱에서 계약 기간, 납부 내역, 보증인 정보를 직접 확인합니다. 임대차
                  계약서, 소득증명서 등 제출 문서를 AirDrop·메일·메시지로 즉시 공유할 수 있어,
                  관리자에게 다시 요청하지 않아도 계약 관련 문서를 즉시 확보할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Admin Web: 실시간 계약 운영</h4>
                <p className={styles.bulletText}>
                  관리자는 Admin Web에서 임차인 상세, 계약 이력, 블랙리스트 상태, 비상연락처까지
                  단일 뷰로 확인합니다. 계약 상태 변경이 앱에 즉시 반영되어 전화·수기 확인 없이
                  운영할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>회차별 이력 + 법인/개인 구분</h4>
                <p className={styles.bulletText}>
                  동일 계정 내 다계약(회차)을 구분하고, 법인 계약 시 필요한 필드(법인명, 담당자,
                  연락처 등)를 분리하여 관리합니다. 도입 후 계약·문서 관련 문의 빈도가 내부 운영
                  기준 약 47% 감소했습니다.
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
              PMS 청구 데이터는 관리자를 위해 설계되어 있어, 입주자가 그대로 보면 이해하기
              어렵습니다. 이 데이터를 입주자 관점으로 번역하는 것이 핵심이었습니다. 앱에서는 납부
              금액·기한·계좌를 한 화면에 구성하고, Admin Web에서는 세대별 청구 리스트, 입출금 기록,
              보증금, 연체 로그를 통합 관리합니다.
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
                <h4 className={styles.bulletTitle}>App: 청구 상태 + 납부 안내</h4>
                <p className={styles.bulletText}>
                  미납, 부분납부, 연체 등 상태에 따라 컬러와 태그가 달라집니다. 납부 금액, 마감일,
                  계좌 정보를 한 화면에 구성하여 &ldquo;언제, 얼마, 어디로&rdquo; 납부하는지 즉시
                  파악할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>실납부-시스템 간 시차 대응</h4>
                <p className={styles.bulletText}>
                  자동 계산되는 연체 수수료와 실제 입금 확인 사이에는 시차가 있습니다.
                  &ldquo;납부했는데 왜 연체인가요?&rdquo; 유형의 문의를 줄이기 위해 시차 안내 UI를
                  분리 설계하여, 관련 반복 문의를 크게 줄였습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Admin Web: 청구 통합 관리</h4>
                <p className={styles.bulletText}>
                  세대별 월별 청구 리스트, 입출금 기록, 보증금 관리, 연체 수수료 로그를 하나의
                  화면에 구성했습니다. 기존에 여러 화면에 분산되어 있던 납부 정보를 통합해, 운영팀
                  기준 미납 확인 및 회수 처리 시간이 약 40% 단축되었습니다.
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
              전화·수기 양식이 전부였던 퇴거/재계약/방 이동 프로세스를 모바일 Self-serve 흐름으로
              전환했습니다. 입주자는 앱에서 계약 정보 확인, 의사 선택, 조건 입력, 제출까지 하나의
              흐름으로 처리합니다. Admin Web에서는 요청별 승인/거절/보류 관리와 전자계약 연동, 필수
              조건 자동 체크까지 지원합니다.
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
                <h4 className={styles.bulletTitle}>App: 퇴거/재계약/방 이동 Self-serve</h4>
                <p className={styles.bulletText}>
                  입주자가 모바일에서 직접 거주 계획을 제출합니다. 전화·수기 양식 중심이던 관련
                  문의가 도입 전후 비교 기준 약 65% 감소했으며, 제출부터 이력 확인까지 앱 안에서
                  완결됩니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>조건 기반 방 이동 요청</h4>
                <p className={styles.bulletText}>
                  희망 지역, 임대료 범위, 입주 가능 날짜를 입력하면 PMS와 연동되어 후보 방 매칭에
                  활용됩니다. 제출 이력은 앱에서 언제든 확인할 수 있어 재문의가 줄었습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Admin Web: 상태 관리 + 자동 필터</h4>
                <p className={styles.bulletText}>
                  관리자는 Admin Web에서 요청별 승인/거절/보류를 관리합니다. 블랙리스트, 미납,
                  조기해지 조건 미달 시 자동 Reject 필터가 적용되어 요청 누락이 크게 줄었으며,
                  운영팀 기준 처리 속도가 약 2배 향상되었습니다.
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
              기존 일괄 알림 구조는 모든 입주자에게 같은 내용을 보냈습니다. 계약 상태, 납부 내역,
              요청 처리 현황에 따라 필요한 정보만 선별해 전달하는 조건 기반 알림 시스템으로
              전환했습니다. 앱은 행동을 유도하고, Admin Web은 발송 이력과 응답 여부를 추적합니다.
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
                <h4 className={styles.bulletTitle}>App: 카테고리 5종 + 수신 설정</h4>
                <p className={styles.bulletText}>
                  계약·납부·연체·공지·민원 상태별로 알림을 분류합니다. 사용자가 수신 항목을 직접
                  설정할 수 있어 불필요한 푸시를 줄이고, 필요한 알림에만 집중하는 구조입니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>계약 상태 연동 자동 발송</h4>
                <p className={styles.bulletText}>
                  연체 발생 후 납부 미확인 시 리마인더가 자동 노출되고, 계약 종료 30일·7일·당일
                  시점에 순차적으로 푸시가 발송됩니다. &ldquo;언제 내야 하나요?&rdquo; 같은 반복
                  문의가 크게 줄었습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Admin Web: 발송 로그 + 추적</h4>
                <p className={styles.bulletText}>
                  관리자는 Admin Web에서 알림별 발송 일시, 성공/실패 여부, 수신·열람 상태를 확인할
                  수 있습니다. 실패한 알림은 재발송이 가능하며, 입주자별 알림 이력을 한 화면에서
                  추적합니다.
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
              민원을 접수해도 진행 상황을 알 수 없어 같은 내용을 다시 문의하는 구조가 문제였습니다.
              앱에서 접수하면 Admin Web으로 자동 전달되고, 담당자 배정부터 상태 업데이트, 완료
              처리까지 양쪽에서 투명하게 추적되는 티켓 기반 시스템을 설계했습니다.
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
                <h4 className={styles.bulletTitle}>App: 유형 분류 + 사진 첨부 접수</h4>
                <p className={styles.bulletText}>
                  &lsquo;생활 민원&rsquo;과 &lsquo;공용 공간 문제&rsquo;로 1차 분류하여 이슈 성격을
                  명확히 전달합니다. 텍스트 서술과 사진 첨부가 가능해 담당자가 현장 방문 전에 상황을
                  파악할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Admin Web: 칸반 기반 티켓 처리</h4>
                <p className={styles.bulletText}>
                  접수 → 처리 중 → 완료 → 재처리 전환을 칸반 UI로 관리합니다. 담당자 배정과 상태
                  전환이 구조화되면서 요청 누락과 커뮤니케이션 공백이 줄었습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>실시간 상태 공유 → 반복 문의 감소</h4>
                <p className={styles.bulletText}>
                  민원 상태 변경이 앱에 실시간으로 노출되어 &ldquo;접수됐나요?&rdquo; &ldquo;언제
                  처리되나요?&rdquo; 같은 확인 문의가 크게 줄었습니다. 명확한 접수 내용 덕분에 담당
                  배정도 빨라져 운영 기준 평균 처리 시간이 절반 이하로 단축되었습니다.
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
              공지를 보냈는데 입주자가 읽었는지 알 수 없고, 못 본 사람에게 다시 보낼 방법도
              없었습니다. 전달의 마지막 1마일을 해결하기 위해 다국어 지원, 열람 여부 자동 추적,
              미열람 대상 재공지 기능을 갖춘 시스템을 설계했습니다. 앱에서는 유형별 필터로 필요한
              공지만 확인하고, Admin Web에서는 열람률을 실시간으로 모니터링합니다.
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
                <h4 className={styles.bulletTitle}>App: 유형 필터 + 다국어 열람</h4>
                <p className={styles.bulletText}>
                  공지사항, 공용생활, 공사안내 등으로 필터링하여 필요한 정보만 확인합니다. 사용자의
                  절반 이상이 카테고리 필터를 통해 공지를 선별 열람했습니다. 일본어·한국어 등 다국어
                  콘텐츠를 지원하며, 열람한 공지는 자동으로 읽음 처리됩니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Admin Web: 열람률 추적 + 재공지</h4>
                <p className={styles.bulletText}>
                  관리자는 공지별 열람률을 실시간으로 확인하고, 입주자별 열람 여부(계정 상태 포함)를
                  조회할 수 있습니다. 읽지 않은 대상만 선택하여 Push 재발송이 가능하며, 재공지 후
                  열람률이 추가로 상승하는 것을 확인했습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>&ldquo;공지 못 받았어요&rdquo; 문의 감소</h4>
                <p className={styles.bulletText}>
                  열람 추적과 재공지 기능 도입 후 공지 미수신 관련 문의가 대폭 줄었습니다. 내부 운영
                  데이터 기준 전체 공지 평균 열람률이 80%를 넘어서며 공지 운영 부담이 크게
                  완화되었습니다.
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
                <span className={styles.outcomeLabel}>통합 플랫폼</span>
                <p className={styles.outcomeDesc}>
                  RP App + RP Admin Web + PMS를 단일 데이터 구조 위에 연결한 양방향 주거 플랫폼
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>6</span>
                <span className={styles.outcomeLabel}>핵심 기능 모듈</span>
                <p className={styles.outcomeDesc}>
                  계약, 청구, 거주 계획, 알림, 민원, 공지를 하나의 시스템으로 통합
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>47%</span>
                <span className={styles.outcomeLabel}>문의 건수 감소</span>
                <p className={styles.outcomeDesc}>Self-serve 구조 도입 전후 비교, 내부 운영 기준</p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>65%</span>
                <span className={styles.outcomeLabel}>수기 접수 감소</span>
                <p className={styles.outcomeDesc}>
                  전화·수기 양식 프로세스를 모바일로 전환, 도입 전후 비교
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.reflectionBox}>
              <h3 className={styles.reflectionTitle}>Reflection</h3>
              <p className={styles.reflectionText}>
                이 프로젝트의 본질은 화면을 새로 그리는 작업이 아니었습니다. 보증인 등록, 회차 계약,
                공익비·시스템비 — 일본 임대 시장 특유의 복잡한 운영 구조는 UI만으로는 해결되지
                않습니다. PMS에서 내려오는 데이터의 한계를 이해하고, 그 위에 입주자가 직접 확인하고
                행동할 수 있는 정보 계층을 설계하는 것이 핵심이었습니다.
              </p>
              <p className={styles.reflectionText}>
                가장 어려웠던 지점은, 같은 데이터를 두 사용자에게 다르게 보여주는 것이었습니다.
                관리자에게 청구 데이터는 회수율 관리 도구이고, 입주자에게는 &ldquo;이번 달에 얼마를
                내야 하는지&rdquo; 알려주는 안내입니다. 하나의 데이터 모델 위에 두 개의 맥락을
                정확히 표현하려면, 시스템 설계 단계에서부터 양쪽 시나리오를 동시에 그려야 했습니다.
              </p>
              <p className={styles.reflectionText}>
                RP System은 앱 하나를 만든 프로젝트가 아닙니다. 입주자 App, 관리자 Admin Web, PMS를
                단일 데이터 구조로 연결하고, 일본이라는 로컬 시장의 규제와 관행 위에서 거주자가
                주도적으로 자신의 주거를 관리할 수 있는 구조를 설계했습니다.
              </p>
              <p className={styles.reflectionText}>
                결과적으로 이 프로젝트는 앱을 하나 더 만드는 작업이 아니라, 관리자 중심 운영 구조를
                거주자 중심 플랫폼 구조로 전환한 설계였습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
