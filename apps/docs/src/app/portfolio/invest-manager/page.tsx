"use client";

import { useState } from "react";
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
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`${styles.imageFrame} ${className || ""}`}>
      {failed ? (
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderLabel}>{label || alt}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 828px) 100vw, 1080px"
          style={{ objectFit: "cover" }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function InvestManagerPage() {
  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.heroLabel}>Product Design · 2024–</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>DNK Invest Manager</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroTagline}>Turning complex BI into decision-ready workspace</p>
            <p className={styles.heroDescription}>
              부동산 투자 분석의 복잡도를 줄이고,
              <br />
              조직 전체가 신뢰 가능한 수치로 의사결정할 수 있는 구조를 설계했습니다.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>Product Designer</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>2024–</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Contribution</span>
                <span className={styles.metaValue}>
                  Product Planning, IA, Dashboard Builder,
                  <br />
                  Deal Pipeline, CFC, AI SQL, Design System
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team</span>
                <span className={styles.metaValue}>Designer, PM, Dev, Data Engineer</span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={400}>
          <div className={styles.container}>
            <CaseImage
              src="/images/portfolio/invest-manager/hero.png"
              alt="DNK Invest Manager System Dashboard"
              className={styles.heroImage}
              label="System Dashboard"
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
                  데이터를 보는 것이 아니라
                  <br />
                  판단할 수 있는 구조를 만들다
                </h2>
              </div>
              <div className={styles.overviewRight}>
                <p className={styles.overviewText}>
                  DNK Investment Manager는 부동산 투자 포트폴리오의 성과를 분석하고 의사결정으로
                  연결하는 플랫폼입니다. 기존에는 BI 도구 기반의 복잡한 대시보드가 유일한 분석
                  수단이었고, 비전문 사용자에게는 진입장벽이 높았습니다.
                </p>
                <p className={styles.overviewText}>
                  이번 리디자인은 &ldquo;데이터 툴&rdquo;이 아닌 &ldquo;결정 지원
                  인터페이스&rdquo;를 목표로 했습니다. Home에서 포트폴리오 건강도를 파악하고,
                  Dashboard Builder로 목적 중심 분석을 구성하며, Deal Pipeline으로 투자를 실행하고,
                  AI SQL로 자유롭게 탐색하는 — 6개 탭이 하나의 투자 분석 워크플로우를 구성합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Problem ═══ */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Problem</p>
            <h2 className={styles.sectionTitle}>
              데이터는 있지만,
              <br />
              같은 숫자를 보고 있는지 확신할 수 없었습니다
            </h2>
            <p className={styles.sectionDesc}>
              기존 IM 환경에서 사용자들이 공통적으로 경험한 문제를 정리하면, 도구의 부재가 아니라
              해석의 기준과 접근성의 부재가 핵심이었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.painGrid}>
              {[
                {
                  num: "01",
                  title: "해석 기준의 부재",
                  desc: "Cash Flow 구조와 Normalization 기준이 통일되지 않아, 동일한 데이터도 사용자마다 다른 숫자를 읽었습니다. 데이터는 존재하지만 목적에 맞는 해석과 비교가 어려웠습니다.",
                },
                {
                  num: "02",
                  title: "높은 BI 진입장벽",
                  desc: "BI 도구는 강력하지만, 비전문 사용자가 직접 대시보드를 만들거나 수정하기엔 너무 복잡했습니다. 차트 설정이 기술적이고, 목적에 맞는 뷰를 빠르게 구성할 수 없었습니다.",
                },
                {
                  num: "03",
                  title: "역할별 뷰 부재",
                  desc: "Executive, Asset Manager, Analyst, Data Manager가 각자 다른 깊이의 정보를 필요로 하지만, 모두 동일한 인터페이스를 써야 했습니다.",
                },
              ].map((item, i) => (
                <Reveal key={item.num} delay={i * 60}>
                  <div className={styles.painCard}>
                    <span className={styles.painNum}>{item.num}</span>
                    <h4 className={styles.painTitle}>{item.title}</h4>
                    <p className={styles.painDesc}>{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className={styles.container}>
            <CaseImage
              src="/images/portfolio/invest-manager/problem-before.png"
              alt="기존 BI 도구 기반 대시보드의 복잡한 인터페이스"
              className={styles.fullImage}
              label="PMR Report — Raw Data Table"
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Users ═══ */}
      <section className={styles.usersSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Users</p>
            <h2 className={styles.sectionTitle}>4가지 역할, 각각 다른 질문</h2>
            <p className={styles.sectionDesc}>
              IM 서비스의 사용자는 역할에 따라 보고 싶은 정보의 깊이와 방향이 다릅니다. 이 차이를
              존중하면서도 동일한 데이터 기반 위에서 분석할 수 있도록 설계했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.userGrid}>
              {[
                {
                  role: "Executive",
                  question: "포트폴리오 전체가 어떤 방향으로 가고 있는가?",
                  needs: "AUM, NOI, Yield, Growth를 빠르게 확인하고 이상 징후를 포착",
                  tab: "Home, Dashboard",
                },
                {
                  role: "Asset Manager",
                  question: "이 포트폴리오/에셋의 성과는 무엇이 끌어올리고 있는가?",
                  needs: "Rent, Occupancy, Expense, NOI를 깊게 보고 차트와 테이블을 오가며 확인",
                  tab: "Dashboard Builder, Deal Pipeline",
                },
                {
                  role: "Analyst",
                  question: "Vintage별, Class별 비교에서 어떤 패턴이 보이는가?",
                  needs: "AUM mix, Yield 비교, Rent per Tsubo 등 비교 분석과 drill down",
                  tab: "Dashboard Builder, AI SQL",
                },
                {
                  role: "Data Manager",
                  question: "Executive가 보는 숫자의 전제가 정확한가?",
                  needs: "PMR completeness, CFC 템플릿, 데이터 품질을 관리하고 제어",
                  tab: "Data Management, Cash Flow Config",
                },
              ].map((item, i) => (
                <Reveal key={item.role} delay={i * 80}>
                  <div className={styles.userCard}>
                    <span className={styles.userRole}>{item.role}</span>
                    <p className={styles.userQuestion}>&ldquo;{item.question}&rdquo;</p>
                    <p className={styles.userNeeds}>{item.needs}</p>
                    <span className={styles.userTab}>{item.tab}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Design Strategy ═══ */}
      <section className={styles.strategySection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Design Strategy</p>
            <h2 className={styles.sectionTitleLight}>
              3가지 핵심 전략으로
              <br />
              제품의 판단 기준을 세웠습니다
            </h2>
            <p className={styles.sectionDesc}>
              모든 설계 의사결정은 이 전략을 기준으로 이루어졌습니다. 단순 기능 나열이 아니라,
              사용자가 숫자를 신뢰하고 빠르게 행동할 수 있는 구조를 만드는 것이 목표였습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.strategyGrid}>
              {[
                {
                  num: "01",
                  title: "Trust the Numbers",
                  desc: "숫자보다 먼저 전제를 보여줍니다. Scope와 CFC 템플릿을 항상 명시하고, 대시보드 1개에 CFC 1개만 적용하여 조직 전체가 같은 숫자를 읽습니다. 글로벌 필터로 공통 조건을 관리합니다.",
                  tags: ["Scope First", "One Dashboard = One CFC", "Global Filter"],
                },
                {
                  num: "02",
                  title: "Lower the Barrier",
                  desc: "빈 화면 대신 쓸 만한 출발점을 제공합니다. 11개 Preset Chart로 즉시 시작하고, Executive부터 Analyst까지 각자의 깊이에서 분석할 수 있습니다. 직관성과 확장성을 동시에 잡습니다.",
                  tags: ["Preset Over Blank", "Executive-friendly", "Analyst-capable"],
                },
                {
                  num: "03",
                  title: "AI as Copilot",
                  desc: "AI는 요약하지만, 항상 검증 가능해야 합니다. 차트의 패턴을 자연어로 설명하고 후속 질문을 제안하되, Data Table과 SQL로 원본을 직접 확인할 수 있습니다.",
                  tags: ["Insight with Proof", "Verifiable AI", "Natural Language Query"],
                },
              ].map((item, i) => (
                <Reveal key={item.num} delay={i * 80}>
                  <div className={styles.strategyCard}>
                    <span className={styles.strategyNum}>{item.num}</span>
                    <h4 className={styles.strategyTitle}>{item.title}</h4>
                    <p className={styles.strategyDesc}>{item.desc}</p>
                    <div className={styles.strategyTags}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.strategyTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Information Architecture ═══ */}
      <section className={styles.iaSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Information Architecture</p>
            <h2 className={styles.sectionTitle}>하나의 분석 체계로 묶인 탭과 확장 레이어</h2>
            <p className={styles.sectionDesc}>
              IM의 탭은 각각 독립적 기능이 아니라, 하나의 투자 분석 워크플로우를 구성하는 연결된
              체계입니다. Home에서 진입하여 Dashboard로 분석하고, Deal Pipeline으로 실행하며, Data
              Management와 CFC로 숫자의 전제를 관리합니다. 그 위에{" "}
              <strong>Command Palette(⌘K)</strong>가 IA의 확장 레이어로 놓여, 기능이 늘어도
              사이드바가 무거워지지 않는 구조를 만들었습니다.
            </p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className={styles.container}>
            <CaseImage
              src="/images/portfolio/invest-manager/ia-map.png"
              alt="DNK Invest Manager 6탭 정보 구조"
              className={styles.fullImage}
              label="Information Architecture — 6 Tabs"
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Feature 01: Home ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Feature 01</p>
            <h2 className={styles.featureTitle}>Home</h2>
            <p className={styles.featureDescription}>
              포트폴리오 건강도를 한눈에 파악하는 진입 허브입니다. 단순한 대시보드 목록이 아니라,
              Trust Bar로 데이터 신뢰도를 먼저 확인하고, Key Metrics로 핵심 지표를 선택하며, Action
              Center로 다음 행동을 제안받는 구조입니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/home.png"
              alt="Home 탭 — Trust Bar, Key Metrics, Action Center"
              className={styles.featureHeroImage}
              label="Home — Portfolio Overview"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Trust Bar</h4>
                <p className={styles.bulletText}>
                  숫자를 보기 전에 전제를 먼저 보여줍니다. PMR 업로드율, Missing Data, Last
                  Refresh를 상단에 노출하여 데이터 신뢰도를 즉시 확인합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Action Center</h4>
                <p className={styles.bulletText}>
                  관찰에서 끝나지 않는 허브. Critical, Watch, Info 레벨의 알림으로 다음 할 일을
                  제안하고, 영향받는 에셋으로 바로 이동할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Key Metrics</h4>
                <p className={styles.bulletText}>
                  역할마다 다른 첫 숫자. AUM, NOI Yield, Occupancy, Rent per Tsubo 중 선택하면 우측
                  차트가 즉시 동기화됩니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 02: Dashboard Builder ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Feature 02</p>
            <h2 className={styles.featureTitle}>Dashboard Builder</h2>
            <p className={styles.featureDescription}>
              BI 도구 없이 목적 중심 대시보드를 직접 구성하는 셀프서비스 빌더입니다. 빈 화면 대신
              11개 Preset Chart로 즉시 시작하고, 드래그앤드롭으로 섹션과 셀을 자유롭게 배치합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/dashboard-builder.png"
              alt="Dashboard Builder — 드래그앤드롭 레이아웃과 Preset Chart 패널"
              className={styles.featureHeroImage}
              label="Dashboard Builder"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>2-Level Drag & Drop</h4>
                <p className={styles.bulletText}>
                  셀 레벨과 섹션 레벨의 이중 드래그 시스템. 위젯을 배치하고, 섹션으로 그룹핑하며,
                  시각적 피드백으로 결과를 미리 예측할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Preset Chart Panel</h4>
                <p className={styles.bulletText}>
                  빈 화면 대신 11개 쓸 만한 출발점. AUM, Cap Rate, Revenue, Occupancy 등 핵심 투자
                  지표를 원클릭으로 추가합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Real-time Preview</h4>
                <p className={styles.bulletText}>
                  차트를 선택하면 즉시 미리보기가 생성됩니다. 편집 모드에서 바로 결과를 확인하고,
                  확신을 가지고 대시보드를 완성합니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── 완성된 대시보드 — Portfolio Performance Overview ── */}
          <Reveal delay={300}>
            <div className={styles.subSectionHeader}>
              <p className={styles.subSectionLabel}>Completed Dashboard</p>
              <h3 className={styles.subSectionTitle}>Portfolio Performance Overview</h3>
              <p className={styles.subSectionDesc}>
                빌더로 구성한 대시보드가 실제 사용자에게 어떻게 도달하는지. 5개 Preset Chart를 3+2
                레이아웃으로 배치하고, 헤더의 필터 체인과 AI Insights가 분석 흐름 전반을 감쌉니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={350}>
            <CaseImage
              src="/images/portfolio/invest-manager/dashboard-built.png"
              alt="완성된 대시보드 — Portfolio Performance Overview (5 차트, 필터 체인, AI Insights)"
              className={styles.featureHeroImage}
              label="Portfolio Performance Overview"
            />
          </Reveal>
          <Reveal delay={400}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Hover-only Chrome</h4>
                <p className={styles.bulletText}>
                  차트의 AI · Expand · Edit · More 버튼은 기본 숨김, 카드에 호버할 때만 드러납니다.
                  Resting state에서 시각 소음을 0으로 줄이고, 주목할 때만 등장하는 구조.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Count-badge Filters</h4>
                <p className={styles.bulletText}>
                  <code>Portfolio +2</code> · <code>Asset +12</code>처럼 다중 선택 수가 칩 안에 즉시
                  표시됩니다. 펼치지 않아도 현재 필터 상태를 한눈에 파악.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Scoped AI</h4>
                <p className={styles.bulletText}>
                  모든 차트에 AI Insights 진입점이 연결되어 있습니다. 숫자를 보는 동안 해석이
                  자연스럽게 이어지도록 흐름을 끊지 않는 구조.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 03: Deal Pipeline ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Feature 03</p>
            <h2 className={styles.featureTitle}>Deal Pipeline</h2>
            <p className={styles.featureDescription}>
              투자 딜의 흐름을 한눈에 파악하는 Kanban 뷰입니다. Sourcing부터 Closing까지 6단계
              파이프라인에서 딜 상태를 추적하고, 카드 클릭으로 상세 정보를 화면 전환 없이
              확인합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/deal-pipeline.png"
              alt="Deal Pipeline — 6-Stage Kanban 보드와 Deal Detail Drawer"
              className={styles.featureHeroImage}
              label="Deal Pipeline — Kanban"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>6-Stage Pipeline</h4>
                <p className={styles.bulletText}>
                  Sourcing, Screening, LOI/Bidding, Due Diligence, IC Review, Closing — 딜의 전체
                  생애주기를 한 화면에서 조망합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>5-Layer Card</h4>
                <p className={styles.bulletText}>
                  소스, 우선순위, 가격, Cap Rate/IRR, 진행도와 마일스톤까지 — 한 카드에 5개 정보
                  계층을 과부하 없이 담았습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>3-Tab Detail Drawer</h4>
                <p className={styles.bulletText}>
                  카드 클릭 시 Overview, Financials, Activity 3탭 Drawer가 열립니다. 화면 전환 없이
                  딜의 모든 맥락을 확인합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 04: Cash Flow Config ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Feature 04</p>
            <h2 className={styles.featureTitle}>Cash Flow Config</h2>
            <p className={styles.featureDescription}>
              모든 지표 계산의 의미 체계를 정의하는 핵심 시스템입니다. &ldquo;One Dashboard = One
              CFC&rdquo; 원칙의 구현체로, Revenue, Expense, NCF 구조를 트리 편집기에서 직관적으로
              관리합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/cfc.png"
              alt="Cash Flow Config — 분할 화면 트리 편집기"
              className={styles.featureHeroImage}
              label="Cash Flow Config"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Split View</h4>
                <p className={styles.bulletText}>
                  좌측에서 Revenue/Expense 트리를 편집하고, 우측 패널에서 카테고리 필드를
                  탐색합니다. 편집과 참조를 동시에 수행합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Tree Structure Editor</h4>
                <p className={styles.bulletText}>
                  카테고리와 서브카테고리를 펼치고, 접고, 드래그로 순서를 바꿉니다. 금융 데이터의
                  계층 구조를 직관적으로 관리합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Lock vs Drag</h4>
                <p className={styles.bulletText}>
                  시스템이 보호하는 노드는 잠금 아이콘으로 명확히 표시합니다. 편집 가능한 영역과
                  보호된 영역을 시각적으로 구분합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 05: Data Management ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Feature 05</p>
            <h2 className={styles.featureTitle}>Data Management</h2>
            <p className={styles.featureDescription}>
              Executive가 보는 숫자의 전제를 관리하는 곳입니다. 데이터 소스의 연결 상태, 임포트
              활동, 품질 지표를 한 곳에서 모니터링하고, 문제를 사전에 감지합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/data-management.png"
              alt="Data Management — Trust Bar, 데이터 소스 카드, Data Quality"
              className={styles.featureHeroImage}
              label="Data Management"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Trust Bar</h4>
                <p className={styles.bulletText}>
                  데이터 완성도, 활성 소스 수, 마지막 임포트, 미해결 이슈를 한 줄로 요약합니다.
                  시스템 전체 상태를 즉시 파악합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Data Quality</h4>
                <p className={styles.bulletText}>
                  Completeness, Accuracy, Timeliness, Consistency 4개 지표를 선택하면 12개월 트렌드
                  차트가 즉시 동기화됩니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Source Cards</h4>
                <p className={styles.bulletText}>
                  Core Banking, PMR, Bloomberg 등 6개 소스의 연결 상태와 Health Bar를 카드 형태로
                  한눈에 모니터링합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 06: AI SQL ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Feature 06</p>
            <h2 className={styles.featureTitle}>AI SQL</h2>
            <p className={styles.featureDescription}>
              자연어로 질문하면 SQL을 생성하고, 결과를 차트로 시각화합니다. &ldquo;Insight with
              Proof&rdquo; 전략의 구현체로, AI가 답을 주되 항상 검증 가능한 경로를 함께 제시합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/ai-sql.png"
              alt="AI SQL — 채팅 UI, SQL 하이라이팅, 결과 차트"
              className={styles.featureHeroImage}
              label="AI SQL"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Chat-based Query</h4>
                <p className={styles.bulletText}>
                  자연어로 질문하면 AI가 SQL을 생성합니다. &ldquo;도쿄 평균 임대료는?&rdquo; 같은
                  질문이 즉시 쿼리로 변환됩니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>SQL Highlighting</h4>
                <p className={styles.bulletText}>
                  생성된 SQL을 직접 확인하고 수정할 수 있습니다. 블랙박스가 아닌, 투명한 AI — 키워드
                  하이라이팅으로 쿼리를 쉽게 읽습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>View Toggle</h4>
                <p className={styles.bulletText}>
                  결과를 Table, Bar, Line 뷰로 전환하며 탐색합니다. 같은 데이터를 다양한 시각으로
                  보고, 인사이트를 발견합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 07: AI Insights ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Feature 07</p>
            <h2 className={styles.featureTitle}>AI Insights</h2>
            <p className={styles.featureDescription}>
              대시보드는 수치를 보여주지만, 해석은 늘 사용자의 몫이었다. AI SQL이 <em>질문 → 답</em>
              의 흐름이라면, AI Insights는
              <em> 숫자 → 해석</em>의 흐름. 차트마다 AI Assistant 진입점을 호버로 숨겨두고, 클릭하면
              그 차트의 컨텍스트가 주입된 해설 패널이 열립니다. Copy로 검증·공유 경로를 보장하고,
              Suggested Prompts로 후속 질문의 마찰을 제거했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/ai-insights.png"
              alt="AI Insights 패널 — 차트 컨텍스트 헤더, 본문, Copy, Suggested Prompts"
              className={styles.featureHeroImage}
              label="AI Insights — Chart-contextual Panel"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Chart-contextual Header</h4>
                <p className={styles.bulletText}>
                  패널 서브타이틀에 차트 이름이 표시되어 &ldquo;어떤 차트의 해석인지&rdquo; 혼선이
                  없습니다. AI가 답하는 대상을 시각적으로 고정.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Suggested Prompts</h4>
                <p className={styles.bulletText}>
                  2~3개의 후속 질문이 Arrow chip으로 제안됩니다. 클릭 시 입력창이 자동 채워지고
                  포커스가 옮겨져, 대화 시작의 마찰이 0에 수렴합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Draggable Persistence</h4>
                <p className={styles.bulletText}>
                  헤더를 잡고 뷰포트 어디든 이동 가능. 위치는 세션 동안 유지되어, 여러 차트를 비교할
                  때도 시야를 가리지 않습니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 08: System Chrome ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Feature 08</p>
            <h2 className={styles.featureTitle}>System Chrome</h2>
            <p className={styles.featureDescription}>
              사이드바만으로는 충분하지 않다. 제품이 커지면 네비게이션의 무게가 늘고,
              알림·계정·테마처럼 제품 어디서나 필요한 유틸리티는 결국 상단 모서리로 모인다. Shell
              전체를 다시 설계해 입력 지점을 <strong>⌘K 커맨드 팔레트 하나</strong>로 수렴시키고,
              알림·사용자 메뉴·AI Assistant 진입을 일관된 톤으로 정돈했습니다.{" "}
              <em>Keyboard-first를 선언이 아닌 구현으로</em> 만드는 것이 목표였습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/invest-manager/system-chrome.png"
              alt="System Chrome — 탑바와 Command Palette가 함께 열린 상태"
              className={styles.featureHeroImage}
              label="System Chrome — Topbar + Command Palette"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Command Palette (⌘K)</h4>
                <p className={styles.bulletText}>
                  Jump to · Recent · Actions · Ask AI를 하나의 입력기로 통합했습니다. 사이드바를
                  확장하지 않아도 어디든 2초 안에 도달 가능한 구조.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Notifications Center</h4>
                <p className={styles.bulletText}>
                  Alert · Report · Mention · Info 네 가지 타입으로 신호를 분류. 읽지 않음 배지,
                  All·Unread 탭, 개별/일괄 읽음 처리로 신호 관리를 완결합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Keyboard-first Tooltips</h4>
                <p className={styles.bulletText}>
                  모든 아이콘 버튼에 단축키 힌트가 툴팁으로 노출됩니다.
                  <code>⌘K</code> · <code>?</code> · <code>⌘,</code> 같은 shortcut이 마우스
                  사용자에게도 discoverable.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Design Decisions ═══ */}
      <section className={styles.decisionSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Design Decisions</p>
            <h2 className={styles.sectionTitle}>핵심 의사결정과 그 근거</h2>
            <p className={styles.sectionDesc}>
              이 프로젝트에서 가장 중요했던 구조적 판단들입니다. 여러 대안 중 왜 이 방향을
              선택했는지를 정리했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.decisionGrid}>
              <div className={styles.decisionCard}>
                <span className={styles.decisionNum}>Decision 01</span>
                <h4 className={styles.decisionTitle}>
                  CFC를 대시보드 안에 넣지 않고 별도 탭으로 분리한 이유
                </h4>
                <div className={styles.decisionOptions}>
                  <div className={styles.decisionOption}>
                    <span className={styles.optionLabel}>Alternative</span>
                    <p className={styles.optionDesc}>
                      CFC를 대시보드 설정 패널 안에 임베드. 대시보드 생성 시 함께 설정하는 플로우.
                    </p>
                  </div>
                  <div className={styles.decisionChosen}>
                    <span className={styles.chosenLabel}>Chosen</span>
                    <p className={styles.optionDesc}>
                      CFC를 독립 탭으로 분리. 템플릿을 미리 정의하고, 대시보드에서는 선택만 하는
                      구조.
                    </p>
                  </div>
                </div>
                <p className={styles.decisionReason}>
                  CFC 템플릿은 여러 대시보드에서 재사용됩니다. 대시보드 안에 넣으면 매번 같은 설정을
                  반복해야 하고, 권한도 분리할 수 없습니다. Data Manager가 템플릿을 관리하고,
                  분석가는 선택만 하는 역할 분리가 핵심이었습니다.
                </p>
              </div>
              <div className={styles.decisionCard}>
                <span className={styles.decisionNum}>Decision 02</span>
                <h4 className={styles.decisionTitle}>
                  빈 대시보드 대신 Preset Chart를 기본으로 제공한 이유
                </h4>
                <div className={styles.decisionOptions}>
                  <div className={styles.decisionOption}>
                    <span className={styles.optionLabel}>Alternative</span>
                    <p className={styles.optionDesc}>
                      빈 캔버스 + 온보딩 가이드. 사용자가 처음부터 차트를 구성하는 자유도 높은 방식.
                    </p>
                  </div>
                  <div className={styles.decisionChosen}>
                    <span className={styles.chosenLabel}>Chosen</span>
                    <p className={styles.optionDesc}>
                      11개 Preset Chart + 커스텀 생성 병행. 목적별 출발점을 제공하고, 필요 시 확장.
                    </p>
                  </div>
                </div>
                <p className={styles.decisionReason}>
                  빈 화면은 &ldquo;무엇을 만들어야 할지 모르는&rdquo; 상태를 유발합니다. 투자
                  분석에서 자주 쓰이는 패턴을 미리 정의하면 비전문 사용자도 즉시 분석을 시작할 수
                  있고, 전문 사용자는 Preset을 기반으로 커스터마이징합니다.
                </p>
              </div>
              <div className={styles.decisionCard}>
                <span className={styles.decisionNum}>Decision 03</span>
                <h4 className={styles.decisionTitle}>
                  Trust Bar를 설정 페이지가 아닌 메인 화면 상단에 배치한 이유
                </h4>
                <div className={styles.decisionOptions}>
                  <div className={styles.decisionOption}>
                    <span className={styles.optionLabel}>Alternative</span>
                    <p className={styles.optionDesc}>
                      데이터 품질 정보를 Data Management 탭에만 표시. 분석 화면에서는 숨겨진 상태.
                    </p>
                  </div>
                  <div className={styles.decisionChosen}>
                    <span className={styles.chosenLabel}>Chosen</span>
                    <p className={styles.optionDesc}>
                      Home 상단에 Trust Bar 상시 노출. 숫자를 보기 전에 데이터 신뢰도를 먼저 확인.
                    </p>
                  </div>
                </div>
                <p className={styles.decisionReason}>
                  투자 의사결정에서 &ldquo;이 숫자를 믿어도 되는가?&rdquo;는 가장 먼저 답해야 할
                  질문입니다. 데이터 품질을 설정 페이지에 숨기면 아무도 확인하지 않습니다. 매번 볼
                  수 있도록 진입 화면 상단에 배치했습니다.
                </p>
              </div>

              <div className={styles.decisionCard}>
                <span className={styles.decisionNum}>Decision 04</span>
                <h4 className={styles.decisionTitle}>
                  AI 진입점을 Global Palette과 Chart-level Insights로 분리한 이유
                </h4>
                <div className={styles.decisionOptions}>
                  <div className={styles.decisionOption}>
                    <span className={styles.optionLabel}>Alternative</span>
                    <p className={styles.optionDesc}>
                      단일 글로벌 AI Assistant 패널에 모든 AI 요청을 통합. 하나의 채팅창이 범용
                      질문과 차트 해석 질문을 모두 처리.
                    </p>
                  </div>
                  <div className={styles.decisionChosen}>
                    <span className={styles.chosenLabel}>Chosen</span>
                    <p className={styles.optionDesc}>
                      Command Palette의 Ask AI(범용)와 차트별 AI Insights(컨텍스트)를 2-way로 분리.
                      진입점은 다르되 AI 원칙은 공유.
                    </p>
                  </div>
                </div>
                <p className={styles.decisionReason}>
                  범용 질문과 컨텍스트 질문은 사용 패턴이 다릅니다. &ldquo;딜 파이프라인으로
                  이동&rdquo; 같은 질문은 짧고 빠른 단발, &ldquo;이 Yield Spread가 왜
                  줄어들었나&rdquo; 같은 질문은 길고 탐색적·다회입니다. 같은 UI에 밀어넣으면 둘 다
                  나빠집니다. 진입점을 둘로 나누되 톤과 동작 원칙을 공유하게 설계했습니다.
                </p>
              </div>

              <div className={styles.decisionCard}>
                <span className={styles.decisionNum}>Decision 05</span>
                <h4 className={styles.decisionTitle}>
                  탑바 검색을 직접 입력이 아닌 Command Palette 트리거로 대체한 이유
                </h4>
                <div className={styles.decisionOptions}>
                  <div className={styles.decisionOption}>
                    <span className={styles.optionLabel}>Alternative</span>
                    <p className={styles.optionDesc}>
                      탑바 검색창에서 직접 입력 + 인라인 자동완성 드롭다운으로 페이지·딜·에셋을 한
                      번에 처리.
                    </p>
                  </div>
                  <div className={styles.decisionChosen}>
                    <span className={styles.chosenLabel}>Chosen</span>
                    <p className={styles.optionDesc}>
                      탑바 입력은 ⌘K 트리거 전용. 실제 검색·실행은 중앙 모달 Command Palette에서.
                    </p>
                  </div>
                </div>
                <p className={styles.decisionReason}>
                  Navigate · Recent · Action · Ask AI 네 가지 맥락을 인라인 드롭다운에 담으면 UX가
                  붐빕니다. 모달로 분리하면 그룹 경계를 명확히 하고, 키보드 네비게이션·대형
                  입력·섹션 구분을 동시에 확보할 수 있습니다. 향후 사이드바·탑바 확장 압력을
                  Palette가 흡수하는 구조라, 기능이 늘어도 Shell이 무거워지지 않습니다.
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
            <p className={styles.sectionLabel}>Outcome</p>
            <h2 className={styles.outcomeTitle}>
              BI 복잡도를 줄이면서도
              <br />
              Executive부터 Analyst까지 신뢰 가능한
              <br />
              분석 흐름을 만들었습니다
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.outcomeGrid}>
              {[
                {
                  value: "8",
                  label: "통합 기능 영역",
                  desc: "6개 탭 + AI Insights + System Chrome이 하나의 분석 체계로 연결",
                },
                {
                  value: "11",
                  label: "Preset Chart 정의",
                  desc: "AUM, NOI, Yield, Growth 등 핵심 투자 지표 커버",
                },
                {
                  value: "80+",
                  label: "화면 설계",
                  desc: "대시보드, 차트, 딜 파이프라인, AI, 관리 화면과 전역 Shell 포함",
                },
                {
                  value: "4",
                  label: "사용자 역할 대응",
                  desc: "Executive, Asset Manager, Analyst, Data Manager",
                },
              ].map((item, i) => (
                <Reveal key={item.label} delay={i * 80}>
                  <div className={styles.outcomeCard}>
                    <span className={styles.outcomeValue}>{item.value}</span>
                    <span className={styles.outcomeLabel}>{item.label}</span>
                    <span className={styles.outcomeDesc}>{item.desc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* Reflection */}
          <Reveal delay={200}>
            <div className={styles.reflectionBox}>
              <h3 className={styles.reflectionTitle}>Reflection</h3>
              <p className={styles.reflectionText}>
                이 프로젝트에서 가장 중요했던 판단은 &ldquo;BI 도구를 개선하는 것&rdquo;이 아니라
                &ldquo;결정 지원 인터페이스를 새로 만드는 것&rdquo;이었습니다. 기존 BI의 자유도를
                유지하면서도, 비전문 사용자가 목적 중심으로 분석을 시작할 수 있는 구조를 만드는 것 —
                Dashboard Builder와 AI SQL을 분리한 이유입니다.
              </p>
              <p className={styles.reflectionText}>
                Trust Bar는 단순한 UI 요소가 아니라, &ldquo;숫자를 보여주기 전에 그 숫자가 신뢰할 수
                있는지를 먼저 보여주는&rdquo; 제품 결정이었습니다. Scope first, One CFC 같은 원칙도
                마찬가지로, 조직 전체가 같은 숫자를 읽게 만드는 구조적 의사결정입니다.
              </p>
              <p className={styles.reflectionText}>
                6개 탭을 설계하면서 가장 많이 고민한 것은 각 탭이 독립적 기능이 아니라 연결된
                워크플로우여야 한다는 점이었습니다. Home에서 이상을 발견하면 Dashboard로 깊이
                들어가고, 원인을 찾으면 Data Management에서 전제를 확인하는 — 이 흐름이 자연스럽게
                이어져야 했습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
