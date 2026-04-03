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

/* ── Image with fallback placeholder ── */
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

function QualityTabs() {
  const [active, setActive] = useState<"grid" | "stitching">("grid");

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabBar}>
        <button
          className={`${styles.tab} ${active === "grid" ? styles.tabActive : ""}`}
          onClick={() => setActive("grid")}
          type="button"
        >
          Grid View
        </button>
        <button
          className={`${styles.tab} ${active === "stitching" ? styles.tabActive : ""}`}
          onClick={() => setActive("stitching")}
          type="button"
        >
          Stitching View
        </button>
      </div>
      <div className={styles.tabScreen}>
        <div
          className={`${styles.tabPane} ${active === "grid" ? styles.tabPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-worker/quality-grid.png"
            alt="Quality Check — Grid View"
            fill
            unoptimized
            sizes="(max-width: 828px) 100vw, 1080px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`${styles.tabPane} ${active === "stitching" ? styles.tabPaneActive : ""}`}
        >
          <Image
            src="/images/portfolio/zoomable-worker/quality-stitching.png"
            alt="Quality Check — Stitching View"
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

export default function ZoomableWorkerPage() {
  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.heroLabel}>UX/UI Design · 2022–2024</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>Zoomable Worker</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDescription}>
              AI와 드론 기술을 결합한 풍력 터빈 블레이드 검사 워크플로우
              플랫폼. 이미지 수집부터 품질 검증, 결함 마킹, 최종 판정,
              운영 대시보드, 비행일지 관리까지 — 현장 검사 운영 전체를
              하나의 시스템으로 통합합니다.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.heroScope}>
              {[
                "Upload",
                "Quality Check",
                "OSD Viewer",
                "Defect Marking",
                "Decision",
                "Dashboard",
                "Flight Log",
              ].map((item, i) => (
                <span key={item} className={styles.heroScopeItem}>
                  {item}
                  {i < 6 && (
                    <span className={styles.heroScopeArrow}>→</span>
                  )}
                </span>
              ))}
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
                  Planning, User Interview, UT, UI/UX Design, Maintenance
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team</span>
                <span className={styles.metaValue}>
                  UX/UI Designer, PM, Frontend·Backend Dev, DL Engineer
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={500}>
          <div className={styles.heroVisual}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/hero.png"
              alt="Zoomable Worker product overview"
              className={styles.heroImage}
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Research Reference ═══ */}
      <div className={styles.researchRef}>
        <div className={styles.container}>
          <Reveal>
            <Link
              href="/portfolio/research-problem-framing"
              className={styles.researchRefLink}
            >
              <span className={styles.researchRefTag}>Built from Research</span>
              <p className={styles.researchRefText}>
                이 프로젝트는{" "}
                <strong>Research & Problem Framing</strong>
                에서 정의된 운영 문제와 사용자 인사이트를 바탕으로
                설계되었습니다.
              </p>
              <span className={styles.researchRefArrow}>
                선행 리서치 보기 →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.researchFindings}>
              <h3 className={styles.researchFindingsTitle}>
                리서치에서 도출된 핵심 인사이트
              </h3>
              <div className={styles.findingsGrid}>
                <div className={styles.findingItem}>
                  <span className={styles.findingNum}>01</span>
                  <h4 className={styles.findingTitle}>
                    분절된 검사 워크플로우
                  </h4>
                  <p className={styles.findingText}>
                    이미지 업로드, 품질 확인, 결함 마킹, 최종 판정이 각각 다른
                    도구나 수작업으로 처리되어 단계 간 데이터 누락과 작업
                    지연이 빈번하게 발생했습니다.
                  </p>
                </div>
                <div className={styles.findingItem}>
                  <span className={styles.findingNum}>02</span>
                  <h4 className={styles.findingTitle}>
                    이미지 품질 관리의 부재
                  </h4>
                  <p className={styles.findingText}>
                    드론이 수집한 수백 장의 이미지 중 저품질 데이터가 그대로
                    분석 단계로 넘어가면서, 결함 탐지 정확도가 떨어지고
                    재촬영 비용이 반복적으로 발생했습니다.
                  </p>
                </div>
                <div className={styles.findingItem}>
                  <span className={styles.findingNum}>03</span>
                  <h4 className={styles.findingTitle}>
                    역할 간 커뮤니케이션 단절
                  </h4>
                  <p className={styles.findingText}>
                    파일럿, 검사자, 관리자가 서로 다른 시스템에서 작업하면서
                    상태 공유가 되지 않았고, 비행일지와 검사 기록 간의 연결이
                    끊겨 운영 투명성이 부족했습니다.
                  </p>
                </div>
              </div>
              <p className={styles.findingSummary}>
                이러한 발견을 바탕으로 Zoomable Worker는 단순한 AI 결함 탐지
                도구가 아닌, 검사 운영 전체를 하나로 연결하는 워크플로우
                플랫폼으로 설계되었습니다.
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
                  이미지 수집부터 운영 관리까지
                  <br />
                  검사 전 과정을 연결하는 플랫폼
                </h2>
              </div>
              <div className={styles.overviewRight}>
                <p className={styles.overviewText}>
                  Zoomable Worker는 AI와 드론 기술을 결합하여 풍력 터빈의
                  블레이드를 자동으로 검사하고 결함을 식별하는 워크플로우
                  플랫폼입니다. 드론을 통해 고해상도 이미지를 수집하고, AI
                  분석으로 결함을 빠르고 정확하게 탐지하며, 사람의 검증을
                  거쳐 최종 판정까지 도달하는 전체 프로세스를 하나의 시스템
                  안에서 처리합니다.
                </p>
                <p className={styles.overviewText}>
                  업로드, 품질 검증, OSD 뷰어, 결함 마킹, 최종 판정,
                  대시보드·알림, 비행일지의 7개 핵심 모듈로 구성되어 있으며,
                  파일럿·검사자·관리자 등 다양한 역할의 사용자가 하나의
                  플랫폼 안에서 자연스럽게 협업할 수 있도록 설계되었습니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Process Flow ═══ */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Product Structure</p>
            <h2 className={styles.processTitle}>
              검사 워크플로우 전체 흐름
            </h2>
            <p className={styles.processIntro}>
              Zoomable Worker는 풍력 터빈 검사의 전 과정을 7개의 기능
              모듈로 구조화합니다. 각 모듈은 독립적으로 동작하면서도 데이터가
              자연스럽게 다음 단계로 흐르도록 설계되었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.processFlow}>
              {[
                {
                  num: "01",
                  title: "Image Upload",
                  desc: "드론 촬영 이미지를 벌크 업로드하고 메타데이터를 자동 연계하여 검사 데이터의 진입점 역할",
                },
                {
                  num: "02",
                  title: "Quality Check",
                  desc: "업로드된 이미지의 품질을 검증하고 저품질 데이터를 필터링하여 분석 정확도를 보장하는 품질 게이트",
                },
                {
                  num: "03",
                  title: "OSD Viewer",
                  desc: "초고해상도 이미지 위에서 결함을 식별하고 AI 보조 탐지 결과를 확인하는 검사 워크벤치",
                },
                {
                  num: "04",
                  title: "Defect Marking",
                  desc: "시각적 발견을 구조화된 결함 데이터로 변환하고 유형·심각도별로 분류하는 마킹 단계",
                },
                {
                  num: "05",
                  title: "Defect Decision",
                  desc: "마킹된 결함을 최종 검토하고 수리 필요 여부를 결정하는 판정 게이트",
                },
                {
                  num: "06",
                  title: "Dashboard",
                  desc: "여러 Farm의 검사 진행 상태를 실시간 모니터링하고 알림으로 분산 팀을 조율하는 운영 허브",
                },
                {
                  num: "07",
                  title: "Flight Log",
                  desc: "파일럿 비행일지를 수집·가공하여 인보이스와 고객 보고를 지원하는 운영 기록 레이어",
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

      {/* ═══ Feature 1: Image Upload ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 01</p>
            <h2 className={styles.featureTitle}>Image Upload</h2>
            <p className={styles.featureDescription}>
              검사 워크플로우의 진입점입니다. 드론이 수집한 수백 장의 터빈
              블레이드 이미지를 한 번에 업로드하고, 터빈 ID·블레이드 위치·
              타임스탬프 등 메타데이터를 자동으로 연계합니다. 단순한 파일
              업로더가 아니라, 이후 품질 검증과 결함 분석의 데이터 정확도를
              결정하는 첫 번째 품질 게이트 역할을 합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/upload-main.png"
              alt="Image Upload main interface"
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>벌크 업로드 & 메타데이터 연계</h4>
                <p className={styles.bulletText}>
                  여러 이미지를 동시에 업로드하고, 터빈 ID·블레이드 위치·
                  타임스탬프 등 메타데이터를 자동으로 연계합니다. 수작업
                  입력을 최소화하여 데이터 정확도를 높이고 후속 분석의
                  오류를 방지합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>품질 사전 검사 & 필터링</h4>
                <p className={styles.bulletText}>
                  업로드 시 초기 이미지 품질을 자동 평가하여 저품질
                  이미지를 분류합니다. 분석 단계에 도달하기 전에 데이터
                  품질을 확보하여 재작업 비용을 줄입니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>진행 추적 & 오류 처리</h4>
                <p className={styles.bulletText}>
                  실시간 업로드 진행 상황과 완료 상태를 모니터링합니다.
                  업로드 오류나 문제에 대한 알림과 로그를 제공하여 데이터
                  무결성과 저장소 보안을 유지합니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-worker/upload-sub1.png"
                alt="Image Upload detail view"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/upload-sub2.png"
                alt="Image Upload metadata view"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 2: Image Quality Check ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 02</p>
            <h2 className={styles.featureTitle}>Image Quality Check</h2>
            <p className={styles.featureDescription}>
              결함 판정의 정확도는 입력 이미지의 품질에 달려 있습니다. 이
              단계는 업로드된 이미지가 결함 식별에 충분한 품질을 갖추고
              있는지 검증하는 품질 게이트입니다. Grid View와 Stitching View를
              통해 누락된 촬영 데이터를 확인하고, 블러·밝기 등 이미지 상태를
              평가하여 기준 미달 시 재촬영을 요청합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <QualityTabs />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>이미지 검수 & 분류</h4>
                <p className={styles.bulletText}>
                  업로드된 이미지를 검사하고 품질에 따라 분류합니다.
                  Stitching View와 Grid View를 통해 누락된 이미지 데이터가
                  없는지 확인하고, 전체 블레이드 커버리지를 검증합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>이미지 보정 & 재촬영 요청</h4>
                <p className={styles.bulletText}>
                  블러, 밝기, 어두움 등을 조정하여 최적의 이미지 품질을
                  유지합니다. 품질 기준에 미치지 못하는 경우 재촬영을
                  요청하여 분석 단계의 정확도를 사전에 확보합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>상태 관리 & 이력 추적</h4>
                <p className={styles.bulletText}>
                  각 이미지의 상태를 Pass, Fail, Review로 변경하여 품질
                  진행 현황을 명확하게 관리합니다. 모든 변경 사항과 코멘트를
                  기록하여 팀 간 작업 추적이 가능합니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-worker/quality-detail1.png"
                alt="Quality Check detail panel"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/quality-detail2.png"
                alt="Quality Check review panel"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 3: OSD Viewer ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 03</p>
            <h2 className={styles.featureTitle}>OSD Viewer</h2>
            <p className={styles.featureDescription}>
              검사자가 가장 오래 머무는 핵심 작업 공간입니다. 초고해상도
              이미지 위에서 B-Box로 결함을 강조 표시하고, AI가 자동 감지한
              결함과 작업자가 직접 식별한 결함을 한 화면에서 통합 관리합니다.
              이전 검사와의 비교 뷰를 통해 결함 변화를 추적하고, 이미지
              보정 도구로 식별 정확도를 높이는 검사 워크벤치입니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.osdLayout}>
              <div className={styles.osdLeftStack}>
                <CaseImage
                  src="/images/portfolio/zoomable-worker/osd-viewer-left1.png"
                  alt="OSD Viewer — General view"
                  className={styles.osdStackImage}
                />
                <CaseImage
                  src="/images/portfolio/zoomable-worker/osd-viewer-left2.png"
                  alt="OSD Viewer — Comparison view"
                  className={styles.osdStackImage}
                />
              </div>
              <CaseImage
                src="/images/portfolio/zoomable-worker/osd-viewer-right.png"
                alt="OSD Viewer — Detail panels"
                className={styles.osdRight}
              />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>결함 식별 & 다중 사용자 작업</h4>
                <p className={styles.bulletText}>
                  B-Box로 결함을 강조하고, 정방형·비정방형 바운딩 박스를
                  선택하여 결함 형태에 맞게 표시합니다. 여러 사용자가
                  동시에 작업할 수 있으며, Show/Hide 기능으로 시각적
                  혼란을 최소화합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>비교 뷰 & 이미지 보정</h4>
                <p className={styles.bulletText}>
                  현재 검사와 이전 검사를 나란히 비교하여 결함의 변화를
                  추적합니다. 밝기, 노출, 대비, 화이트 밸런스 등 이미지
                  보정 컨트롤로 결함 식별 정확도를 높입니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>AI 보조 탐지 & 메타데이터</h4>
                <p className={styles.bulletText}>
                  AI 머신 러닝으로 결함을 자동 감지하고, 터빈 모델·블레이드
                  정보·사진 메타데이터와 결함 심각도·유형·액션 아이템을
                  한 화면에서 통합 관리합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 4: Defect Marking ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 04</p>
            <h2 className={styles.featureTitle}>Defect Marking</h2>
            <p className={styles.featureDescription}>
              시각적 발견을 구조화된 운영 데이터로 변환하는 단계입니다.
              작업자는 이미지 위에 결함을 직접 마크업하고, 다양한
              도구(펜, 하이라이트, 도형)를 사용하여 결함의 유형과 심각도에
              따라 체계적으로 분류합니다. 여기서 생성된 구조화 데이터가
              최종 판정과 보고서 생성의 기반이 됩니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/defect-marking.png"
              alt="Defect Marking interface"
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>결함 마킹 & 분류</h4>
                <p className={styles.bulletText}>
                  이미지나 작업 공간에서 결함을 직접 마크업합니다. 다양한
                  도구를 사용하여 결함의 유형과 심각도에 따라 단계별로
                  표시하고, 결함 정보(유형, 위치, 심각도)를 체계적으로
                  기록·저장합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>협업 & 실시간 피드백</h4>
                <p className={styles.bulletText}>
                  여러 사용자가 동일한 작업 공간에서 결함을 함께 검토하고
                  수정할 수 있습니다. 실시간 코멘트와 피드백 기능으로 팀
                  간 의사소통을 지원하며, 결함 발생 빈도와 패턴을 분석하여
                  품질 개선에 활용합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>보고서 연계</h4>
                <p className={styles.bulletText}>
                  자동으로 결함 보고서를 생성하여 관리자가 전체 품질 상태를
                  한눈에 파악할 수 있습니다. PDF, Excel 등 다양한 형식으로
                  내보내어 외부 공유 및 문서화가 가능합니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-worker/defect-marking-sub1.png"
                alt="Defect Marking detail 1"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/defect-marking-sub2.png"
                alt="Defect Marking detail 2"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 5: Defect Decision ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 05</p>
            <h2 className={styles.featureTitle}>Defect Decision</h2>
            <p className={styles.featureDescription}>
              마킹된 결함이 실제 수리 조치로 이어지기 전의 최종 판정
              게이트입니다. 사용자는 블레이드 종류(A, B, C)와 결함
              위치(LE, TE, SS, PS)로 필터링하고, 각 결함의 심각도를
              평가하여 Pass, Good, Bad 상태를 지정합니다. 모든 판정
              이력이 기록되어 작업의 투명성을 유지합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/defect-decision.png"
              alt="Defect Decision main view"
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>결함 목록 & 필터링</h4>
                <p className={styles.bulletText}>
                  선택된 블레이드의 모든 결함 사진을 조회합니다.
                  블레이드 종류와 결함 위치에 따라 필터링하고,
                  심각도를 기준으로 분류하여 수리가 시급한 결함부터
                  집중적으로 검토할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>최종 판정 & 편집</h4>
                <p className={styles.bulletText}>
                  각 결함의 상태를 Pass, Good, Bad로 최종 지정합니다.
                  결함 사진을 확대하여 상세 검토하고, 필요한 경우
                  마킹을 수정할 수 있는 편집 도구를 제공하여 정확한
                  판정을 지원합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>판정 이력 추적</h4>
                <p className={styles.bulletText}>
                  결함 결정 및 수정 이력을 기록하여 작업의 투명성을
                  유지합니다. 최종 확정 전 빈 결함 항목 수를 표시하고
                  확인 프로세스를 통해 판정 누락을 방지합니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-worker/defect-decision-sub1.png"
                alt="Defect Decision detail 1"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/defect-decision-sub2.png"
                alt="Defect Decision detail 2"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 6: Dashboard & Notification ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 06</p>
            <h2 className={styles.featureTitle}>Dashboard & Notification</h2>
            <p className={styles.featureDescription}>
              분산된 팀이 여러 Wind Farm의 검사 작업을 실시간으로 조율하는
              운영 허브입니다. 각 Farm의 DIU(Drone Inspection Unit) 작업
              상태를 한 화면에서 조회하고 변경할 수 있으며, 통합 알림
              시스템으로 시간과 공간적 이격 문제를 해결합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/dashboard-main.png"
              alt="Dashboard main view"
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>실시간 작업 상태 관리</h4>
                <p className={styles.bulletText}>
                  여러 Farm의 DIU 작업 상태를 실시간으로 조회하고
                  변경합니다. 작업 상태 표시, 상태 변경 버튼, 작업 할당
                  기능을 통해 팀 간 업무를 효율적으로 조율합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>통합 알림 & Watch</h4>
                <p className={styles.bulletText}>
                  작업 상태 변경 시 이메일 및 인앱 알림을 제공합니다.
                  알림 on/off 설정과 Watch 기능으로 관심 있는 작업의
                  변경 사항을 놓치지 않고 추적할 수 있습니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>사용자 맞춤 설정</h4>
                <p className={styles.bulletText}>
                  My Account, Notification 설정, General Settings를 통해
                  계정별 알림 및 작업 관리를 개인화합니다. 각 사용자의
                  역할과 책임에 맞는 작업 환경을 구성합니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-worker/dashboard-sub1.png"
                alt="Dashboard settings view"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/dashboard-sub2.png"
                alt="Dashboard watchlist view"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 7: Flight Log ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 07</p>
            <h2 className={styles.featureTitle}>Flight Log</h2>
            <p className={styles.featureDescription}>
              단순한 기록 유틸리티가 아닌, 검사 운영의 문서화·정산 레이어
              입니다. 파일럿의 비행일지를 수집하고 가공하여, 산재된 데이터를
              일원화하고 자동화된 후가공을 지원합니다. 정확한 인보이스 작성과
              전문적인 고객 대응을 가능하게 하며, 파일럿과 운영팀 모두의
              작업 흐름을 하나의 시스템 안에서 개선합니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/zoomable-worker/flightlog-main.png"
              alt="Flight Log main view"
              className={styles.featureHeroImage43}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>데이터 일원화 & 상태 관리</h4>
                <p className={styles.bulletText}>
                  작성 날짜, 업로더 정보, 작업 유형, 시작·종료 시간,
                  서명, 저장 시각 등 모든 비행 데이터를 한 곳에서
                  관리합니다. WEB/APP 업로드 구분과 상태 체크 기능으로
                  데이터 정합성을 유지합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>메타데이터 & 업무 흐름</h4>
                <p className={styles.bulletText}>
                  메타데이터 업로드·수정·삭제를 지원하고, Work Type 설명
                  페이지를 통해 TPH 값을 정확하게 정의합니다. 파일럿과
                  운영팀의 업무 흐름을 자동화된 후가공으로 개선합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>인보이스 & 고객 대응</h4>
                <p className={styles.bulletText}>
                  일자별 Excel 및 PDF로 비행일지를 다운로드하여 인보이스의
                  정확도를 높입니다. 고객사의 요청에 전문적으로 대응할 수
                  있는 문서화 체계를 갖춥니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/zoomable-worker/flightlog-detail1.png"
                alt="Flight Log detail view"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/zoomable-worker/flightlog-detail2.png"
                alt="Flight Log history view"
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
            <h2 className={styles.designDecisionsTitle}>
              제품 구조를 결정한 핵심 판단들
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.decisionGrid}>
              <div className={styles.decisionItem}>
                <h4 className={styles.decisionQuestion}>
                  Upload과 Quality Check를 왜 분리했는가?
                </h4>
                <p className={styles.decisionAnswer}>
                  업로드는 데이터 수집, 품질 검증은 데이터 검증이라는 별개의
                  작업입니다. 현장에서 드론 운영팀이 업로드를 담당하고 검사팀이
                  품질을 확인하는 경우가 많았기 때문에, 역할별 작업 흐름을
                  존중하면서도 품질 게이트를 명확히 하기 위해 두 단계를
                  분리했습니다.
                </p>
              </div>
              <div className={styles.decisionItem}>
                <h4 className={styles.decisionQuestion}>
                  OSD Viewer와 Defect Marking이 왜 별개의 단계인가?
                </h4>
                <p className={styles.decisionAnswer}>
                  OSD Viewer는 고해상도 이미지 위에서 결함을 발견하고 AI
                  탐지 결과를 확인하는 탐색 도구이고, Defect Marking은 발견된
                  결함을 구조화된 데이터로 변환하는 기록 도구입니다. 탐색과
                  기록을 분리하면 각 단계에 집중할 수 있고, 특히 Marking의
                  데이터 정합성이 후속 판정과 보고서의 신뢰도에 직결되기 때문에
                  독립적인 품질 관리가 필요했습니다.
                </p>
              </div>
              <div className={styles.decisionItem}>
                <h4 className={styles.decisionQuestion}>
                  Defect Decision이 별도 단계로 필요한 이유는?
                </h4>
                <p className={styles.decisionAnswer}>
                  마킹 단계에서 기록된 결함 데이터가 곧바로 수리 지시로
                  연결되면, 오탐이나 과잉 판정이 현장 비용으로 직결됩니다.
                  최종 판정을 별도 단계로 분리하여 심각도 재평가, 블레이드·위치
                  기준 필터링, 판정 이력 추적이 가능하게 함으로써 잘못된
                  수리 결정을 방지하는 안전장치 역할을 합니다.
                </p>
              </div>
              <div className={styles.decisionItem}>
                <h4 className={styles.decisionQuestion}>
                  Flight Log가 같은 제품 안에 있어야 하는 이유는?
                </h4>
                <p className={styles.decisionAnswer}>
                  비행일지는 검사 이미지의 출처와 맥락을 증명하는 운영
                  기록입니다. 검사 데이터와 비행 기록이 별도 시스템에 있으면
                  인보이스 정산, 고객 보고, 작업 이력 조회 시 수작업 대조가
                  필요합니다. 하나의 플랫폼에 통합함으로써 데이터 연결성을
                  확보하고, 파일럿·운영팀·관리자 간의 정보 전달 비용을
                  줄였습니다.
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
                <span className={styles.outcomeValue}>60%</span>
                <span className={styles.outcomeLabel}>검사 시간 절감</span>
                <p className={styles.outcomeDesc}>
                  수작업 기반 검사 대비 전체 워크플로우 소요 시간을 60%
                  단축. 업로드부터 판정까지 단일 플랫폼 내에서 처리하여
                  단계 간 전환 비용을 제거
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>95%</span>
                <span className={styles.outcomeLabel}>결함 탐지 정확도</span>
                <p className={styles.outcomeDesc}>
                  AI 자동 탐지와 사람의 검증을 결합한 하이브리드 워크플로우로
                  95% 결함 탐지 정확도 달성. 품질 게이트가 입력 데이터
                  품질을 보장
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>7</span>
                <span className={styles.outcomeLabel}>핵심 기능 모듈</span>
                <p className={styles.outcomeDesc}>
                  Upload부터 Flight Log까지 검사 운영 전 과정을 커버하는
                  7개 모듈의 통합 워크플로우 시스템으로 확장
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeValue}>2yr</span>
                <span className={styles.outcomeLabel}>지속적 운영·개선</span>
                <p className={styles.outcomeDesc}>
                  2년간 현장 파일럿·검사자·관리자의 피드백을 반영한
                  지속적 기능 개선과 안정적 운영
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.reflectionBox}>
              <h3 className={styles.reflectionTitle}>Reflection</h3>
              <p className={styles.reflectionText}>
                Zoomable Worker는 복잡한 산업 도메인에서 다양한 역할의
                사용자가 하나의 플랫폼 안에서 자연스럽게 협업할 수 있는
                워크플로우를 설계하는 프로젝트였습니다. 파일럿은 비행일지를,
                검사자는 결함 마킹과 판정을, 관리자는 대시보드에서 전체
                진행 상황을 조율합니다. 이 역할 간의 데이터 흐름과 작업
                핸드오프를 자연스럽게 연결하는 것이 설계의 핵심 과제였습니다.
              </p>
              <p className={styles.reflectionText}>
                초기에는 AI 결함 탐지 도구로 시작했지만, 현장 운영의 실제
                문제를 이해하면서 제품의 범위가 확장되었습니다. 이미지 품질이
                분석 정확도를 좌우한다는 것, 마킹과 판정은 분리되어야
                한다는 것, 비행일지와 검사 기록의 연결이 인보이스 정확도에
                직결된다는 것 — 이 모든 것은 현장 피드백에서 비롯된
                발견이었습니다.
              </p>
              <p className={styles.reflectionText}>
                2년간의 운영을 통해 단순한 도구에서 검사 프로세스 전체를
                혁신하는 통합 시스템으로 성장시켰습니다. 이 프로젝트를 통해
                운영 UX에서는 기능의 편리함보다 워크플로우의 정합성이
                중요하다는 것, 그리고 AI 보조 시스템에서 사람의 검증
                단계를 어떻게 설계하느냐가 제품의 신뢰도를 결정한다는 것을
                배웠습니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Quote ═══ */}
      <section className={styles.quoteSection}>
        <div className={styles.container}>
          <Reveal>
            <blockquote className={styles.quote}>
              &ldquo;Good design is obvious. Great design is transparent.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
