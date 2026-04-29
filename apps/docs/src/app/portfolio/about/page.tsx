"use client";

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

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* ═══ Hero ═══ */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <Reveal>
            <p className={styles.heroLabel}>About</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={styles.heroTitle}>
              제품의 구조를
              <br />
              설계하는 디자이너
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.heroDesc}>
              복잡한 제품일수록 화면보다 구조가 먼저라고 믿습니다.
              <br />
              저는 역할, 데이터, 워크플로우가 얽힌 시스템을 더 명확하고 확장 가능한 경험으로
              설계해왔습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ What I Bring ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitLayout}>
            <div className={styles.splitSticky}>
              <Reveal>
                <h2 className={styles.splitTitle}>What I Bring</h2>
                <p className={styles.splitDesc}>
                  산업보다 구조를 먼저 보는 디자이너입니다. 복잡한 제품이 가진 역할, 데이터,
                  워크플로우의 문제를 더 명확한 경험으로 정리해왔습니다.
                </p>
              </Reveal>
            </div>
            <div className={styles.splitFlow}>
              {[
                {
                  num: "01",
                  title: "Product System Design",
                  text: "Nearthlab에서 70개 이상의 컴포넌트로 구성된 디자인 시스템을 처음부터 만들어 4개 제품팀에 적용했습니다. 토큰 구조 설계부터 Figma 라이브러리 운영, 문서화, 팀 채택까지 시스템의 전체 생명주기를 직접 운영한 경험이 있습니다.",
                  tags: ["Design Systems", "Tokens", "70+ Components", "Multi-Product"],
                },
                {
                  num: "02",
                  title: "AI & Data Experience",
                  text: "딥러닝 기반 자동 결함 탐지 앱(PPA Demo), 풍력 터빈 AI 리스크 예측 대시보드, 실시간 센서 데이터 모니터링 시스템을 설계했습니다. 모델의 결과를 사용자가 신뢰하고 행동으로 연결할 수 있는 인터페이스를 만드는 데 집중합니다.",
                  tags: ["AI/ML UX", "Data Visualization", "Real-time", "Predictive"],
                },
                {
                  num: "03",
                  title: "Platform & Multi-Role UX",
                  text: "DNK에서는 B2B 임대 관리(PMS), B2C 입주자 앱, 투자 운용 대시보드를 동시에 설계하며 같은 데이터를 다른 역할이 다르게 사용하는 구조를 다뤘습니다. B2B, B2C, B2G가 공존하는 플랫폼에서 역할별 워크플로우를 설계하는 데 익숙합니다.",
                  tags: ["B2B/B2C/B2G", "Multi-tenant", "RBAC", "Workflow"],
                },
                {
                  num: "04",
                  title: "Design–Engineering Bridge",
                  text: "Nearthlab에서 전사 UX 가이드를 수립하고 디자인 QA 프로세스를 도입해 직접 운영했습니다. 컴포넌트 스펙, 상태 정의, React 패턴까지 이해하며, Figma에서 코드로 넘어갈 때 의도가 손실되지 않도록 책임집니다.",
                  tags: ["Design QA", "UX Guide", "React", "Handoff"],
                },
              ].map((item, i) => (
                <Reveal key={item.num} delay={i * 80}>
                  <div className={styles.expertiseCard}>
                    <span className={styles.expertiseNum}>{item.num}</span>
                    <h3 className={styles.expertiseTitle}>{item.title}</h3>
                    <p className={styles.expertiseText}>{item.text}</p>
                    <div className={styles.expertiseTags}>
                      {item.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Experience ═══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <Reveal>
            <h2 className={styles.sectionTitle}>Experience</h2>
          </Reveal>

          <div className={styles.expList}>
            {/* DNK */}
            <Reveal>
              <div className={styles.expItem}>
                <div className={styles.expHead}>
                  <div>
                    <h3 className={styles.expRole}>Product Designer</h3>
                    <span className={styles.expCompany}>디엔코리아 (DNK)</span>
                  </div>
                  <span className={styles.expPeriod}>2024.11 — Present</span>
                </div>
                <p className={styles.expDesc}>
                  글로벌 주택임대 관리 솔루션의 제품 설계를 담당. PMS 리디자인, 전자계약 신규 기획
                  및 프로젝트 리딩, B2C 레지던트 앱/웹 및 어드민 백오피스, 부동산 투자/운용 데이터
                  관리 플랫폼(Investment Manager)의 대시보드·KPI·리포팅·자산 운영 워크플로우 UX를
                  설계.
                </p>
                <div className={styles.expProjects}>
                  <span>DNK PMS</span>
                  <span>Resident App/Web</span>
                  <span>Investment Manager Platform</span>
                </div>
              </div>
            </Reveal>

            {/* Nearthlab */}
            <Reveal delay={80}>
              <div className={styles.expItem}>
                <div className={styles.expHead}>
                  <div>
                    <h3 className={styles.expRole}>UX/UI Designer</h3>
                    <span className={styles.expCompany}>Nearthlab</span>
                  </div>
                  <span className={styles.expPeriod}>2022.08 — 2024.04</span>
                </div>
                <p className={styles.expDesc}>
                  AI 드론 검사 플랫폼 기업에서 B2B SaaS 웹 서비스, B2G 군·경찰용 드론 앱, 모바일
                  자율비행 앱 등 6개 이상의 제품을 설계. 전사 UX 표준 디자인 시스템을 구축하여
                  솔루션 아이덴티티 수립. 디자인 QA 프로세스 도입 및 운영. iF Design Award(Service
                  Design, AI&Robotics)와 Red Dot Design Award 수상 제품에 기여.
                </p>
                <div className={styles.expProjects}>
                  <span>Zoomable Wind Web</span>
                  <span>Zoomable Worker Web</span>
                  <span>NearthWind Mobile</span>
                  <span>UDS App (B2G)</span>
                  <span>PPA Demo (AI)</span>
                  <span>Design System</span>
                </div>
              </div>
            </Reveal>

            {/* WE Wumbo */}
            <Reveal delay={160}>
              <div className={styles.expItem}>
                <div className={styles.expHead}>
                  <div>
                    <h3 className={styles.expRole}>UX/UI Designer</h3>
                    <span className={styles.expCompany}>WE Wumbo (AU)</span>
                  </div>
                  <span className={styles.expPeriod}>2021.06 — 2022.07</span>
                </div>
                <p className={styles.expDesc}>
                  호주 스마트홈 스타트업에서 레지던트 매니지먼트 웹/앱, 호텔 자동화 앱, 화상 진료
                  의료 서비스를 기획부터 디자인·유지보수까지 담당. 글로벌 환경에서 다국적 팀과 영어
                  기반 협업.
                </p>
                <div className={styles.expProjects}>
                  <span>We Services</span>
                  <span>Wumbotel App</span>
                  <span>Wumbo Care</span>
                </div>
              </div>
            </Reveal>

            {/* Boshantech */}
            <Reveal delay={240}>
              <div className={styles.expItem}>
                <div className={styles.expHead}>
                  <div>
                    <h3 className={styles.expRole}>Product Designer Intern</h3>
                    <span className={styles.expCompany}>Boshantech (AU)</span>
                  </div>
                  <span className={styles.expPeriod}>2019.03 — 2021.11</span>
                </div>
                <p className={styles.expDesc}>
                  호주 IoT 스타트업에서 스마트 샤워 시스템 앱 기획·디자인 및 유지보수. Boshantech의
                  Brand Identity와 Brand Value 컨셉을 구축하며 BX 디자인까지 담당. 제품 디자인과
                  브랜드 설계를 동시에 경험.
                </p>
                <div className={styles.expProjects}>
                  <span>Smart Shower App</span>
                  <span>Boshantech BX</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ Awards & Education ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.credentialGrid}>
            <div>
              <Reveal>
                <h2 className={styles.sectionTitle}>Awards &amp; Certificates</h2>
              </Reveal>
              <div className={styles.credentialList}>
                <Reveal delay={40}>
                  <div className={styles.credentialItem}>
                    <span className={styles.credentialName}>iF Design Award — Service Design</span>
                    <span className={styles.credentialMeta}>
                      Zoomable Data Analytics Platforms · 2025
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <div className={styles.credentialItem}>
                    <span className={styles.credentialName}>Red Dot Design Award</span>
                    <span className={styles.credentialMeta}>AiDEN · Design Concept 2024</span>
                  </div>
                </Reveal>
                <Reveal delay={120}>
                  <div className={styles.credentialItem}>
                    <span className={styles.credentialName}>
                      iF Design Award — AI &amp; Robotics
                    </span>
                    <span className={styles.credentialMeta}>AiDEN · 2024</span>
                  </div>
                </Reveal>
                <Reveal delay={160}>
                  <div className={styles.credentialItem}>
                    <span className={styles.credentialName}>직무발명 특허</span>
                    <span className={styles.credentialMeta}>
                      비행체가 제공하는 정보를 표시하는 방법 및 장치 · 2023
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className={styles.credentialItem}>
                    <span className={styles.credentialName}>
                      Google UX Design Professional Certificate
                    </span>
                    <span className={styles.credentialMeta}>Coursera · 2024</span>
                  </div>
                </Reveal>
              </div>
            </div>
            <div>
              <Reveal>
                <h2 className={styles.sectionTitle}>Education</h2>
              </Reveal>
              <div className={styles.credentialList}>
                <Reveal delay={40}>
                  <div className={styles.credentialItem}>
                    <span className={styles.credentialName}>RMIT University</span>
                    <span className={styles.credentialMeta}>
                      Communication Design, Bachelor&apos;s degree · 2019–2021
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <div className={styles.credentialItem}>
                    <span className={styles.credentialName}>Holmesglen</span>
                    <span className={styles.credentialMeta}>
                      Graphic Design, Diploma of Education · 2017–2018
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ How I Work ═══ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.principleIntro}>
              <h2 className={styles.principleHeadline}>
                How I Work
                <br />
                Design Approach
              </h2>
            </div>
          </Reveal>

          <div className={styles.principleList}>
            {[
              {
                title: "도메인과 데이터 흐름부터 파악한다",
                text: "화면을 그리기 전에 비즈니스 로직, 데이터 모델, 사용자 역할 간의 관계를 먼저 그립니다. 풍력 발전소 검사 워크플로우든, 부동산 투자 리포팅이든, 도메인을 이해하지 않으면 좋은 구조가 나올 수 없다는 걸 경험으로 알고 있습니다.",
              },
              {
                title: "화면보다 시스템을 먼저 만든다",
                text: "개별 페이지를 하나씩 그리는 대신, 토큰·컴포넌트·패턴 단위로 제품을 설계합니다. Nearthlab에서 6개 제품이 하나의 디자인 시스템을 공유하면서도 각자의 맥락에 맞게 작동하는 구조를 만들어 봤기 때문입니다.",
              },
              {
                title: "구현 가능한 수준으로 설계한다",
                text: "API 응답 구조, 컴포넌트 상태, 렌더링 제약을 초기 설계 단계에서 반영합니다. 엔지니어가 디자인을 '해석'해야 하는 상황을 만들지 않습니다. 직접 디자인 QA를 수행하며 의도와 결과의 차이를 줄여 왔습니다.",
              },
              {
                title: "빠르게 출시하고 실제 사용으로 검증한다",
                text: "완벽한 기획서보다 작동하는 프로토타입을 먼저 만듭니다. 현장 엔지니어가 장갑 낀 손으로 터치하는 환경, 투자자가 수백 개 자산을 한 화면에서 비교하는 환경 — 실제 사용 맥락에서 나온 피드백이 설계를 완성합니다.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={styles.principleItem}>
                  <span className={styles.principleNum}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={styles.principleTitle}>{item.title}</h3>
                    <p className={styles.principleText}>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Capabilities & Contact ═══ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bottomGrid}>
            <Reveal>
              <div>
                <h2 className={styles.sectionTitle}>Capabilities</h2>
                <div className={styles.toolGroups}>
                  <div className={styles.toolGroup}>
                    <h3 className={styles.toolLabel}>Product &amp; UX</h3>
                    <div className={styles.toolChips}>
                      <span>Information Architecture</span>
                      <span>Data Visualization</span>
                      <span>Interaction Design</span>
                      <span>User Research</span>
                      <span>Prototyping</span>
                    </div>
                  </div>
                  <div className={styles.toolGroup}>
                    <h3 className={styles.toolLabel}>Design Systems</h3>
                    <div className={styles.toolChips}>
                      <span>Token Architecture</span>
                      <span>Component API Design</span>
                      <span>Figma Library</span>
                      <span>Design QA</span>
                      <span>Documentation</span>
                    </div>
                  </div>
                  <div className={styles.toolGroup}>
                    <h3 className={styles.toolLabel}>Design–Dev</h3>
                    <div className={styles.toolChips}>
                      <span>React / Next.js</span>
                      <span>TypeScript</span>
                      <span>CSS Modules</span>
                      <span>Component Spec</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <h2 className={styles.sectionTitle}>Next Step</h2>
                <p className={styles.contactIntro}>
                  PMS를 리디자인하고, 드론 검사 데이터를 대시보드로 만들고, 70개 컴포넌트의 디자인
                  시스템을 운영해 왔습니다. 다음은 더 큰 스케일의 제품, 더 복잡한 구조를 함께 설계할
                  팀에서 일하고 싶습니다.
                </p>
                <div className={styles.contactFitTags}>
                  <span>SaaS</span>
                  <span>Platform</span>
                  <span>Data / AI</span>
                  <span>Design Systems</span>
                  <span>Operations Tool</span>
                </div>
                <div className={styles.contactList}>
                  <a href="mailto:niedr7893@gmail.com" className={styles.contactLink}>
                    niedr7893@gmail.com →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/myungchul-seo-8313511bb/"
                    className={styles.contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
