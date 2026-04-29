"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

function DefectsTabs() {
  const [active, setActive] = useState<"list" | "detail">("list");

  return (
    <div className={styles.historyTabs}>
      <div className={styles.historyTabBar}>
        <button
          className={`${styles.historyTab} ${active === "list" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("list")}
          type="button"
        >
          Defect List
        </button>
        <button
          className={`${styles.historyTab} ${active === "detail" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("detail")}
          type="button"
        >
          Defect Detail
        </button>
      </div>
      <div className={styles.reportsScreen}>
        <div
          className={`${styles.historyPane} ${active === "list" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/defects-list.png"
            alt="Defect List view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`${styles.historyPane} ${active === "detail" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/defects-detail.png"
            alt="Defect Detail view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

function ReportsTabs() {
  const [active, setActive] = useState<"custom" | "turbine">("custom");

  return (
    <div className={styles.historyTabs}>
      <div className={styles.historyTabBar}>
        <button
          className={`${styles.historyTab} ${active === "custom" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("custom")}
          type="button"
        >
          Custom Reports
        </button>
        <button
          className={`${styles.historyTab} ${active === "turbine" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("turbine")}
          type="button"
        >
          Turbine Reports
        </button>
      </div>
      <div className={styles.reportsScreen}>
        <div
          className={`${styles.historyPane} ${active === "custom" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/reports-custom.png"
            alt="Custom Reports view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`${styles.historyPane} ${active === "turbine" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/reports-turbine.png"
            alt="Turbine Reports view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

function HistoryTabs() {
  const [active, setActive] = useState<"blade" | "defect">("blade");

  return (
    <div className={styles.historyTabs}>
      <div className={styles.historyTabBar}>
        <button
          className={`${styles.historyTab} ${active === "blade" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("blade")}
          type="button"
        >
          Blade History
        </button>
        <button
          className={`${styles.historyTab} ${active === "defect" ? styles.historyTabActive : ""}`}
          onClick={() => setActive("defect")}
          type="button"
        >
          Defect History
        </button>
      </div>
      <div className={styles.historyScreen}>
        <div
          className={`${styles.historyPane} ${active === "blade" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/history-blade.png"
            alt="Blade History view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`${styles.historyPane} ${active === "defect" ? styles.historyPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-wind/history-defect.png"
            alt="Defect History view"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ZoomableWindPage() {
  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.heroLabel}>UX/UI Design · 2022–2024</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>Zoomable Wind</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDescription}>
              드론으로 수집된 풍력 터빈 점검 데이터를 클라우드 기반으로 관리·분석하는 디지털 플랫폼.
              초고해상도 이미지 기반의 결함 식별부터 통계 분석, 리포트 생성, 이력 추적, 수리
              관리까지 — 점검 운영 전체를 하나의 시스템으로 통합합니다.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.heroScope}>
              {["Inspection", "Defect ID", "Statistics", "Reports", "History", "Management"].map(
                (item, i) => (
                  <span key={item} className={styles.heroScopeItem}>
                    {item}
                    {i < 5 && <span className={styles.heroScopeArrow}>→</span>}
                  </span>
                ),
              )}
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>UX/UI Designer</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>2022–2024 (2 years)</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Contribution</span>
                <span className={styles.metaValue}>
                  Project Planning, UI/UX Design, Maintenance
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team</span>
                <span className={styles.metaValue}>
                  UX/UI Designer, Frontend Dev, Backend Dev, DL Engineer
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={500}>
          <div className={styles.heroVisual}>
            <CaseImage
              src="/images/portfolio/zoomable-wind/hero.png"
              alt="Zoomable Wind product overview"
              className={styles.heroImage}
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Research Reference ═══ */}
      <div className={styles.researchRef}>
        <div className={styles.container}>
          <Reveal>
            <Link href="/portfolio/research-problem-framing" className={styles.researchRefLink}>
              <span className={styles.researchRefTag}>Built from Research</span>
              <p className={styles.researchRefText}>
                이 프로젝트는 <strong>Research & Problem Framing</strong>
                에서 정의된 운영 문제와 사용자 인사이트를 바탕으로 설계되었습니다.
              </p>
              <span className={styles.researchRefArrow}>선행 리서치 보기 →</span>
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.researchFindings}>
              <h3 className={styles.researchFindingsTitle}>리서치에서 도출된 핵심 인사이트</h3>
              <div className={styles.findingsGrid}>
                <div className={styles.findingItem}>
                  <span className={styles.findingNum}>01</span>
                  <h4 className={styles.findingTitle}>사진 중심 조회의 한계</h4>
                  <p className={styles.findingText}>
                    고객은 수백 장의 사진을 넘기며 결함을 찾는 기존 방식에 비효율을 느끼고
                    있었습니다. 결함만 빠르게 확인하고 싶다는 요구가 반복적으로 나왔습니다.
                  </p>
                </div>
                <div className={styles.findingItem}>
                  <span className={styles.findingNum}>02</span>
                  <h4 className={styles.findingTitle}>점검 후 워크플로우 단절</h4>
                  <p className={styles.findingText}>
                    데이터 조회 이후 수리 계획, 작업 할당, 진행 추적이 별도 시스템에서 이루어져 정보
                    전달 과정에서 누락과 지연이 발생했습니다.
                  </p>
                </div>
                <div className={styles.findingItem}>
                  <span className={styles.findingNum}>03</span>
                  <h4 className={styles.findingTitle}>이력 기반 의사결정 부재</h4>
                  <p className={styles.findingText}>
                    과거 점검 결과와 현재 상태를 비교할 수 있는 구조가 없어, 결함의 진행 정도를
                    파악하거나 유지보수 우선순위를 판단하기 어려웠습니다.
                  </p>
                </div>
              </div>
              <p className={styles.findingSummary}>
                이러한 발견을 바탕으로 Zoomable Wind는 단순한 사진 뷰어가 아닌, 결함 중심의
                분석·운영 플랫폼으로 설계되었습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ═══ Overview ═══ */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewLeft}>
                <p className={styles.sectionLabel}>Overview</p>
                <h2 className={styles.overviewTitle}>
                  초고해상도 사진 기반
                  <br />
                  풍력 터빈 결함 관리 플랫폼
                </h2>
              </div>
              <div className={styles.overviewRight}>
                <p className={styles.overviewText}>
                  Zoomable Wind는 Nearthlab의 디지털 솔루션 중 하나로, 자율 드론에 의해 수집된
                  데이터를 클라우드 기반 데이터베이스로 효과적으로 관리합니다. 사용자는 초고해상도
                  사진을 통해 손상의 심각성과 위치에 따라 결함을 식별하고, 검사 데이터를
                  디지털화하여 분석 보고서로 변환할 수 있습니다.
                </p>
                <p className={styles.overviewText}>
                  Blades, Defects, Statistics, Reports, History, Management의 6개 핵심 모듈로
                  구성되어 있으며, 점검 데이터의 수집부터 분석, 리포팅, 이력 관리, 수리 프로세스까지
                  전체 운영 워크플로우를 하나의 플랫폼에서 처리합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Process Flow (moved up) ═══ */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Product Structure</p>
            <h2 className={styles.processTitle}>점검 데이터 관리 전체 흐름</h2>
            <p className={styles.processIntro}>
              Zoomable Wind는 풍력 터빈 점검의 전 과정을 6개의 기능 모듈로 구조화합니다. 각 모듈은
              독립적으로 동작하면서도 데이터가 자연스럽게 흐르도록 설계되었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.processFlow}>
              {[
                {
                  num: "01",
                  title: "Blades",
                  desc: "블레이드 이미지 조회 및 결함 위치 식별",
                },
                {
                  num: "02",
                  title: "Defects",
                  desc: "결함 리스트 필터링 및 상세 정보 확인",
                },
                {
                  num: "03",
                  title: "Statistics",
                  desc: "심각도·유형별 통계 분석 및 데이터 비교",
                },
                {
                  num: "04",
                  title: "Reports",
                  desc: "터빈/커스텀 리포트 생성 및 다운로드",
                },
                {
                  num: "05",
                  title: "History",
                  desc: "이력 추적으로 결함 변화 파악 및 예측",
                },
                {
                  num: "06",
                  title: "Management",
                  desc: "프로젝트·태스크 기반 수리 과정 관리",
                },
              ].map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className={styles.processStep}>
                    <span className={styles.processNum}>{step.num}</span>
                    <h4 className={styles.processStepTitle}>{step.title}</h4>
                    <p className={styles.processStepDesc}>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 1: Blades ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 01</p>
            <h2 className={styles.featureTitle}>Blades</h2>
            <p className={styles.featureDescription}>
              각 검사된 블레이드의 대표 이미지를 제공하여 결함을 한눈에 검사할 수 있도록
              설계되었습니다. 시스템에 의해 자동으로 선택된 이미지를 포함하며, Blade Summary, Blade
              View, Gallery View의 세 가지 하위 모드로 구성되어 목적에 따라 블레이드를 다른 깊이로
              탐색할 수 있습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-wind/blades-main.png"
              alt="Blades — Blade Summary view"
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Blade Summary</h4>
                <p className={styles.bulletText}>
                  터빈별 결함 정보를 요약하는 진입점입니다. 블레이드 도면 위에 결함 위치가 마킹되어
                  있어 클릭 시 해당 결함 사진을 바로 확인할 수 있고, 결함 추가·수정 도구와 이미지
                  편집, 결함 목록 및 상태 확인 기능을 제공합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Blade View</h4>
                <p className={styles.bulletText}>
                  특정 블레이드의 전체 사진을 한 번에 조회하는 모드입니다. 검사 또는 터빈을 선택하고
                  블레이드 A/B/C를 전환하면서 결함 수와 심각도를 확인하고, 사진 회전·확대 및 인접
                  사진 조회 기능으로 세밀한 검토가 가능합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Gallery View</h4>
                <p className={styles.bulletText}>
                  특정 블레이드의 모든 사진을 시간 순서대로 나열합니다. 블레이드 면(앞면, 측면),
                  심각도별 필터링을 통해 필요한 사진만 빠르게 찾아볼 수 있으며, 사진 확대 보기로
                  상세 확인이 가능합니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/blades-sub1.png"
                alt="Blade View detail"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/blades-sub2.png"
                alt="Gallery View"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 2: Defects ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 02</p>
            <h2 className={styles.featureTitle}>Defects</h2>
            <div className={styles.featurePivot}>
              <span className={styles.pivotBadge}>Product Pivot</span>
              <p className={styles.pivotText}>사진 중심 브라우징 → 결함 중심 이슈 관리</p>
            </div>
            <p className={styles.featureDescription}>
              Defects 탭은 고객의 직접적인 요구에서 탄생했습니다. 기존에는 사진 중심의 정보 조회만
              제공했지만, 결함만을 모아서 보고 싶다는 고객의 니즈가 반복적으로 확인되었습니다. 이를
              반영해 결함만을 집중적으로 조회·관리할 수 있는 전용 탭을 기획했고, 경쟁 제품 대비 결함
              중심 정보 제공을 차별점으로 강화했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <DefectsTabs />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Defect List Table</h4>
                <p className={styles.bulletText}>
                  모든 결함을 테이블 형태로 조회합니다. 정렬 및 필터 기능을 통해 사용자가 원하는
                  기준으로 정보를 나열하고, 사용자 지정 조건에 따라 결함 리스트를 빠르게 탐색할 수
                  있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Defect Detail</h4>
                <p className={styles.bulletText}>
                  선택한 결함의 상세 정보를 제공합니다. 기존의 업무·생산 중심 기능에서 결함 조회
                  기능을 분리하여, 결함의 위치·심각도·유형을 한 화면에서 집중적으로 확인할 수
                  있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Status Management</h4>
                <p className={styles.bulletText}>
                  결함 상태와 변경 이력을 명확하게 추적합니다. 상태 변경 기록을 통해 결함이 언제
                  발견되고, 어떻게 처리되었는지 이력을 관리할 수 있어 팀 간 투명한 협업이
                  가능합니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/defects-sub1.png"
                alt="Defect detail view"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/defects-sub2.png"
                alt="Defect report view"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 3: Statistics ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 03</p>
            <h2 className={styles.featureTitle}>Statistics</h2>
            <p className={styles.featureDescription}>
              풍력 발전기 점검 결과를 종합하여 분석할 수 있도록 설계되었습니다. 사용자는 데이터
              필터링으로 원하는 조건을 설정하고, 심각도·유형·모델별 통계를 시각적으로 비교한 뒤, 그
              결과를 바탕으로 PDF 리포트를 생성하는 일련의 워크플로우를 하나의 탭에서 완료할 수
              있습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-wind/statistics-main.png"
              alt="Statistics dashboard"
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>데이터 필터링·분류</h4>
                <p className={styles.bulletText}>
                  심각도, 결함 유형, 블레이드 측면, 모델 등 다양한 기준으로 데이터를 필터링합니다.
                  결함 ID와 완료 여부를 설정하여 분석 범위를 정밀하게 조절할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>시각적 데이터 분석</h4>
                <p className={styles.bulletText}>
                  필터링된 통계 데이터를 그래프와 차트 형식으로 표시하여 결함 분포와 심각도 경향을
                  한눈에 파악할 수 있습니다. 데이터 기반 유지보수 의사결정을 지원합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>리포트 생성</h4>
                <p className={styles.bulletText}>
                  분석된 결함 통계를 바탕으로 PDF 리포트를 직접 생성합니다. 결함 ID 선택, 블레이드
                  측면·모델·결함 유형 등 세부 조건을 지정하여 맞춤형 보고서를 출력할 수 있습니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/statistics-sub1.png"
                alt="Statistics detail charts"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/statistics-sub2.png"
                alt="Statistics report generation"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 4: Reports ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 04</p>
            <h2 className={styles.featureTitle}>Reports</h2>
            <p className={styles.featureDescription}>
              풍력 발전기 점검 데이터를 종합하여 리포트를 생성하고 관리할 수 있도록 설계되었습니다.
              시스템이 자동으로 생성하는 Turbine Reports와 사용자가 직접 조건을 설정하여 만드는
              Custom Reports, 두 가지 리포트 체계를 제공합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ReportsTabs />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Turbine Reports</h4>
                <p className={styles.bulletText}>
                  검사 완료 시 시스템이 자동으로 생성하는 터빈별 리포트입니다. 심각도별 정렬,
                  내림차순/오름차순 전환이 가능하며, PDF로 다운로드하여 현장 보고나 고객 전달에 바로
                  활용할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Custom Reports</h4>
                <p className={styles.bulletText}>
                  사용자가 원하는 조건에 맞춰 직접 구성하는 리포트입니다. 검사 데이터 필터링을 통해
                  특정 기간, 특정 터빈, 특정 결함 유형에 집중한 맞춤형 보고서를 생성할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>데이터 시각화</h4>
                <p className={styles.bulletText}>
                  리포트 내에서 점검 데이터를 그래프와 차트 형식으로 시각화하여 제공합니다. 정량적
                  분석 결과를 직관적으로 전달하여 유지보수 계획 수립과 고객 커뮤니케이션을
                  지원합니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/reports-sub1.png"
                alt="Turbine Reports list"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/reports-sub2.png"
                alt="Custom Reports detail"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 5: History ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 05</p>
            <h2 className={styles.featureTitle}>History</h2>
            <p className={styles.featureDescription}>
              점검 기록을 추적하고 시점별 결과를 비교할 수 있도록 설계되었습니다. 사용자는 현재
              결함을 이전 기록과 나란히 비교하여 결함의 진행 정도를 파악하고, 패턴을 기반으로 향후
              결함 발생을 예측할 수 있습니다. 단순한 아카이브가 아닌, 유지보수 의사결정을 위한 예측
              도구로 기능합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <HistoryTabs />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Blade History</h4>
                <p className={styles.bulletText}>
                  블레이드의 면별 점검 기록을 연도별로 시각화합니다. 터빈 번호와 블레이드를 선택하면
                  결함 위치가 도면 위에 표시되고, 동일 결함 연결선을 통해 시간에 따른 결함의 변화를
                  직관적으로 추적할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Defect History</h4>
                <p className={styles.bulletText}>
                  결함의 상세 점검 기록을 필터링하여 확인합니다. 검사 ID, 터빈 번호, 블레이드,
                  블레이드 면, 결함 유형 및 심각도 필터를 통해 특정 결함의 전체 이력과 상세 정보를
                  조회할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>예측 기반 관리</h4>
                <p className={styles.bulletText}>
                  과거와 현재의 결함을 비교하여 문제의 진행 방향을 파악합니다. 결함 기록의 패턴
                  분석을 통해 향후 발생 가능성을 예측하고, 선제적인 유지보수 계획을 수립할 수
                  있습니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/history-sub1.png"
                alt="Defect History list"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/history-sub2.png"
                alt="Turbine History comparison"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 6: Management ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 06</p>
            <h2 className={styles.featureTitle}>Management</h2>
            <p className={styles.featureDescription}>
              점검 결과 확인에서 끝나지 않고, 수리 과정까지 연결하는 운영 관리 기능입니다.
              프로젝트와 태스크 기반의 작업 공간을 제공하여 검사 후 후속 조치를 체계적으로 관리하고,
              작업 진행 상황을 팀원들과 공유할 수 있습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.splitFeature}>
              <div className={styles.splitLeft}>
                <CaseImage
                  src="/images/portfolio/zoomable-wind/management-detail.png"
                  alt="Project Management — Kanban board"
                  className={styles.splitImage}
                />
              </div>
              <div className={styles.splitRight}>
                <div className={styles.splitDetail}>
                  <h4 className={styles.splitDetailTitle}>Project & Task 관리</h4>
                  <p className={styles.splitDetailText}>
                    여러 Task를 포함하는 프로젝트를 생성하고 Open/Closed 상태로 관리합니다. Review,
                    Create Report, Repair 세 가지 Task 유형과 To Do, Working, In Review, Done의
                    4단계 상태를 통해 전체 수리 프로세스를 추적합니다.
                  </p>
                  <ul className={styles.detailList}>
                    <li>Kanban 보드: Task의 현재 상태를 시각적으로 관리</li>
                    <li>Gantt 차트: 시간 축 기준으로 Project와 Task를 시각적 배치</li>
                    <li>List 뷰: Task를 리스트 형태로 빠르게 탐색</li>
                    <li>작업 할당: Project 및 Task에 담당자 지정</li>
                    <li>진척도 표시: Project와 Task의 진행 상황을 실시간 표시</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-wind/management-sub1.png"
                alt="Gantt chart view"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-wind/management-sub2.png"
                alt="Roadmap list view"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Design Decisions ═══ */}
      <section className={styles.designDecisions}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Design Decisions</p>
            <h2 className={styles.designDecisionsTitle}>제품 구조를 결정한 핵심 판단들</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.decisionGrid}>
              <div className={styles.decisionItem}>
                <h4 className={styles.decisionQuestion}>
                  Blades / Defects / History를 왜 분리했는가?
                </h4>
                <p className={styles.decisionAnswer}>
                  세 모듈은 같은 결함 데이터를 다루지만 사용 목적이 다릅니다. Blades는 위치 기반
                  탐색, Defects는 이슈 중심 관리, History는 시계열 비교에 최적화되어 있습니다.
                  하나의 화면에 통합하면 인지 부하가 커지고, 각 역할에 맞는 필터링·정렬 구조를
                  설계하기 어려워집니다.
                </p>
              </div>
              <div className={styles.decisionItem}>
                <h4 className={styles.decisionQuestion}>Statistics와 Reports를 왜 구분했는가?</h4>
                <p className={styles.decisionAnswer}>
                  Statistics는 데이터를 탐색하고 패턴을 발견하는 분석 도구이고, Reports는 분석
                  결과를 고객이나 팀에 전달하기 위한 출력물입니다. 분석 과정과 전달 과정을
                  분리함으로써 각각의 워크플로우에 집중할 수 있도록 했습니다.
                </p>
              </div>
              <div className={styles.decisionItem}>
                <h4 className={styles.decisionQuestion}>
                  결함 조회와 워크플로우 관리를 왜 함께 넣었는가?
                </h4>
                <p className={styles.decisionAnswer}>
                  현장에서는 결함 발견 후 수리 계획 수립까지의 정보 전달이 가장 취약한
                  구간이었습니다. Management 모듈을 통해 점검 데이터 확인에서 수리 작업 할당까지
                  하나의 플랫폼에서 완결되도록 하여 정보 누락과 지연을 방지했습니다.
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
                <span className={styles.outcomeValue}>400+</span>
                <span className={styles.outcomeLabel}>관리 대상 터빈</span>
                <p className={styles.outcomeDesc}>
                  글로벌 Wind Farm에 배포되어 수백 대의 터빈 점검 데이터를 관리하는 핵심 운영
                  플랫폼으로 자리잡음
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>6</span>
                <span className={styles.outcomeLabel}>핵심 기능 모듈</span>
                <p className={styles.outcomeDesc}>
                  Blades부터 Management까지 점검 전 과정을 커버하는 통합 시스템으로 확장
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>2yr</span>
                <span className={styles.outcomeLabel}>지속적 운영·개선</span>
                <p className={styles.outcomeDesc}>
                  2년간 현장 피드백과 고객 요구를 반영한 지속적 기능 개선과 안정적 운영
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>12+</span>
                <span className={styles.outcomeLabel}>글로벌 Wind Farm</span>
                <p className={styles.outcomeDesc}>
                  전 세계 12개 이상의 Wind Farm에서 활용되는 글로벌 점검 솔루션
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.reflectionBox}>
              <h3 className={styles.reflectionTitle}>Reflection</h3>
              <p className={styles.reflectionText}>
                Zoomable Wind는 고객의 실제 운영 방식을 깊이 이해하고, 제품 방향을 전환한
                프로젝트였습니다. 초기에는 드론이 수집한 사진을 조회하는 도구로 시작했지만, 고객
                피드백을 통해 결함 중심의 분석 플랫폼으로 제품의 핵심 가치를 재정의했습니다. 특히
                Defects 탭은 고객의 요구를 직접 반영한 결과물로, 사진 브라우징에서 이슈 관리로의
                전환이라는 의미 있는 제품 피봇이었습니다.
              </p>
              <p className={styles.reflectionText}>
                2년간의 운영을 통해 사용자 피드백을 지속적으로 반영하면서, 단순한 데이터 뷰어에서
                점검·분석·리포팅·이력 관리·수리 프로세스를 아우르는 통합 운영 플랫폼으로
                성장시켰습니다. 고객의 목소리가 제품 방향을 결정한 경험, 그리고 기능의 범위가 아닌
                운영 가치를 기준으로 제품을 설계한 과정이 가장 의미 있었습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
