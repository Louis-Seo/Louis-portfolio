export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  domain: string;
  platform: string;
  year: string;
  duration: string;
  role: string;
  team: string;
  summary: string;
  problem: string;
  goal: string;
  responsibilities: string[];
  process: string[];
  outcome: string;
  impactMetrics: { value: string; label: string }[];
  tags: string[];
  featured: boolean;
  gallery: string[];
  hero: {
    label: string;
    title: string;
    description: string;
    meta: ProjectMeta[];
  };
}

export const PROJECTS: ProjectDetail[] = [
  {
    slug: "dnk-rp",
    title: "DNK RP Web/App",
    subtitle: "입주자 앱, PMS, 백오피스를 연결해 주거 운영 경험을 하나의 플랫폼으로 재구성한 프로젝트",
    category: "UX/UI Design",
    domain: "PropTech · Resident Portal",
    platform: "Web + Mobile",
    year: "2025–",
    duration: "Ongoing",
    role: "UX/UI Designer",
    team: "UX/UI Designer, PM, Frontend·Backend Dev, Deep Learning Engineer",
    summary:
      "일본 주택 시장의 복잡한 운영 구조와 PMS 중심의 관리자 시스템을 해결하기 위해, 단일 데이터 구조 위에 RP App(입주자용), RP Admin Web(관리자용), PMS를 통합한 양방향 플랫폼을 설계했습니다.",
    problem:
      "일본의 기존 임대 시스템은 관리자 중심으로 운영되며, 입주자는 계약, 납부, 공지 확인 등 대부분의 정보를 수동적으로 전달받아야 하는 구조였습니다.",
    goal:
      "입주자 중심의 구조를 도입한 최초의 PMS 연동 주거 플랫폼을 구축하여, 일본의 로컬 규제와 운영 관행에 맞춘 사용자 경험을 제공합니다.",
    responsibilities: [
      "Project Planning",
      "UI/UX Design",
      "Design System",
      "Maintenance",
    ],
    process: [
      "Market research & user interview",
      "UX direction & IA design",
      "Design system construction",
      "High-fidelity prototype",
      "Usability testing",
      "Implementation & iteration",
    ],
    outcome:
      "입주자 중심의 PMS 연동 주거 플랫폼을 성공적으로 설계하여, 관리자와 입주자 간 양방향 소통 구조를 구현했습니다.",
    impactMetrics: [
      { value: "6", label: "핵심 기능 모듈" },
      { value: "2", label: "플랫폼 (Web + App)" },
      { value: "40%", label: "문의 건수 감소" },
      { value: "65%", label: "수기 문의 감소" },
    ],
    tags: ["PropTech", "B2B2C", "PMS", "Mobile"],
    featured: true,
    gallery: [],
    hero: {
      label: "UX/UI Design",
      title: "DNK RP Web/App",
      description:
        "일본 임대 시장을 위한 입주자 중심 PMS 연동 주거 플랫폼",
      meta: [
        { label: "Role", value: "UX/UI Designer" },
        { label: "Duration", value: "2025–" },
        { label: "Platform", value: "Web + Mobile" },
        { label: "Contribution", value: "Planning, Design, DS, Maintenance" },
      ],
    },
  },
  {
    slug: "invest-manager",
    title: "Invest Manager",
    subtitle: "복잡한 자산 운용 데이터를 더 빠르게 읽고 판단할 수 있도록 만든 투자 운영 대시보드",
    category: "Product Design",
    domain: "FinTech · Clean Energy",
    platform: "Web",
    year: "2023",
    duration: "6 months",
    role: "Product Designer",
    team: "1 Designer, 4 Engineers, 1 PM",
    summary:
      "Designed a portfolio management dashboard enabling institutional investors to monitor wind farm performance, track ROI, and manage asset allocation across multiple energy projects.",
    problem:
      "Investment analysts spent hours compiling reports from multiple data sources. There was no unified view to compare asset performance or identify underperforming wind farms quickly.",
    goal:
      "Create a centralized dashboard that provides real-time portfolio visibility, automated performance reports, and actionable investment insights.",
    responsibilities: [
      "Dashboard information architecture",
      "Data-dense UI design for financial metrics",
      "Chart and data visualization system",
      "Filtering and comparison interaction patterns",
      "Stakeholder presentation and design review",
    ],
    process: [
      "Domain research on clean energy investment workflows",
      "Competitive analysis of financial dashboards",
      "Wireframe exploration for data-dense layouts",
      "Interactive prototype for stakeholder validation",
      "Visual design with accessibility considerations",
      "Component spec and developer handoff",
    ],
    outcome:
      "Adopted by 2 institutional investment firms. Reduced monthly reporting time from 3 days to 4 hours through automated dashboards.",
    impactMetrics: [
      { value: "85%", label: "Reporting time reduction" },
      { value: "2", label: "Institutional firms adopted" },
      { value: "40+", label: "Screens designed" },
      { value: "12", label: "Chart types implemented" },
    ],
    tags: ["Dashboard", "FinTech", "Data Visualization", "B2B"],
    featured: true,
    gallery: [],
    hero: {
      label: "Product Design",
      title: "Invest Manager",
      description:
        "Portfolio management dashboard for institutional wind energy investors — transforming fragmented data into clear, actionable investment insights.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Duration", value: "6 months" },
        { label: "Platform", value: "Web" },
        { label: "Year", value: "2023" },
      ],
    },
  },
  {
    slug: "design-system",
    title: "Zoomable Design System",
    subtitle: "여러 제품팀이 같은 언어로 일할 수 있도록 토큰과 컴포넌트 체계를 구축한 디자인 시스템",
    category: "Design System",
    domain: "Design Infrastructure",
    platform: "Web + Figma",
    year: "2023–2024",
    duration: "Ongoing",
    role: "Design System Lead",
    team: "2 Designers, 3 Engineers",
    summary:
      "Built and maintained a comprehensive design system with 70+ components, design tokens, and documentation — bridging Figma design decisions and React implementation through a shared system language.",
    problem:
      "Multiple products shared similar UI patterns but implemented them independently, leading to visual inconsistency, duplicated effort, and slow design-to-development handoff.",
    goal:
      "Create a unified design system that serves as the single source of truth for all product teams — enabling faster, more consistent product development.",
    responsibilities: [
      "Design system architecture and token structure",
      "Component design with variants, sizes, and states",
      "Figma library management and versioning",
      "Documentation site design and content",
      "Cross-team adoption strategy",
    ],
    process: [
      "Audit existing UI patterns across products",
      "Define token structure (color, typography, spacing, radius)",
      "Design foundational components (Button, Input, etc.)",
      "Build Figma component library with variants",
      "Create documentation and usage guidelines",
      "Iterate based on team feedback and adoption metrics",
    ],
    outcome:
      "Adopted across 4 product teams. Reduced new feature design time by 30% and eliminated visual inconsistencies across products.",
    impactMetrics: [
      { value: "70+", label: "Components built" },
      { value: "7", label: "Token foundation groups" },
      { value: "4", label: "Product teams using" },
      { value: "30%", label: "Faster feature design" },
    ],
    tags: ["Design System", "React", "Tokens", "Component Library"],
    featured: true,
    gallery: [],
    hero: {
      label: "Design System Case Study",
      title: "Zoomable Design System",
      description:
        "A scalable design system built for enterprise wind energy inspection products — structured around tokens, components, and states to bridge the gap between design and React-based development.",
      meta: [
        { label: "Role", value: "Design System Lead" },
        { label: "Components", value: "70+ Built" },
        { label: "Teams", value: "4 Adopted" },
        { label: "Duration", value: "Ongoing" },
      ],
    },
  },
  {
    slug: "nearthwind-mobile",
    title: "NearthWind Mobile",
    subtitle: "AI 드론 기반 풍력 터빈 자동 검사 모바일 시스템",
    category: "UX/UI Design",
    domain: "Wind Energy · Drone · AI",
    platform: "Mobile (Tablet)",
    year: "2022–2024",
    duration: "2 years",
    role: "UX/UI Designer",
    team: "UX/UI Designer, PM, Frontend·Backend Dev, Deep Learning Engineer",
    summary:
      "NearthWind Mobile은 AI를 활용하여 드론이 자동으로 풍력 터빈을 검사하는 혁신적인 무인 로봇 시스템입니다. 발전기를 한 번 정지한 후, 최상단 블레이드를 4면에서 꼼꼼히 점검하며, 드론은 자동 비행 기능을 통해 스스로 이동하며 딥러닝 기술을 이용해 결함을 자동으로 촬영하고 분석합니다.",
    problem:
      "기존 풍력 터빈 검사는 특수 드론과 숙련된 파일럿이 필요하여 비용과 시간이 많이 소요되었습니다. 촬영 데이터 관리와 결함 식별도 수작업에 의존했습니다.",
    goal:
      "일반 드론으로도 효율적이고 정밀한 터빈 점검이 가능하며, 촬영 데이터를 자동으로 관리하고 분석하여 Zoomable Worker로 전송하는 시스템을 구축합니다.",
    responsibilities: [
      "Project Planning",
      "UI/UX Design",
      "Maintenance",
    ],
    process: [
      "Field research & requirements",
      "Drone UI pattern exploration",
      "Flight interface prototype",
      "Field condition testing",
      "Iterative refinement",
      "Zoomable Worker integration",
    ],
    outcome:
      "자동화된 설정으로 시간과 비용을 절감하고, 정밀한 촬영과 분석으로 결함 탐지 정확도를 향상시켰습니다.",
    impactMetrics: [
      { value: "60%", label: "검사 시간 절감" },
      { value: "4면", label: "블레이드 전면 검사" },
      { value: "Auto", label: "자동 비행·촬영" },
      { value: "2yr", label: "지속적 운영·개선" },
    ],
    tags: ["Mobile", "AI", "Drone", "Wind Energy"],
    featured: false,
    gallery: [],
    hero: {
      label: "UX/UI Design",
      title: "NearthWind Mobile",
      description:
        "AI 드론 기반 풍력 터빈 블레이드 자동 검사·촬영 모바일 시스템",
      meta: [
        { label: "Role", value: "UX/UI Designer" },
        { label: "Duration", value: "2022–2024" },
        { label: "Platform", value: "Tablet" },
        { label: "Contribution", value: "Planning, Design, Maintenance" },
      ],
    },
  },
  {
    slug: "zoomable-worker",
    title: "Zoomable Worker",
    subtitle: "AI 기반 풍력 터빈 블레이드 검사 및 결함 관리 플랫폼",
    category: "UX/UI Design",
    domain: "Wind Energy · AI Inspection",
    platform: "Web",
    year: "2022–2024",
    duration: "2 years",
    role: "UX/UI Designer",
    team: "UX/UI Designer, PM, Frontend·Backend Developer, Deep Learning Engineer",
    summary:
      "AI와 드론 기술을 결합하여 풍력 터빈의 블레이드를 자동으로 검사하고 결함을 식별하는 최첨단 솔루션입니다. 고해상도 드론 이미지를 수집하고, AI 분석을 통해 결함을 빠르고 정확하게 탐지합니다.",
    problem:
      "풍력 터빈 블레이드 검사는 수작업에 의존하여 시간과 비용이 많이 들고, 결함 식별의 정확도가 낮아 유지보수 효율이 떨어졌습니다.",
    goal:
      "사용자 친화적인 인터페이스와 자동화된 보고서 생성 기능으로 시간과 비용을 절감하고, 다양한 환경에서 안전하고 효율적으로 운영할 수 있는 시스템을 구축합니다.",
    responsibilities: [
      "Project Planning",
      "User Interview",
      "Usability Testing",
      "UI/UX Design",
      "Maintenance",
    ],
    process: [
      "User research & interview",
      "Workflow mapping",
      "UI pattern exploration",
      "Interactive prototype",
      "Usability testing",
      "Design system alignment",
    ],
    outcome:
      "수작업 대비 검사 시간을 대폭 절감하고, AI 기반 결함 탐지 정확도를 향상시켜 운영 효율성을 높였습니다.",
    impactMetrics: [
      { value: "60%", label: "검사 시간 절감" },
      { value: "95%", label: "결함 탐지 정확도" },
      { value: "7", label: "핵심 기능 모듈" },
      { value: "2yr", label: "지속적 운영·개선" },
    ],
    tags: ["AI", "Wind Energy", "Inspection", "B2B SaaS"],
    featured: false,
    gallery: [],
    hero: {
      label: "UX/UI Design",
      title: "Zoomable Worker",
      description:
        "AI와 드론 기술을 결합한 풍력 터빈 블레이드 자동 검사·결함 관리 플랫폼",
      meta: [
        { label: "Role", value: "UX/UI Designer" },
        { label: "Duration", value: "2022–2024" },
        { label: "Platform", value: "Web" },
        { label: "Contribution", value: "Planning, Interview, UT, Design" },
      ],
    },
  },
  {
    slug: "zoomable-wind",
    title: "Zoomable Wind",
    subtitle: "풍력 점검 데이터를 조회를 넘어 분석, 리포트, 이력 추적, 운영 관리까지 확장한 플랫폼",
    category: "UX/UI Design",
    domain: "Wind Energy · Data Platform",
    platform: "Web",
    year: "2022–2024",
    duration: "2 years",
    role: "UX/UI Designer",
    team: "UX/UI Designer, Frontend Dev, Backend Dev, Deep Learning Engineer",
    summary:
      "Zoomable Wind는 Nearthlab의 디지털 솔루션 중 하나로 자을 드론에 의해 수집된 데이터를 클라우드 기반 데이터베이스로 효과적으로 관리합니다. 사용자는 Zoomable 내에서 초고해상도 사진을 통해 손상의 심각성과 위치에 따라 결함을 식별할 수 있습니다.",
    problem:
      "기존에는 사진 중심의 정보 조회만 제공하여 결함 데이터의 체계적 분석과 이력 추적이 어려웠습니다. 고객들은 결함만을 집중적으로 볼 수 있는 기능을 요구했습니다.",
    goal:
      "검사 데이터를 디지털화하여 분석 보고서로 변환하고 장기 검사 솔루션에서 활용할 수 있는 플랫폼을 구축합니다.",
    responsibilities: [
      "Project Planning",
      "UI/UX Design",
      "Maintenance",
    ],
    process: [
      "Customer research & requirements",
      "Information architecture",
      "UI pattern exploration",
      "Interactive prototype",
      "Usability testing",
      "Iterative improvement",
    ],
    outcome:
      "풍력 발전기 점검 데이터를 체계적으로 관리하고 분석할 수 있는 통합 플랫폼으로 자리잡아, 고객의 점검 및 유지보수 효율성을 대폭 향상시켰습니다.",
    impactMetrics: [
      { value: "400+", label: "관리 대상 터빈" },
      { value: "6", label: "핵심 기능 모듈" },
      { value: "2yr", label: "지속적 운영·개선" },
      { value: "12+", label: "글로벌 Wind Farm" },
    ],
    tags: ["Platform", "Data", "Wind Energy", "B2B SaaS"],
    featured: true,
    gallery: [],
    hero: {
      label: "UX/UI Design",
      title: "Zoomable Wind",
      description:
        "풍력 발전기 점검 데이터를 클라우드 기반으로 관리하고 분석하는 디지털 플랫폼",
      meta: [
        { label: "Role", value: "UX/UI Designer" },
        { label: "Duration", value: "2022–2024" },
        { label: "Platform", value: "Web" },
        { label: "Contribution", value: "Planning, Design, Maintenance" },
      ],
    },
  },
  {
    slug: "research-problem-framing",
    title: "Research & Problem Framing",
    subtitle: "운영 병목과 작업 흐름을 구조화해 Worker와 Wind의 출발점을 만든 선행 리서치 프로젝트",
    category: "UX Research",
    domain: "Wind Energy · Operations Research",
    platform: "Research",
    year: "2022–2023",
    duration: "6 months",
    role: "Product Designer / UX Researcher",
    team: "UX/UI Designer, PM, Field Engineers, Data Analysts",
    summary:
      "풍력 발전기 블레이드 결함 탐지 및 리포트 운영 구조를 분석하고, Zoomable Worker와 Zoomable Wind의 설계 출발점이 된 핵심 문제를 정의한 선행 프로젝트입니다.",
    problem:
      "현재 풍력 발전기 블레이드의 결함을 식별하고 관리하는 과정에서 중복 이미지, 낮은 PPA 신뢰도, 긴 작업 시간 등 다수의 운영 비효율이 발생하고 있었습니다.",
    goal:
      "데스크 리서치, 이해관계자 인터뷰, 프로세스 분석, 정량 검증을 통해 핵심 문제를 구조화하고, 제품 설계 방향을 도출합니다.",
    responsibilities: [
      "Desk Research",
      "Stakeholder Interview",
      "Workflow Analysis",
      "Quantitative Review",
      "Problem Framing",
    ],
    process: [
      "Desk research & literature review",
      "In-depth stakeholder interview",
      "AS-IS workflow mapping",
      "Quantitative data analysis",
      "Problem framing & opportunity mapping",
      "Design direction proposal",
    ],
    outcome:
      "4가지 핵심 문제를 정의하고, 이를 바탕으로 Zoomable Worker와 Zoomable Wind의 설계 방향을 수립했습니다.",
    impactMetrics: [
      { value: "56.5%", label: "이미지 수 감소" },
      { value: "55.7%", label: "작업 시간 감소" },
      { value: "85%", label: "리포트 생산 비용 감소" },
      { value: "4", label: "핵심 문제 정의" },
    ],
    tags: ["Research", "Strategy", "Problem Framing", "Wind Energy"],
    featured: true,
    gallery: [],
    hero: {
      label: "UX Research · Strategy",
      title: "Research & Problem Framing",
      description:
        "풍력 블레이드 검사 운영 구조를 분석하고 핵심 문제를 정의한 선행 프로젝트",
      meta: [
        { label: "Role", value: "Product Designer / UX Researcher" },
        { label: "Duration", value: "2022–2023" },
        { label: "Scope", value: "Research · Strategy · Problem Framing" },
        { label: "Outcome", value: "→ Zoomable Worker · Zoomable Wind" },
      ],
    },
  },
];

export function getProjectBySlug(
  slug: string
): ProjectDetail | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getFeaturedProjects(): ProjectDetail[] {
  return PROJECTS.filter((p) => p.featured);
}
