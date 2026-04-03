"use client";

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

export default function ResearchProblemFramingPage() {
  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.heroTagRow}>
              <span className={styles.heroTag}>Research</span>
              <span className={styles.heroTag}>Strategy</span>
              <span className={styles.heroTag}>Problem Framing</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>
              Research &<br />
              Problem Framing
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDescription}>
              연간 리포트 생산 목표가 10,000기로 잡힌 시점에서, 기존 운영
              구조로는 속도도 비용도 맞지 않았습니다. 블레이드 검사 전체
              워크플로우를 분석하고, 가장 큰 병목인 Defect Marking 단계를
              중심으로 핵심 문제를 정의한 선행 프로젝트입니다. 이 리서치가
              Zoomable Worker와 Zoomable Wind 두 제품의 설계 출발점이
              되었습니다.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>
                  Product Designer / UX Researcher
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>2022–2023</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Scope</span>
                <span className={styles.metaValue}>
                  Research · Strategy · Problem Framing
                </span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Outcome</span>
                <span className={styles.metaValue}>
                  → Zoomable Worker · Zoomable Wind
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={400}>
          <div className={styles.heroVisual}>
            <CaseImage
              src="/images/portfolio/research-problem-framing/hero.png"
              alt="Research & Problem Framing overview"
              className={styles.heroImage}
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ Why This Mattered ═══ */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.whyGrid}>
              <div className={styles.whyLeft}>
                <p className={styles.sectionLabel}>Why This Mattered</p>
                <h2 className={styles.whyTitle}>
                  화면을 설계하기 전에,
                  <br />
                  운영 구조 자체를 이해해야 했습니다
                </h2>
              </div>
              <div className={styles.whyRight}>
                <p className={styles.whyText}>
                  풍력 블레이드 검사 리포트는 촬영 이후 QC, 결함 마킹, 결함 판정,
                  리포트 생성까지 여러 사람의 손을 거칩니다. 2022년 기준 리포트
                  한 건의 생산 비용은 약 10만 원이었고, 마지막 촬영일로부터 고객
                  전달까지 2주가 걸렸습니다. 이 구조로는 연간 10,000기를 처리할 수
                  없었습니다.
                </p>
                <p className={styles.whyText}>
                  단순히 UI를 개선하는 것만으로는 이 문제를 풀 수 없었습니다.
                  작업 시간이 어디서 소비되는지, 어떤 단계가 사람 수에 종속되는지,
                  품질이 왜 일정하지 않은지를 먼저 구조적으로 파악해야 했습니다.
                </p>
                <p className={styles.whyHighlight}>
                  이 프로젝트는 제품 전략의 출발점이었습니다. 화면 설계 이전에
                  운영 병목을 정의하고, 자동화가 개입할 수 있는 지점과 사람의
                  판단이 반드시 필요한 지점을 구분하는 것이 목표였습니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Research Methods ═══ */}
      <section className={styles.methodsSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Research Methods</p>
            <h2 className={styles.sectionTitle}>
              4가지 리서치 방법론으로
              <br />
              문제의 구조를 다층적으로 파악했습니다
            </h2>
            <p className={styles.sectionDesc}>
              각 방법론은 독립적으로 수행된 것이 아니라, 운영 실태 파악 →
              현장 문제 수집 → 프로세스 병목 식별 → 정량 검증이라는 하나의
              흐름 안에서 순차적으로 설계되었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.methodGrid}>
              <div className={styles.methodCard}>
                <span className={styles.methodNum}>01</span>
                <h4 className={styles.methodCardTitle}>Desk Research</h4>
                <p className={styles.methodCardText}>
                  풍력 블레이드 검사 산업의 현재 운영 구조, 결함 탐지 방식, 리포트
                  생성 프로세스를 조사했습니다. 업계의 일반적인 작업 흐름과
                  자사 시스템의 차이점을 비교하여, 어디에 구조적 개선 여지가
                  있는지를 확인했습니다.
                </p>
                <p className={styles.methodCardOutcome}>
                  → 리포트 생산 파이프라인의 전체 구조와 비용 구조를 파악
                </p>
              </div>
              <div className={styles.methodCard}>
                <span className={styles.methodNum}>02</span>
                <h4 className={styles.methodCardTitle}>
                  Stakeholder Interview
                </h4>
                <p className={styles.methodCardText}>
                  기술자, 현장 엔지니어, 관리 감독, 데이터 분석가 등 검사
                  워크플로우에 관여하는 4개 역할군을 대상으로 심층 인터뷰를
                  진행했습니다. 역할별로 어떤 작업에 시간이 소비되고, 어떤 지점에서
                  신뢰가 무너지는지를 파악했습니다.
                </p>
                <p className={styles.methodCardOutcome}>
                  → 역할 간 반복되는 구조적 pain point 6가지 도출
                </p>
              </div>
              <div className={styles.methodCard}>
                <span className={styles.methodNum}>03</span>
                <h4 className={styles.methodCardTitle}>Workflow Analysis</h4>
                <p className={styles.methodCardText}>
                  촬영 완료 → 이미지 업로드 → Quality Check → Defect Marking →
                  Defect Decision → Report 생성까지의 AS-IS 프로세스를 전체
                  매핑했습니다. 각 단계의 의존 관계, 대기 시간, 인력 종속성을
                  기록하여 병목 구간을 식별했습니다.
                </p>
                <p className={styles.methodCardOutcome}>
                  → QC 대기 시간과 DM 인력 종속이 핵심 병목으로 확인
                </p>
              </div>
              <div className={styles.methodCard}>
                <span className={styles.methodNum}>04</span>
                <h4 className={styles.methodCardTitle}>Quantitative Review</h4>
                <p className={styles.methodCardText}>
                  100개 터빈, 5명 작업자 기준으로 이미지 수, 작업 시간, 결함 수,
                  심각도 분포를 정량 분석했습니다. DM 방식과 QDM(Quick Defect
                  Marking) 방식을 비교하여 자동화 도입의 실질적 효과를
                  검증했습니다.
                </p>
                <p className={styles.methodCardOutcome}>
                  → 이미지 56.5% 감소, 작업 시간 55.7% 감소 확인
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ In-Depth Interview ═══ */}
      <section className={styles.interviewSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>In-Depth Interview</p>
            <h2 className={styles.sectionTitle}>
              4개 역할군의 현장 인터뷰에서
              <br />
              반복되는 구조적 문제를 발견했습니다
            </h2>
            <p className={styles.sectionDesc}>
              풍력 블레이드 검사 워크플로우에 참여하는 기술자, 현장 엔지니어,
              관리 감독, 데이터 분석가를 대상으로 심층 인터뷰를 진행했습니다.
              개별 불편이 아닌, 역할 간 공통으로 반복되는 운영 문제를
              식별하는 것이 목적이었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/research-problem-framing/interview.png"
              alt="In-depth interview results with 4 stakeholders"
              className={styles.fullImage}
            />
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.interviewHighlights}>
              <div className={styles.interviewCard}>
                <div className={styles.interviewMeta}>
                  <span className={styles.interviewName}>김영훈</span>
                  <span className={styles.interviewRole}>
                    풍력 발전소 기술자
                  </span>
                </div>
                <p className={styles.interviewQuote}>
                  &ldquo;중복된 이미지가 많아 작업 시간이 오래 걸립니다. 결함
                  표시가 일관되지 않아 수정이 빈번합니다.&rdquo;
                </p>
                <p className={styles.interviewGoal}>
                  <span className={styles.interviewGoalLabel}>Goal: </span>
                  블레이드 결함을 신속하게 식별하고 수리하여 가동 중단 시간을
                  최소화
                </p>
              </div>
              <div className={styles.interviewCard}>
                <div className={styles.interviewMeta}>
                  <span className={styles.interviewName}>최지영</span>
                  <span className={styles.interviewRole}>현장 엔지니어</span>
                </div>
                <p className={styles.interviewQuote}>
                  &ldquo;이미지 업로드 후 품질 검사를 빠르게 완료해야 하는데, 이
                  과정이 오래 걸립니다. 실시간 소통이 어려워 작업 진행 상황
                  공유가 불편합니다.&rdquo;
                </p>
                <p className={styles.interviewGoal}>
                  <span className={styles.interviewGoalLabel}>Goal: </span>
                  현장에서 신속하게 결함을 검사하고 보고하여 빠른 대응을 가능하게
                  함
                </p>
              </div>
              <div className={styles.interviewCard}>
                <div className={styles.interviewMeta}>
                  <span className={styles.interviewName}>이수진</span>
                  <span className={styles.interviewRole}>
                    풍력 발전소 관리 감독
                  </span>
                </div>
                <p className={styles.interviewQuote}>
                  &ldquo;결함 관리 프로세스가 비효율적입니다. 특히 PPA가 탐지한
                  결함을 다시 확인해야 하는 경우가 많습니다. 데이터 정리에 시간이
                  많이 걸리고, 실시간 소통이 부족합니다.&rdquo;
                </p>
                <p className={styles.interviewGoal}>
                  <span className={styles.interviewGoalLabel}>Goal: </span>
                  전체 결함 관리 프로세스를 효율적으로 운영하여 안정적 가동 유지
                </p>
              </div>
              <div className={styles.interviewCard}>
                <div className={styles.interviewMeta}>
                  <span className={styles.interviewName}>이지은</span>
                  <span className={styles.interviewRole}>데이터 분석가</span>
                </div>
                <p className={styles.interviewQuote}>
                  &ldquo;결함 정보의 일관성 부족으로 인해 메타데이터를 정리하는 데
                  많은 시간이 소요됩니다. 정확한 보고서를 작성하기 위해 추가적인
                  검토 작업이 필요합니다.&rdquo;
                </p>
                <p className={styles.interviewGoal}>
                  <span className={styles.interviewGoalLabel}>Goal: </span>
                  결함 데이터를 분석하여 보고서를 작성하고 관리팀에 제공
                </p>
              </div>
            </div>
          </Reveal>

          {/* Synthesis */}
          <Reveal delay={300}>
            <div className={styles.synthesisBlock}>
              <h3 className={styles.synthesisTitle}>
                역할 전반에서 반복된 6가지 구조적 문제
              </h3>
              <div className={styles.synthesisGrid}>
                <p className={styles.synthesisItem}>
                  <strong>중복 이미지 과부하</strong> — 동일 영역의 중복 촬영
                  이미지가 필터링 없이 작업 큐에 유입되어 리뷰 부하를 증가시킴
                </p>
                <p className={styles.synthesisItem}>
                  <strong>결함 마킹 비일관성</strong> — 작업자 간 Defect Type,
                  Severity 기준이 다르게 적용되어 수정과 재검토가 반복됨
                </p>
                <p className={styles.synthesisItem}>
                  <strong>이미지 품질 검증 지연</strong> — QC 완료까지 최대
                  48시간이 소요되며, 이 대기 시간이 파일럿 Demob 일정에 종속됨
                </p>
                <p className={styles.synthesisItem}>
                  <strong>PPA 자동탐지 신뢰 부족</strong> — AI가 탐지한 결함의
                  정확도가 낮아 수작업 재검토가 필수적이며, 시스템 신뢰가 낮음
                </p>
                <p className={styles.synthesisItem}>
                  <strong>메타데이터 정리 부담</strong> — 결함 정보의 일관성 부족으로
                  데이터 분석가가 보고서 작성 전 수동 정리에 과도한 시간을 소비함
                </p>
                <p className={styles.synthesisItem}>
                  <strong>실시간 협업 부재</strong> — 역할 간 실시간 소통 채널이
                  없어 작업 상태 공유가 지연되고, 주말·부재 시 프로세스가 정체됨
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Key Findings — Process Transformation ═══ */}
      <section className={styles.findingsSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Key Findings</p>
            <h2 className={styles.sectionTitle}>
              AS-IS에서 TO-BE로,
              <br />
              프로세스 전환의 기회를 구조적으로 분석했습니다
            </h2>
            <p className={styles.sectionDesc}>
              단순히 &ldquo;48시간이 2시간으로 줄었다&rdquo;가 아닙니다.
              QC 대기 시간이 파일럿 Demob 일정을 지배하고, DM/DD 단계가
              물량에 비례하여 인력을 필요로 하는 구조 자체가 스케일링의
              제약이었습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.findingsGrid}>
              <div className={styles.findingsColumn}>
                <span className={styles.findingsColumnTitle}>
                  AS-IS — 기존 프로세스의 구조적 한계
                </span>
                <div className={styles.findingsItem}>
                  <strong>QC 대기 시간 종속</strong> — 마지막 촬영 이후 QC 회신까지
                  최대 48시간. QC 완료 전에는 파일럿 Demob을 진행할 수 없어,
                  현장 일정 전체가 QC 속도에 종속됨
                </div>
                <div className={styles.findingsItem}>
                  <strong>DM/DD 인력 비례 구조</strong> — 물량이 늘어나면 작업자도
                  비례하여 채용해야 하는 구조. 교육의 한계로 인해 작업자 수가
                  늘어날수록 품질 일관성은 떨어짐
                </div>
                <div className={styles.findingsItem}>
                  <strong>라벨링·심각도 불일치</strong> — Defect Type 분류와
                  Severity 기준이 작업자마다 달라, 하나의 리포트 내에서도 판정
                  기준이 흔들림. 이후 검토 단계에서 수정 작업이 반복됨
                </div>
                <div className={styles.findingsItem}>
                  <strong>주말·부재 시 정체</strong> — QC와 DM 모두 담당자 부재 시
                  작업이 멈추는 구조. 상시 대기자가 필요하지만 확보가 어려움
                </div>
              </div>
              <div className={styles.findingsColumn}>
                <span className={styles.findingsColumnTitle}>
                  TO-BE — 자동화 기반 프로세스 재설계
                </span>
                <div className={styles.findingsItemStrong}>
                  <strong>결함 진단 솔루션 2시간 이내</strong> — 이미지 업로드 후
                  QC, PPA, DD Helper가 자동 파이프라인으로 처리. 사람의
                  개입 없이 1차 결함 진단까지 완료
                </div>
                <div className={styles.findingsItemStrong}>
                  <strong>QC 판정 정보 제공</strong> — 커버리지, 초점, 역광, 플레어
                  등의 이미지 품질 정보를 자동으로 제공하여, 사용자가 Pass/Fail을
                  근거 기반으로 직접 판단
                </div>
                <div className={styles.findingsItemStrong}>
                  <strong>결함 자동 분류</strong> — Defect Type, Severity, 위치 정보,
                  Threshold Bar 등을 자동 제공. 터빈 수리 상태를 &ldquo;수리
                  불필요 / 주의 요함 / 수리 필요&rdquo;로 자동 진단
                </div>
                <div className={styles.findingsItemStrong}>
                  <strong>인력 종속 해제</strong> — 자동화로 QC·DM의 인력 의존도를
                  낮추고, 상시 대기자 없이도 워크플로우가 진행되는 구조로 전환
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <CaseImage
              src="/images/portfolio/research-problem-framing/process-transformation.png"
              alt="AS-IS vs TO-BE process transformation"
              className={styles.fullImage}
            />
          </Reveal>
          <Reveal delay={300}>
            <p className={styles.findingsInsight}>
              핵심은 단순한 시간 단축이 아니었습니다. QC 대기가 현장 일정을
              지배하는 종속 구조, DM이 사람 수에 비례해야만 스케일되는
              구조, 라벨링 품질이 작업자 숙련도에 의존하는 구조 — 이 세 가지가
              프로세스 레벨의 근본 문제였고, UI가 아닌 운영 아키텍처를 바꿔야
              하는 이유였습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Problem Framing ═══ */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Problem Framing</p>
            <h2 className={styles.sectionTitleLight}>
              식별된 문제를
              <br />
              4가지 설계 과제로 전환했습니다
            </h2>
            <p className={styles.sectionDesc}>
              인터뷰와 워크플로우 분석에서 도출된 운영 문제를 제품 설계가
              대응할 수 있는 형태로 구조화했습니다. 각 과제는 문제 →
              왜 중요한가 → 설계 대응 방향의 구조로 정의했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <span className={styles.problemNum}>Priority 1</span>
                <h3 className={styles.problemCardTitle}>중복 이미지 제거</h3>
                <p className={styles.problemCardProblem}>
                  동일 영역의 중복 촬영 이미지가 필터링 없이 작업 큐에 유입되어,
                  작업자가 불필요한 이미지를 반복 검토함
                </p>
                <p className={styles.problemCardWhy}>
                  터빈당 평균 435장의 이미지 중 상당수가 중복. 리뷰 부하의 직접적
                  원인이며, 작업 시간의 절반 이상이 여기서 소비됨
                </p>
                <p className={styles.problemCardResponse}>
                  → AI 기반 중복 이미지 자동 필터링 도입
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemNum}>Priority 2</span>
                <h3 className={styles.problemCardTitle}>결함 표시 개선</h3>
                <p className={styles.problemCardProblem}>
                  B-box 수정이 번거롭고 결함 마킹 기준이 작업자마다 달라,
                  하나의 리포트 내에서도 판정 일관성이 흔들림
                </p>
                <p className={styles.problemCardWhy}>
                  라벨링과 심각도 기준의 불일치는 이후 검토·수정 단계의 반복을
                  유발하며, 작업자 수가 늘수록 품질 편차가 확대됨
                </p>
                <p className={styles.problemCardResponse}>
                  → B-box 수정 UX 개선 및 마킹 가이드라인 시스템화
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemNum}>Priority 3</span>
                <h3 className={styles.problemCardTitle}>PPA 신뢰도 향상</h3>
                <p className={styles.problemCardProblem}>
                  PPA의 자동 결함 탐지 결과에 대한 신뢰가 낮아, 작업자가 AI 결과를
                  무시하고 수작업으로 재검토하는 경우가 빈번함
                </p>
                <p className={styles.problemCardWhy}>
                  시스템 신뢰가 낮으면 자동화의 시간 절감 효과가 사라짐. False
                  Positive 감소와 결과 해석 가능성 확보가 전제 조건임
                </p>
                <p className={styles.problemCardResponse}>
                  → AI 모델 성능 개선, FP 감소, 결함 분류 자동화
                </p>
              </div>
              <div className={styles.problemCard}>
                <span className={styles.problemNum}>Priority 4</span>
                <h3 className={styles.problemCardTitle}>협업 도구 강화</h3>
                <p className={styles.problemCardProblem}>
                  역할 간 실시간 소통 채널이 없어 작업 상태 공유가 지연되고,
                  주말·부재 시 전체 워크플로우가 정체됨
                </p>
                <p className={styles.problemCardWhy}>
                  QC 완료 알림, 결함 코멘트, 작업 상태 공유가 없으면 사람의
                  가용성이 프로세스 속도를 결정하는 구조가 지속됨
                </p>
                <p className={styles.problemCardResponse}>
                  → 실시간 알림, 코멘트, 작업 상태 대시보드 도입
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Opportunity — Proposed Automated Process ═══ */}
      <section className={styles.opportunitySection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Proposed Operating Model</p>
            <h2 className={styles.sectionTitle}>
              무엇을 자동화하고,
              <br />
              무엇을 사람의 판단으로 남길 것인가
            </h2>
            <p className={styles.sectionDesc}>
              QC와 1차 결함 탐지는 AI 파이프라인이 처리합니다. 최종 결함 판정과
              고객 맞춤 작업에는 숙련된 작업자의 판단이 남습니다. 자동화의
              경계를 운영 구조 레벨에서 설계했습니다.
            </p>
          </Reveal>

          {/* Hero Visual — 운영 모델 다이어그램 */}
          <Reveal delay={100}>
            <CaseImage
              src="/images/portfolio/research-problem-framing/automated-process.png"
              alt="Proposed Automated Process — QC, PPA, Defect Marking, Custom Work"
              className={styles.fullImage}
            />
          </Reveal>

          {/* Summary Panel */}
          <Reveal delay={200}>
            <div className={styles.opportunitySummary}>
              <div className={styles.opportunitySummaryCard}>
                <span className={styles.opportunitySummaryLabel}>
                  자동화 영역
                </span>
                <p className={styles.opportunitySummaryText}>
                  이미지 품질 검사(QC), 중복 필터링, 1차 결함 탐지(PPA),
                  결함 유형·위치 자동 분류
                </p>
              </div>
              <div className={styles.opportunitySummaryCard}>
                <span className={styles.opportunitySummaryLabel}>
                  인간 판단 영역
                </span>
                <p className={styles.opportunitySummaryText}>
                  최종 결함 판정(Defect Decision), 심각도 확정,
                  고객 맞춤 작업(Custom Work)
                </p>
              </div>
              <div className={styles.opportunitySummaryCard}>
                <span className={styles.opportunitySummaryLabel}>
                  기대 효과
                </span>
                <p className={styles.opportunitySummaryText}>
                  리드타임 2주 → 2시간, 인력 종속성 해소,
                  물량 증가에도 품질 유지
                </p>
              </div>
            </div>
          </Reveal>

          {/* 해석 카드 */}
          <Reveal delay={300}>
            <div className={styles.opportunityGrid}>
              <div className={styles.opportunityCard}>
                <h4 className={styles.opportunityCardTitle}>
                  자동화가 대체하는 영역
                </h4>
                <p className={styles.opportunityCardSub}>
                  사람의 개입 없이 1차 결함 진단까지 완료
                </p>
                <p className={styles.opportunityCardText}>
                  QC와 PPA를 AI 파이프라인으로 처리합니다. 중복 이미지 필터링,
                  커버리지 검증, 초점·역광 판별, 결함 위치·유형 자동 분류가
                  포함됩니다.
                </p>
              </div>
              <div className={styles.opportunityCard}>
                <h4 className={styles.opportunityCardTitle}>
                  사람의 판단이 남는 영역
                </h4>
                <p className={styles.opportunityCardSub}>
                  자동화의 속도 위에 사람의 정확성을 결합
                </p>
                <p className={styles.opportunityCardText}>
                  최종 결함 판정과 고객 맞춤 작업은 숙련된 작업자가 담당합니다.
                  AI가 제공한 1차 결과를 검토·수정하는 구조입니다.
                </p>
              </div>
              <div className={styles.opportunityCard}>
                <h4 className={styles.opportunityCardTitle}>역할 재분배</h4>
                <p className={styles.opportunityCardSub}>
                  저숙련 업무를 자동화가 흡수, 고숙련은 판단에 집중
                </p>
                <p className={styles.opportunityCardText}>
                  기존 QC·DM 전 단계의 저숙련 업무를 자동화가 대체합니다.
                  고숙련 작업자는 최종 검토와 고객 대응에 집중하는 구조입니다.
                </p>
              </div>
              <div className={styles.opportunityCard}>
                <h4 className={styles.opportunityCardTitle}>
                  운영 구조 변화
                </h4>
                <p className={styles.opportunityCardSub}>
                  물량 증가가 인력 증가를 요구하지 않는 구조
                </p>
                <p className={styles.opportunityCardText}>
                  2주 소요 프로세스가 2시간 이내로 단축됩니다. 상시 대기자가
                  불필요하고, 주말·부재 시에도 파이프라인이 자동 진행됩니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Quantitative Results ═══ */}
      <section className={styles.quantSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Quantitative Results</p>
            <h2 className={styles.sectionTitle}>
              정량적 검증으로
              <br />
              설계 방향의 타당성을 확인했습니다
            </h2>
            <p className={styles.sectionDesc}>
              QDM 3차 테스트 결과와 2022→2023 연간 성장 지표를 통해,
              중복 이미지 제거와 PPA 성능 개선이 실질적인 운영 효과로
              이어지는지를 검증했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            {/* Bar Chart — Quantitative Results Comparison */}
            <div className={styles.chartFrame}>
              <p className={styles.chartTitle}>
                Quantitative Results Comparison
              </p>
              <div className={styles.chartArea}>
                <div className={styles.chartYAxis}>
                  <span>400</span>
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>
                <div className={styles.chartContent}>
                  <div className={styles.chartPlot}>
                    <div className={styles.chartGridLines}>
                      <div className={styles.chartGridLine} />
                      <div className={styles.chartGridLine} />
                      <div className={styles.chartGridLine} />
                      <div className={styles.chartGridLine} />
                      <div className={styles.chartGridLine} />
                    </div>
                    <div className={styles.chartGroups}>
                      <div className={styles.chartGroup}>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>435</span>
                            <div
                              className={styles.chartBarBefore}
                              style={{ height: "100%" }}
                            />
                          </div>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>189</span>
                            <div
                              className={styles.chartBarAfter}
                              style={{ height: "43.4%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.chartGroup}>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>79</span>
                            <div
                              className={styles.chartBarBefore}
                              style={{ height: "18.2%" }}
                            />
                          </div>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>35</span>
                            <div
                              className={styles.chartBarAfter}
                              style={{ height: "8%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.chartGroup}>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>56</span>
                            <div
                              className={styles.chartBarBefore}
                              style={{ height: "12.9%" }}
                            />
                          </div>
                          <div className={styles.chartBarWrapper}>
                            <span className={styles.chartBarLabel}>66</span>
                            <div
                              className={styles.chartBarAfter}
                              style={{ height: "15.2%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.chartXLabels}>
                    <span className={styles.chartXLabel}>이미지 수</span>
                    <span className={styles.chartXLabel}>작업 시간</span>
                    <span className={styles.chartXLabel}>결함 품질</span>
                  </div>
                </div>
              </div>
              <div className={styles.chartLegend}>
                <div className={styles.chartLegendItem}>
                  <span className={styles.chartLegendSwatchBefore} />
                  <span>Before</span>
                </div>
                <div className={styles.chartLegendItem}>
                  <span className={styles.chartLegendSwatchAfter} />
                  <span>After</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.quantMetrics}>
              <div className={styles.quantMetricCard}>
                <span className={styles.quantValue}>56.5%</span>
                <span className={styles.quantLabel}>이미지 수 감소</span>
                <p className={styles.quantDesc}>
                  435장 → 189장으로 감소
                </p>
                <p className={styles.quantInsight}>
                  중복 제거로 작업자가 검토해야 할 이미지가 절반 이하로 줄어,
                  리뷰 부하가 구조적으로 감소
                </p>
              </div>
              <div className={styles.quantMetricCard}>
                <span className={styles.quantValue}>55.7%</span>
                <span className={styles.quantLabel}>작업 시간 감소</span>
                <p className={styles.quantDesc}>79분 → 35분으로 감소</p>
                <p className={styles.quantInsight}>
                  같은 인원으로 더 많은 터빈을 처리할 수 있는 처리량 확보.
                  인력 증원 없는 스케일링의 근거
                </p>
              </div>
              <div className={styles.quantMetricCard}>
                <span className={styles.quantValue}>85%</span>
                <span className={styles.quantLabel}>
                  리포트 생산 비용 감소
                </span>
                <p className={styles.quantDesc}>
                  100,943원 → 15,059원으로 감소
                </p>
                <p className={styles.quantInsight}>
                  건당 비용이 1/7 수준으로 하락하여, 10,000기 대응 시에도
                  예산 구조가 성립하는 운영 모델 확보
                </p>
              </div>
              <div className={styles.quantMetricCard}>
                <span className={styles.quantValue}>168%</span>
                <span className={styles.quantLabel}>총 매출액 증가</span>
                <p className={styles.quantDesc}>
                  5천만원 → 1.34억원으로 증가
                </p>
                <p className={styles.quantInsight}>
                  생산 비용은 60% 감소하면서 매출은 168% 증가.
                  영업이익은 적자에서 1.09억으로 전환
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className={styles.quantSynthesis}>
              품질 지표에서는 심각도 3 이상 결함의 커버율이 94% 이상으로
              확인되었습니다. Precision 13.4, Recall 50.9는 자동화만으로
              완결되지 않음을 보여주지만, 고위험 결함의 누락 방지라는
              측면에서 자동 탐지와 사람의 최종 검토를 결합하는 설계
              방향이 타당함을 확인한 수치입니다. 22년도 방식을 유지했을 경우
              24년 리포트 생산 예산은 약 13억 원이 필요했으나, PPA 도입으로
              약 2.8억 원(78.36% 감소)으로 축소되었습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ Performance Metrics ═══ */}
      <section className={styles.perfSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Performance Metrics</p>
            <h2 className={styles.sectionTitle}>DM vs QDM 성능 비교</h2>
            <p className={styles.sectionDesc}>
              기존 Defect Marking 방식과 Quick Defect Marking 방식의 핵심 지표를
              비교한 결과입니다. 이미지 수와 작업 시간 모두 절반 이상 감소하면서도,
              심각도 3 이상 결함에 대한 94% 이상의 커버율을 유지했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.perfChartRow}>
              {/* 작업 시간 및 이미지 수 */}
              <div className={styles.perfChartPanel}>
                <p className={styles.perfChartSectionTitle}>
                  작업 시간 및 이미지 수
                </p>
                <div className={styles.perfChartPairRow}>
                  {/* Lead Time */}
                  <div className={styles.perfMiniChart}>
                    <p className={styles.perfMiniTitle}>Average Lead Time Comparison</p>
                    <div className={styles.perfMiniPlotWrap}>
                      <span className={styles.perfMiniAxisLabel}>Average Time (minutes)</span>
                      <div className={styles.perfMiniYAxis}>
                        <span className={styles.perfMiniYLabel}>80</span>
                        <span className={styles.perfMiniYLabel}>70</span>
                        <span className={styles.perfMiniYLabel}>60</span>
                        <span className={styles.perfMiniYLabel}>50</span>
                        <span className={styles.perfMiniYLabel}>40</span>
                        <span className={styles.perfMiniYLabel}>30</span>
                        <span className={styles.perfMiniYLabel}>20</span>
                        <span className={styles.perfMiniYLabel}>10</span>
                        <span className={styles.perfMiniYLabel}>0</span>
                      </div>
                      <div className={styles.perfMiniPlotArea}>
                        <div className={styles.perfMiniGridLines}>
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className={styles.perfMiniGridLine} />
                          ))}
                        </div>
                        <div className={styles.perfMiniBars}>
                          <div className={styles.perfMiniBarCol}>
                            <div className={`${styles.perfMiniBar} ${styles.perfMiniBarPrimary}`} style={{ height: "97.5%" }} />
                          </div>
                          <div className={styles.perfMiniBarCol}>
                            <div className={`${styles.perfMiniBar} ${styles.perfMiniBarSecondary}`} style={{ height: "43.8%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.perfMiniXLabels}>
                      <span className={styles.perfMiniXLabel}>Production Lead Time</span>
                      <span className={styles.perfMiniXLabel}>Test Lead Time</span>
                    </div>
                    <p className={styles.perfMiniSubtitle}>작업 시간 (Production vs QDM Test)</p>
                  </div>
                  {/* Image Count */}
                  <div className={styles.perfMiniChart}>
                    <p className={styles.perfMiniTitle}>Average Image Count Comparison</p>
                    <div className={styles.perfMiniPlotWrap}>
                      <span className={styles.perfMiniAxisLabel}>Average Image Count</span>
                      <div className={styles.perfMiniYAxis}>
                        <span className={styles.perfMiniYLabel}>400</span>
                        <span className={styles.perfMiniYLabel}>300</span>
                        <span className={styles.perfMiniYLabel}>200</span>
                        <span className={styles.perfMiniYLabel}>100</span>
                        <span className={styles.perfMiniYLabel}>0</span>
                      </div>
                      <div className={styles.perfMiniPlotArea}>
                        <div className={styles.perfMiniGridLines}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className={styles.perfMiniGridLine} />
                          ))}
                        </div>
                        <div className={styles.perfMiniBars}>
                          <div className={styles.perfMiniBarCol}>
                            <div className={`${styles.perfMiniBar} ${styles.perfMiniBarPrimary}`} style={{ height: "100%" }} />
                          </div>
                          <div className={styles.perfMiniBarCol}>
                            <div className={`${styles.perfMiniBar} ${styles.perfMiniBarSecondary}`} style={{ height: "43.4%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.perfMiniXLabels}>
                      <span className={styles.perfMiniXLabel}>Production Image Count</span>
                      <span className={styles.perfMiniXLabel}>Test Image Count</span>
                    </div>
                    <p className={styles.perfMiniSubtitle}>이미지 수 (Production vs QDM Test)</p>
                  </div>
                </div>
              </div>

              {/* 결함 분포 */}
              <div className={styles.perfChartPanel}>
                <p className={styles.perfChartSectionTitle}>결함 분포</p>
                <div className={styles.perfChartPairRow}>
                  {/* Production Defects */}
                  <div className={styles.perfMiniChart}>
                    <p className={styles.perfMiniTitle}>Average Production Defects</p>
                    <div className={styles.perfMiniPlotWrap}>
                      <span className={styles.perfMiniAxisLabel}>Average Defect Count</span>
                      <div className={styles.perfMiniYAxis}>
                        <span className={styles.perfMiniYLabel}>60</span>
                        <span className={styles.perfMiniYLabel}>50</span>
                        <span className={styles.perfMiniYLabel}>40</span>
                        <span className={styles.perfMiniYLabel}>30</span>
                        <span className={styles.perfMiniYLabel}>20</span>
                        <span className={styles.perfMiniYLabel}>10</span>
                        <span className={styles.perfMiniYLabel}>0</span>
                      </div>
                      <div className={styles.perfMiniPlotArea}>
                        <div className={styles.perfMiniGridLines}>
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className={styles.perfMiniGridLine} />
                          ))}
                        </div>
                        <div className={styles.perfMiniBars}>
                          <div className={styles.perfMiniBarCol}>
                            <div className={`${styles.perfMiniBar} ${styles.perfMiniBarPrimary}`} style={{ height: "93.3%" }} />
                          </div>
                          <div className={styles.perfMiniBarCol}>
                            <div className={`${styles.perfMiniBar} ${styles.perfMiniBarSecondary}`} style={{ height: "5%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.perfMiniXLabels}>
                      <span className={styles.perfMiniXLabel}>Total Defects</span>
                      <span className={styles.perfMiniXLabel}>Severe Defects</span>
                    </div>
                    <p className={styles.perfMiniSubtitle}>결함 분포 (Production)</p>
                  </div>
                  {/* Test Defects */}
                  <div className={styles.perfMiniChart}>
                    <p className={styles.perfMiniTitle}>Average Counts of Test Defects</p>
                    <div className={styles.perfMiniPlotWrap}>
                      <span className={styles.perfMiniAxisLabel}>Average Count</span>
                      <div className={styles.perfMiniYAxis}>
                        <span className={styles.perfMiniYLabel}>30</span>
                        <span className={styles.perfMiniYLabel}>25</span>
                        <span className={styles.perfMiniYLabel}>20</span>
                        <span className={styles.perfMiniYLabel}>15</span>
                        <span className={styles.perfMiniYLabel}>10</span>
                        <span className={styles.perfMiniYLabel}>5</span>
                        <span className={styles.perfMiniYLabel}>0</span>
                      </div>
                      <div className={styles.perfMiniPlotArea}>
                        <div className={styles.perfMiniGridLines}>
                          {Array.from({ length: 7 }).map((_, i) => (
                            <div key={i} className={styles.perfMiniGridLine} />
                          ))}
                        </div>
                        <div className={styles.perfMiniBars}>
                          <div className={styles.perfMiniBarCol}>
                            <div className={`${styles.perfMiniBar} ${styles.perfMiniBarPrimary}`} style={{ height: "86.7%" }} />
                          </div>
                          <div className={styles.perfMiniBarCol}>
                            <div className={`${styles.perfMiniBar} ${styles.perfMiniBarSecondary}`} style={{ height: "93.3%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.perfMiniXLabels}>
                      <span className={styles.perfMiniXLabel}>PPA Used BBox</span>
                      <span className={styles.perfMiniXLabel}>User Created BBox</span>
                    </div>
                    <p className={styles.perfMiniSubtitle}>결함 분포 (QDM Test)</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <table className={styles.perfTable}>
              <thead>
                <tr>
                  <th>항목 (평균)</th>
                  <th>DM (Defect Marking)</th>
                  <th>QDM (Quick Defect Marking)</th>
                  <th>변화</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>이미지 수</td>
                  <td>435장</td>
                  <td>189장</td>
                  <td className={styles.perfHighlight}>56.5% 감소</td>
                </tr>
                <tr>
                  <td>작업 시간</td>
                  <td>79분</td>
                  <td>35분</td>
                  <td className={styles.perfHighlight}>55.7% 감소</td>
                </tr>
                <tr>
                  <td>결함 수</td>
                  <td>56개</td>
                  <td>66개</td>
                  <td className={styles.perfHighlight}>
                    심각도 3+ 커버 94%
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ═══ Connected Outcomes ═══ */}
      <section className={styles.connectedSection}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.sectionLabel}>Connected Outcomes</p>
            <h2 className={styles.sectionTitleLight}>
              이 리서치가 정의한 문제 구조에서
              <br />두 개의 제품 트랙이 시작되었습니다
            </h2>
            <p className={styles.connectedDesc}>
              Research & Problem Framing은 하나의 리서치 프로젝트가 아니라,
              이후 두 개의 실행 프로젝트가 공유하는 문제 정의이자 설계
              전제였습니다. 검사 현장의 실행 레이어와 데이터 관리의 운영
              레이어 — 이 두 축이 같은 리서치에서 출발했습니다.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className={styles.connectedGrid}>
              <Link
                href="/portfolio/zoomable-worker"
                className={styles.connectedCard}
              >
                <div className={styles.connectedCardInner}>
                  <span className={styles.connectedTag}>Execution Layer</span>
                  <h3 className={styles.connectedCardTitle}>
                    Zoomable Worker
                  </h3>
                  <p className={styles.connectedCardText}>
                    현장 검사와 결함 마킹을 수행하는 실행 워크플로우 플랫폼.
                    이 리서치에서 발견된 중복 이미지 과부하, 결함 마킹 비일관성,
                    PPA 신뢰 부족 문제를 직접 해결하는 제품입니다.
                  </p>
                  <ul className={styles.connectedCardBullets}>
                    <li>AI 기반 중복 이미지 자동 필터링</li>
                    <li>결함 마킹 UX 및 B-box 수정 기능 개선</li>
                    <li>PPA 결과 신뢰도 개선 및 FP 감소</li>
                    <li>QDM 기반 작업 시간 55% 단축</li>
                  </ul>
                  <span className={styles.connectedArrow}>
                    프로젝트 보기 →
                  </span>
                </div>
              </Link>
              <Link
                href="/portfolio/zoomable-wind"
                className={styles.connectedCard}
              >
                <div className={styles.connectedCardInner}>
                  <span className={styles.connectedTag}>Management Layer</span>
                  <h3 className={styles.connectedCardTitle}>Zoomable Wind</h3>
                  <p className={styles.connectedCardText}>
                    점검 데이터를 클라우드 기반으로 관리·분석하는 운영 가시성
                    플랫폼. 이 리서치에서 도출된 메타데이터 비일관성, 협업 부재,
                    데이터 정리 부담 문제를 해결하는 제품입니다.
                  </p>
                  <ul className={styles.connectedCardBullets}>
                    <li>결함 데이터 일관성 자동 확보</li>
                    <li>실시간 알림 및 역할 간 협업 도구</li>
                    <li>클라우드 기반 리포트 관리 및 분석</li>
                    <li>운영 전체의 가시성과 추적성 확보</li>
                  </ul>
                  <span className={styles.connectedArrow}>
                    프로젝트 보기 →
                  </span>
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
