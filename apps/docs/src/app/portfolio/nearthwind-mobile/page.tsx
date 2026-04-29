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

export default function NearthWindMobilePage() {
  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.heroLabel}>UX/UI Design · 2022–2024</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>NearthWind Mobile</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDescription}>
              풍력 발전 현장에서 드론 자동 비행과 블레이드 4면 촬영을 제어하는 모바일 운영 시스템.
              검사 설정부터 촬영, 검토, 데이터 전송까지 — 현장의 모든 검사 워크플로우가 이 앱에서
              시작됩니다.
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
                <span className={styles.metaValue}>2022–2024</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Contribution</span>
                <span className={styles.metaValue}>Planning, Design, Maintenance</span>
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
              src="/images/portfolio/nearthwind-mobile/hero.png"
              alt="NearthWind Mobile product overview"
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
                  AI 자동 비행 드론으로
                  <br />
                  터빈 블레이드 4면 정밀 점검
                </h2>
              </div>
              <div className={styles.overviewRight}>
                <p className={styles.overviewText}>
                  NearthWind Mobile은 풍력 터빈 블레이드 검사를 위한 현장 운영 시스템입니다.
                  발전기를 정지한 뒤, 최상단 블레이드의 4면을 드론이 자동으로 비행하며 촬영합니다.
                  특수 드론이 아닌 일반 상용 드론으로 운영할 수 있습니다.
                </p>
                <p className={styles.overviewText}>
                  이 앱은 검사의 시작점입니다. 촬영 조건을 설정하고, AI가 자동 비행을 수행하며, 촬영
                  결과를 현장에서 바로 검토합니다. 검증된 데이터는 Zoomable Worker로 전송되어
                  데스크톱 환경에서 정밀 분석으로 이어집니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Field Constraints / Design Challenge ═══ */}
      <section className={styles.challengeSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Design Challenge</p>
            <h2 className={styles.overviewTitle}>
              현장에서 쓰이는 제품은
              <br />
              다른 종류의 문제를 풀어야 합니다
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.challengeGrid}>
              <div className={styles.challengeCard}>
                <h4 className={styles.challengeCardTitle}>극한 환경에서의 조작</h4>
                <p className={styles.challengeCardText}>
                  강풍, 직사광선, 소음 속에서 사용됩니다. 장갑을 끼고 조작하는 경우도 많습니다. 터치
                  영역은 넉넉해야 하고, 핵심 정보는 밝은 햇빛 아래에서도 즉시 읽혀야 합니다.
                </p>
              </div>
              <div className={styles.challengeCard}>
                <h4 className={styles.challengeCardTitle}>조종과 설정의 동시성</h4>
                <p className={styles.challengeCardText}>
                  드론 조종과 촬영 설정이 동시에 이루어집니다. 비행 중에도 고도, 각도, 속도를
                  모니터링하면서 촬영 파라미터를 조정할 수 있어야 합니다. 모드 전환의 인지 비용을
                  최소화해야 합니다.
                </p>
              </div>
              <div className={styles.challengeCard}>
                <h4 className={styles.challengeCardTitle}>설정 실수의 비용</h4>
                <p className={styles.challengeCardText}>
                  블레이드 순서, ISO, 셔터 스피드 등의 설정을 잘못 입력하면 전체 촬영을 다시 해야
                  합니다. 발전기 정지 시간이 제한적이기 때문에 설정 오류는 곧 현장 비용입니다.
                </p>
              </div>
              <div className={styles.challengeCard}>
                <h4 className={styles.challengeCardTitle}>후속 시스템과의 연결</h4>
                <p className={styles.challengeCardText}>
                  모바일에서 촬영한 데이터는 Zoomable Worker에서 분석되고, Zoomable Wind에서
                  관리됩니다. 메타데이터 구조와 handoff 방식이 후속 분석의 품질을 결정합니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 1: Flight & Inspection Settings ═══ */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 01</p>
            <h2 className={styles.featureTitle}>Flight & Inspection Settings</h2>
            <p className={styles.featureDescription}>
              블레이드 선택, 발전기 정보, 조이스틱 모드, 카메라 파라미터를 하나의 설정 흐름 안에서
              완료합니다. 검사 시작 전에 필요한 모든 설정을 한 곳에서 처리하여, 현장에서 화면을
              오가는 시간과 설정 누락을 줄였습니다.
            </p>
          </Reveal>
          <Reveal delay={50}>
            <p className={styles.featureContext}>
              촬영 조건이 잘못 설정되면 전체 검사를 반복해야 합니다. 설정 항목을 단계적으로
              배치하고, 필수 값이 비어있으면 다음으로 넘어가지 못하는 구조로 설계하여 실수 가능성을
              줄였습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/nearthwind-mobile/settings-main.png"
              alt="Inspection Setting form"
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>블레이드 선택</h4>
                <p className={styles.bulletText}>
                  최상단 블레이드의 4면을 검사합니다. 블레이드 순서를 선택하고 Wind Farm, Wind
                  Turbine, Blade Length 등 발전기 정보를 순차적으로 입력합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>리모트 컨트롤러</h4>
                <p className={styles.bulletText}>
                  Mode 1/Mode 2 전환, Left/Right Stick 방향 매핑을 지원합니다. 파일럿의 조종 습관에
                  맞춰 커스터마이징하여 조작 실수를 줄입니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>촬영 설정</h4>
                <p className={styles.bulletText}>
                  ISO, Shutter Speed, Exposure를 현장 환경에 맞게 조정합니다. Onshore/Offshore
                  프리셋으로 반복 설정의 부담을 줄였습니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/nearthwind-mobile/settings-blade.png"
                alt="Blade selection and flight view"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/nearthwind-mobile/settings-remote.png"
                alt="Remote Controller Mode settings"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Feature 2: Metadata Upload & Review ═══ */}
      <section className={styles.featureSectionAlt}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Core Feature 02</p>
            <h2 className={styles.featureTitle}>Metadata Upload & Review</h2>
            <p className={styles.featureDescription}>
              단순 업로드 기능이 아닙니다. 촬영 결과를 현장에서 바로 검토하고, 문제가 있으면
              재촬영을 판단하며, 검증된 데이터만 Zoomable Worker로 전송하는 품질 관문입니다.
            </p>
          </Reveal>
          <Reveal delay={50}>
            <p className={styles.featureContext}>
              모바일에서 촬영한 데이터의 품질이 후속 분석의 정확도를 결정합니다. 이 화면은 현장과
              데스크톱을 잇는 handoff 지점이며, 데이터 신뢰성의 첫 번째 게이트입니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/nearthwind-mobile/upload-main.png"
              alt="Upload Metadata main view"
              className={styles.featureHeroImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.bulletRow}>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Stitch & Review</h4>
                <p className={styles.bulletText}>
                  블레이드 4면(Pressure, Leading Edge, Suction, Trailing Edge)의 촬영 이미지를
                  스티칭하여 전체 블레이드를 한 화면에서 검토합니다. 누락 영역을 현장에서 즉시
                  확인합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>품질 검증 & 재촬영</h4>
                <p className={styles.bulletText}>
                  각 면별 사진 수와 촬영 상태를 실시간으로 확인합니다. 품질 기준에 미달하면 자동
                  비행을 재실행하여 현장에서 바로 보완합니다.
                </p>
              </div>
              <div className={styles.bulletCard}>
                <h4 className={styles.bulletTitle}>Worker Handoff</h4>
                <p className={styles.bulletText}>
                  검증된 데이터를 Zoomable Worker로 동기화합니다. 메타데이터 구조가 유지된 채
                  전송되어, 데스크톱에서 바로 정밀 결함 분석을 시작할 수 있습니다.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.subImageRow}>
              <CaseImage
                src="/images/portfolio/nearthwind-mobile/upload-stitch01.png"
                alt="Stitch Photos — blade 4-side view"
                className={styles.subImage}
              />
              <CaseImage
                src="/images/portfolio/nearthwind-mobile/upload-stitch02.png"
                alt="Upload preview and sync view"
                className={styles.subImage}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Process Flow ═══ */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Process Flow</p>
            <h2 className={styles.processTitle}>드론 검사 전체 워크플로우</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.processFlow}>
              {[
                {
                  num: "01",
                  title: "Inspection Setting",
                  desc: "블레이드 선택, 발전기 정보, 촬영 조건을 순차적으로 설정",
                  input: "사용자 입력",
                  output: "검사 파라미터 확정",
                },
                {
                  num: "02",
                  title: "Auto Flight",
                  desc: "AI 기반 자동 비행으로 블레이드 4면을 순차 촬영",
                  input: "시스템 자동화",
                  output: "4면 촬영 데이터 생성",
                },
                {
                  num: "03",
                  title: "Preview & Check",
                  desc: "스티칭 프리뷰로 촬영 품질을 현장에서 즉시 검증",
                  input: "사용자 판단",
                  output: "재촬영 또는 승인",
                },
                {
                  num: "04",
                  title: "Upload & Sync",
                  desc: "검증된 데이터를 Zoomable Worker로 전송하여 분석 시작",
                  input: "사용자 확인",
                  output: "Worker handoff 완료",
                },
              ].map((step, i) => (
                <Reveal key={step.num} delay={i * 80}>
                  <div className={styles.processStep}>
                    <span className={styles.processNum}>{step.num}</span>
                    <h4 className={styles.processStepTitle}>{step.title}</h4>
                    <p className={styles.processStepDesc}>{step.desc}</p>
                    <div className={styles.processStepDetail}>
                      <span className={styles.processStepMeta}>→ {step.input}</span>
                      <span className={styles.processStepMeta}>← {step.output}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Outcome ═══ */}
      <section className={styles.outcomeSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Outcome</p>
            <h2 className={styles.outcomeTitle}>프로젝트 성과</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.outcomeGrid}>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeSubLabel}>Efficiency</span>
                <span className={styles.outcomeValue}>60%</span>
                <span className={styles.outcomeLabel}>검사 시간 절감</span>
                <p className={styles.outcomeDesc}>
                  자동화된 설정과 AI 자동 비행으로 기존 수작업 대비 현장 체류 시간을 대폭 단축
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeSubLabel}>Coverage</span>
                <span className={styles.outcomeValue}>4면</span>
                <span className={styles.outcomeLabel}>블레이드 전면 검사</span>
                <p className={styles.outcomeDesc}>
                  Pressure, Leading Edge, Suction, Trailing Edge 4면을 빠짐없이 촬영하여 검사 누락
                  제거
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeSubLabel}>Reliability</span>
                <span className={styles.outcomeValue}>Auto</span>
                <span className={styles.outcomeLabel}>자동 비행·촬영</span>
                <p className={styles.outcomeDesc}>
                  딥러닝 기반 자동 비행으로 파일럿 숙련도에 대한 의존을 낮추고 촬영 일관성을 확보
                </p>
              </div>
              <div className={styles.outcomeCard}>
                <span className={styles.outcomeSubLabel}>Improvement</span>
                <span className={styles.outcomeValue}>2yr</span>
                <span className={styles.outcomeLabel}>지속적 운영·개선</span>
                <p className={styles.outcomeDesc}>
                  2년간 현장 피드백을 반영한 반복 개선으로 실제 운영 환경에서의 안정성 검증
                </p>
              </div>
            </div>
          </Reveal>

          {/* Reflection */}
          <Reveal delay={200}>
            <div className={styles.reflectionGrid}>
              <div className={styles.reflectionCard}>
                <h3 className={styles.reflectionCardTitle}>Field UX</h3>
                <p className={styles.reflectionText}>
                  바람, 소음, 직사광선 속에서 사용되는 제품을 설계하는 경험은 실내 환경과 근본적으로
                  달랐습니다. 터치 영역, 색상 대비, 정보 밀도 — 모든 판단 기준이 현장 조건에
                  종속되었고, 드론 조종과 검사 설정이라는 복잡한 워크플로우를 한 손으로 조작 가능한
                  수준으로 단순화하는 것이 핵심 과제였습니다.
                </p>
              </div>
              <div className={styles.reflectionCard}>
                <h3 className={styles.reflectionCardTitle}>System Continuity</h3>
                <p className={styles.reflectionText}>
                  이 앱은 독립 제품이 아니라 검사 파이프라인의 시작점입니다. 모바일에서 촬영한
                  데이터가 Zoomable Worker로 자연스럽게 이어지고, Zoomable Wind에서 관리되는
                  end-to-end 경험을 설계했습니다. 메타데이터 구조의 일관성이 후속 분석의 정확도를
                  결정한다는 점에서, handoff 설계가 가장 중요한 판단이었습니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
