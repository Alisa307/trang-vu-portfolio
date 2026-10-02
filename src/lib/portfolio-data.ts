import healthcheckProcessImage from "@/assets/project-sap-healthcheck-process-clean.jpg";
import masterDashboardImage from "@/assets/project-sap-master-dashboard.jpg";
import bcgMatrixImage from "@/assets/project-sap-bcg-matrix.png";
import sapLogo from "@/assets/logo-sap.png";
import beryl8Logo from "@/assets/logo-beryl8.png";
import salesforceLogo from "@/assets/logo-salesforce.png";
import shopeeLogo from "@/assets/logo-shopee.png";
import tuDarmstadtLogo from "@/assets/logo-tu-darmstadt.png";
import ftuLogo from "@/assets/logo-ftu.png";
import etalyticsLogo from "@/assets/logo-etalytics.png";
import aonicLogo from "@/assets/logo-aonic.png";
import researchLogisticPaperImage from "@/assets/project-research-logistic-paper.png";
import researchInsightsFlowImage from "@/assets/project-research-customer-insights-flow.png";
import mediflowSolutionImage1 from "@/assets/project-mediflow-solution-1.png";
import mediflowSolutionImage2 from "@/assets/project-mediflow-solution-2.png";
import haynestImage1 from "@/assets/project-haynest-1.jpg";
import haynestImage2 from "@/assets/project-haynest-2.jpg";
import noMoreLiesPosterImage from "@/assets/project-nomorelies-poster.jpg";
import avatarKubik from "@/assets/avatar-kubik.png";
import avatarPedutem from "@/assets/avatar-pedutem.png";
import avatarBandojo from "@/assets/avatar-bandojo.png";
import aonicDaiveImage1 from "@/assets/project-aonic-daive-1.png";
import aonicDaiveImage2 from "@/assets/project-aonic-daive-2.png";
import beryl8Customer360Image1 from "@/assets/project-beryl8-customer360-1.png";
import beryl8Customer360Image2 from "@/assets/project-beryl8-customer360-2.png";
import beryl8PardotImage1 from "@/assets/project-beryl8-pardot-1.png";
import beryl8PardotImage2 from "@/assets/project-beryl8-pardot-2.png";
import beryl8DataCloudImage1 from "@/assets/project-beryl8-datacloud-1.png";
import beryl8DataCloudImage2 from "@/assets/project-beryl8-datacloud-2.png";
import shopeeStrategyImage from "@/assets/project-shopee-strategy.png";
import shopeeGlobalThailandImage from "@/assets/project-shopee-global-thailand.png";
import shopeeGlobalIndonesiaImage from "@/assets/project-shopee-global-indonesia.png";
import shopeeGlobalTaiwanImage from "@/assets/project-shopee-global-taiwan.png";
import shopeeBacklogJiraImage from "@/assets/project-shopee-backlog-jira.png";
import shopeeBacklogCashbackImage from "@/assets/project-shopee-backlog-cashback.png";
import shopeeBacklogVouchersImage from "@/assets/project-shopee-backlog-vouchers.png";
import shopeeBacklogChallengeImage from "@/assets/project-shopee-backlog-challenge.png";

export type ProjectIcon = "health" | "dashboard" | "matrix" | "model" | "customer" | "automation" | "value" | "market" | "sales";

type CollageImage = { src: string; alt: string; x: number; y: number; w: number; h: number; crop?: { l?: number; t?: number; r?: number; b?: number } };
type CollageCaption = { text: string; x: number; y: number; w: number; h: number };

// x/y/w/h are percentages of the collage box, taken from the original slide layout.
export type Collage = { aspect: number; items: (CollageImage | CollageCaption)[] };

export type Project = {
  title: string;
  icon: ProjectIcon;
  images?: string[];
  collage?: Collage;
  imageTitle?: string;
  headline?: { title: string; points: string[] };
  star?: { situation: string; action: string; result: string };
};

export type WorkSection = {
  id: string;
  name: string;
  logos: { src: string; alt: string }[];
  projects: Project[];
};

export const workSections: WorkSection[] = [
  {
    id: "germany",
    name: "SAP SE Germany",
    logos: [{ src: sapLogo, alt: "SAP" }],
    projects: [
      { title: "Portfolio Master Dashboard", icon: "dashboard", images: [masterDashboardImage], imageTitle: "Portfolio Master Dashboard", headline: { title: "Built the Portfolio Master Dashboard for product trend and competitor monitoring", points: ["Integrated **10+ data sources** into Excel and SAP Data Cloud.", "Provided Senior Executives with a **unified portfolio view** and investment priorities."] } },
      { title: "Portfolio Healthcheck Program", icon: "health", images: [healthcheckProcessImage], imageTitle: "Portfolio Healthcheck Process", headline: { title: "Supported the steering of Portfolio Healthcheck across 9 Lines of Business", points: ["Collaborated with portfolio partners to design **Portfolio Healthcheck Process** and consolidate product insights.", "Analyzed commercial data to build **Product Watchlist** and recommend **lift and shift decisions**."] } },
      { title: "BCG Matrix of Customer Growth", icon: "matrix", images: [bcgMatrixImage], star: { situation: "SAP's portfolio spans 1,000+ products, with no unified view of which products deserve continued investment and which are underperforming.", action: "Mapped products onto a BCG Matrix, positioning Stars (invest), Cash Cows (harvest), Question Marks (evaluate), and Poor Dogs (divest) to produce a performance benchmark.", result: "Identified which products to accelerate, maintain, and exit across the portfolio." } },
    ],
  },
  {
    id: "thailand",
    name: "Beryl8 Thailand",
    logos: [
      { src: beryl8Logo, alt: "Beryl8" },
      { src: salesforceLogo, alt: "Salesforce" },
    ],
    projects: [
      { title: "Salesforce Data Cloud Data Modeling", icon: "model", collage: { aspect: 1.102, items: [
        { src: beryl8DataCloudImage2, alt: "Data Cloud customer profile", x: 2.64, y: 2.91, w: 94.27, h: 37.33, crop: { b: 0.14493 } },
        { src: beryl8DataCloudImage1, alt: "Data Lake object mapping", x: 2.64, y: 42.25, w: 94.73, h: 54.84 },
      ] }, star: { situation: "A client needed to unify customer data across ERP, CRM, Marketing Cloud, events, and HCP systems to unlock advanced segmentation.", action: "Ran workshops with IT and business teams to identify data sources, transformed data into DLOs and built Profile and Engagement DMOs, and configured reconciliation rules to merge duplicate customer profiles.", result: "Contributed to securing the client deal, and learned the importance of data auditing and data mapping prioritization." } },
      { title: "Unified Customer 360 Profile", icon: "customer", collage: { aspect: 1.125, items: [
        { src: beryl8Customer360Image1, alt: "Individual Customer 360 summary", x: 2.64, y: 2.97, w: 94.71, h: 59.88 },
        { src: beryl8Customer360Image2, alt: "Convert Lead flow", x: 2.64, y: 65.89, w: 94.71, h: 31.13 },
      ] }, star: { situation: "A client wanted to enrich customer profiles in Sales Cloud to closely track sales activity and send targeted marketing content.", action: "Mapped SAP data objects to Salesforce data objects, built and tested a middleware REST API with developers, and configured Journey Builder event triggers around customer segments.", result: "Finished the project in four months, and learned how to configure API calls and engagement event triggers." } },
      { title: "Pardot Automation Scoring and Grading", icon: "automation", collage: { aspect: 1.203, items: [
        { src: beryl8PardotImage1, alt: "Pardot automation rules for prospects", x: 2.61, y: 3.13, w: 94.37, h: 57.96 },
        { src: beryl8PardotImage2, alt: "Pardot NPS dashboard", x: 3.27, y: 67.75, w: 94.13, h: 29.12, crop: { b: 0.54335 } },
      ] }, star: { situation: "A client wanted to implement lead scoring and segmentation in Pardot B2B Marketing and centralize pipeline reporting in Tableau.", action: "Defined scoring models based on sales activity, built automation conditions to trigger email sends, collected users' requirements, and designed and visualized the data model in Tableau.", result: "Received strong feedback and extended project contracts from the client, and learned to configure Pardot and Tableau with localized rules for different markets." } },
    ],
  },
  {
    id: "vietnam",
    name: "Shopee Vietnam",
    logos: [{ src: shopeeLogo, alt: "Shopee" }],
    projects: [
      { title: "Program Strategy and Vision Design", icon: "value", collage: { aspect: 0.984, items: [
        { src: shopeeStrategyImage, alt: "Shopee Loyalty program screens", x: 3.05, y: 3, w: 93.9, h: 94 },
      ] }, star: { situation: "After a low-performing first launch, leadership challenged the team on how and when the Loyalty Program could become a profitable product and open a new revenue stream.", action: "Worked with User Research, CS, and BI teams on surveys, interviews, and competitor analysis; redesigned tier qualification criteria to grow the Gold and Platinum base; and introduced a paid Tailored Voucher Package of exclusive, tier-specific vouchers.", result: "Achieved a sales uplift and significantly higher retention with the new revenue source, and learned the iterative learning cycle of building product-market fit." } },
      { title: "Global Extension to 4 Markets", icon: "market", collage: { aspect: 1.043, items: [
        { src: shopeeGlobalThailandImage, alt: "Loyalty Thailand", x: 2.77, y: 2.89, w: 37.52, h: 36.92 },
        { src: shopeeGlobalIndonesiaImage, alt: "Loyalty Indonesia", x: 43.15, y: 2.89, w: 54.08, h: 36.92, crop: { l: 0.07645, r: 0.08154 } },
        { src: shopeeGlobalTaiwanImage, alt: "Loyalty Taiwan", x: 2.77, y: 45.63, w: 94.45, h: 46.41 },
        { text: "Loyalty Thailand", x: 7.99, y: 40.41, w: 26.03, h: 4.77 },
        { text: "Loyalty Indonesia", x: 51.58, y: 40.41, w: 37.52, h: 4.77 },
        { text: "Loyalty Taiwan", x: 34.38, y: 92.34, w: 26.03, h: 4.77 },
      ] }, star: { situation: "Following the success of Loyalty Vietnam, leadership decided to expand the program to Thailand, Indonesia, the Philippines, and Taiwan.", action: "Documented the Loyalty playbook and ran enablement sessions to transfer strategy and operations know-how, localized tier thresholds and voucher values to match local spending behavior, and coordinated with Product to keep features scalable and configurable across markets.", result: "Scaled Shopee Rewards from 1 to 5 countries, and learned that strategic know-how, operational steps, and market understanding are success factors for global rollouts." } },
      { title: "Product Backlog Prioritization in Jira", icon: "dashboard", collage: { aspect: 1.109, items: [
        { src: shopeeBacklogJiraImage, alt: "Jira backlog board", x: 2.77, y: 3.07, w: 94.42, h: 44.36 },
        { src: shopeeBacklogCashbackImage, alt: "Shopee Rewards cashback screen", x: 2.77, y: 50.4, w: 35.24, h: 46.52, crop: { b: 0.1001 } },
        { src: shopeeBacklogVouchersImage, alt: "Loyalty voucher redemption screen", x: 38.41, y: 50.4, w: 27.86, h: 45.96, crop: { b: 0.11097 } },
        { src: shopeeBacklogChallengeImage, alt: "Shopee Rewards challenge screen", x: 66.27, y: 50.11, w: 30.96, h: 46.81 },
      ] }, star: { situation: "The newly launched product had limited development, BA, and QA/AC resources to work with.", action: "Ranked backlog items by business impact, development effort, and strategic alignment, then conducted UAT and go-live testing iteratively across sprints while reporting weekly progress and commercial performance.", result: "Managed to launch the program after six months with must-have features in place to gather user feedback, and learned the importance of trade-offs and continuous improvement in product development." } },
    ],
  },
];

export type EducationEntry = {
  school: string;
  location: string;
  degree: string;
  note: string;
  period: string;
  logo: string;
  points: string[];
};

export const educationEntries: EducationEntry[] = [
  {
    school: "TU Darmstadt",
    location: "Darmstadt, Germany",
    degree: "MSc. Entrepreneurship and Innovation Management",
    note: "The top 9 technical universities in Germany (TU9)",
    period: "April 2024 – December 2026",
    logo: tuDarmstadtLogo,
    points: [
      "Courses: Digital Healthcare: AI in Radiology, Technology & Innovation, Digital Transformation, Project and Portfolio Management, Entrepreneur Finance, Venture Creation.",
      "Current GPA: **1.7/4.0 (Gut)**",
    ],
  },
  {
    school: "Foreign Trade University",
    location: "Hanoi, Vietnam",
    degree: "BSc. International Economics",
    note: "Vietnam's top economics university",
    period: "August 2015 – September 2020",
    logo: ftuLogo,
    points: ["Courses: Data Analytics, Microeconometrics with R Studio."],
  },
];

export type ProfileProject = {
  tabTitle: string;
  icon: "insights" | "quant" | "venture" | "ai" | "home" | "community";
  logo?: string;
  org?: string;
  location?: string;
  role?: string;
  note?: string;
  points?: string[];
  image?: string;
  grayscale?: boolean;
  steps?: { label: string; text?: string; points?: string[] }[];
  collage?: Collage;
  imageTitle?: string;
};

export const researchProjects: ProfileProject[] = [
  {
    tabTitle: "AI-based Customer Insights",
    icon: "insights",
    org: "etalytics GmbH",
    location: "Darmstadt, Germany",
    role: "Master Thesis Student",
    note: "AI platform for energy management – clients: Merck, NTT, Equinix, Telehouse",
    logo: etalyticsLogo,
    image: researchInsightsFlowImage,
    imageTitle: "AI-based Customer Insights",
    points: [
      "**Thesis Topic:** \"The impact of AI insights from customer meetings on management decision-making quality in a software startup\"",
      "**Generated customer insights from client meetings to support management decisions** by integrating HubSpot and internal documents with Claude AI.",
      "**Improved Accuracy and Relevance of AI-insights** by applying prompt engineering and ground-truth examples; validated quality through surveys and interviews.",
    ],
  },
  {
    tabTitle: "Logistic Regression Model",
    icon: "quant",
    org: "Technology and Innovation Project",
    location: "Darmstadt, Germany",
    role: "Quantitative Analyst",
    note: "Top 1 research paper of the semester with 1.0/4.0 Grade",
    logo: tuDarmstadtLogo,
    image: researchLogisticPaperImage,
    imageTitle: "Logistic Regression Model",
    points: [
      "**Engineered variables, built data models using R Studio, and ran logistic regression models** to analyze causal effects between automated complication monitoring and performance.",
    ],
  },
  {
    tabTitle: "AI-based Learning Platform",
    icon: "venture",
    logo: aonicLogo,
    org: "AONIC GmbH",
    location: "Darmstadt, Germany",
    role: "Innovation Coordination",
    note: "Top 2 best innovation project of the semester with 1.3/4.0 Grade",
    steps: [
      { label: "Situation", text: "Develop a new product and business model to help German companies to launch Smart Factory." },
      { label: "Action", points: ["Market Research & Competitor Analysis", "Apply the Design Thinking Model to define customer needs and underserved market gaps", "Build Prototypes & Business Models"] },
      { label: "Result", text: "Good customer feedback and was invited to present solutions to the AONIC's consultant team. Get Market & Business Sense about the Manufacturing Industry in Germany." },
    ],
    imageTitle: "AI Learning Platform of Manufacturing & Big Data",
    collage: {
      aspect: 0.7546,
      items: [
        { src: aonicDaiveImage1, alt: "DAIVE learning platform: Level 1 Beginner course overview", x: 2.85, y: 2.15, w: 94.29, h: 46.28 },
        { src: aonicDaiveImage2, alt: "DAIVE learning platform: course module and lecture view", x: 2.85, y: 51.56, w: 94.29, h: 46.28 },
      ],
    },
  },
];

export const entrepreneurialProjects: ProfileProject[] = [
  {
    tabTitle: "Patient Check-in AI Solution",
    icon: "ai",
    org: "MediFlow",
    location: "Darmstadt, Germany",
    role: "Co-developer & Strategy Executive",
    note: "Top 2 best Startup Ideas in Darmstadt Community 2026",
    points: [
      "**Co-developed MediFlow, a patient check-in AI solution for hospitals** with an adaptive symptom questionnaire based on patient data, contributing to reduce language barrier and the clinical administration time.",
      "**Created the financial plan for a €500k funding round** by defining a recurring revenue model with a target gross margin and pricing strategy to grow the start-up.",
    ],
    imageTitle: "Patient Check-in AI Solution",
    collage: {
      aspect: 0.8627,
      items: [
        { src: mediflowSolutionImage1, alt: "MediFlow solution: AI assistant and digital medical report", x: 3, y: 2.59, w: 94, h: 45.29 },
        { src: mediflowSolutionImage2, alt: "MediFlow solution: medical staff receives the digital medical report", x: 3, y: 51.33, w: 94, h: 46.09 },
      ],
    },
  },
  {
    tabTitle: "HayNest Homestay",
    icon: "home",
    org: "HayNest Homestay",
    location: "Hanoi, Vietnam",
    role: "Co-founder & Operations Lead",
    points: ["**Founded and managed 3 homestays in Hanoi** with 80%+ monthly booking and 4.8/5.0 reviews on Airbnb for good service and operations."],
    imageTitle: "HayNest Homestay",
    collage: {
      aspect: 0.7384,
      items: [
        { src: haynestImage1, alt: "HayNest Homestay common area with arched alcoves and bar counter", x: 3, y: 2.22, w: 94, h: 46.3 },
        { src: haynestImage2, alt: "HayNest Homestay living room", x: 3, y: 51.47, w: 94, h: 46.32 },
      ],
    },
  },
  {
    tabTitle: "No More Lies Marketing Community",
    icon: "community",
    org: "No More Lies Marketing Community",
    role: "Co-founder and Marketing Trainer",
    points: ["**Delivered 20+ digital marketing courses for 600+ university students in Vietnam**, equipping them with job-ready skills to enter workforce."],
    image: noMoreLiesPosterImage,
    imageTitle: "Digital Marketing Workshop",
    grayscale: true,
  },
];

export const linkedinProfileUrl = "https://www.linkedin.com/in/vantrang307/";
export const linkedinRecommendationsUrl = "https://www.linkedin.com/in/vantrang307/details/recommendations/?detailScreenTabIndex=0";

export type Reference = {
  name: string;
  title: string;
  context: string;
  avatar: string;
  paragraphs: string[];
};

export const references: Reference[] = [
  {
    name: "Dr. Christian Kubik",
    title: "Data, AI & Automation in Manufacturing",
    context: "March 25, 2025, Dr. Christian managed Alisa directly",
    avatar: avatarKubik,
    paragraphs: [
      "I was able to work with Alisa as part of the \"Project in Entrepreneurship and Innovation Management\" on the topic of AI-driven manufacturing at TU Darmstadt. In close cooperation with AONIC GmbH, the team developed the DAIVE learning platform, which trains employees in the manufacturing industry specifically in the area of AI on the shop floor. Alisa played a central role in the conceptualisation of the service offering and demonstrated outstanding skills in innovation and project management.",
      "Particularly noteworthy is her strategic vision in the application of design thinking, market analyses and the development of a viable business model. Alisa combined technological expertise with a deep understanding of market needs to create real added value - both for AONIC and for potential industrial customers.",
      "Through this project, Alisa not only gained in-depth knowledge of entrepreneurship & innovation management, but also demonstrated how sophisticated AI solutions can drive real transformation in the industry.",
      "I can fully recommend Alisa for projects at the interface of AI technology, innovation and business.",
    ],
  },
  {
    name: "Jeth Pedutem",
    title: "Senior Salesforce Multi-Cloud Consultant | Data Cloud (Data360), Marketing Cloud & CRM Expert | Delivering Scalable, Data-Driven Customer Experience Solutions",
    context: "January 9, 2025, Jeth was senior to Alisa but didn’t manage Alisa directly",
    avatar: avatarPedutem,
    paragraphs: [
      "I had the pleasure of working with Alisa on several projects at Beryl8, and she was honestly amazing to work with. She’s super patient and always takes the time to really get what her clients are about—what they do, what they need, and what actually makes sense for them. That’s why her Salesforce solutions always feel so spot-on and practical.",
      "What I love about Alisa is how supportive she is. She’s the kind of teammate who’s always got your back and helps keep everything running smoothly. Plus, she’s great at bringing people together—whether it’s the team or the clients—and making sure everyone’s on the same page. Her communication style is so thoughtful, like she really gets where people are coming from, which makes working with her such a breeze.",
      "If you’re looking for someone who’s not only talented but also genuinely great to work with, Alisa’s your person. She makes work better for everyone involved!",
    ],
  },
  {
    name: "Jizelle Bandojo",
    title: "Senior Solutions Delivery Manager for Salesforce Marketing Cloud | Salesforce Certified | MarTech",
    context: "January 8, 2025, Jizelle managed Alisa directly",
    avatar: avatarBandojo,
    paragraphs: [
      "I had the pleasure of working with Alisa at Beryl8 where she demonstrated her exceptional communication skills, work ethic, and adaptability.",
      "Alisa’s ability to communicate effectively with customers and the internal team, is paired with her ability to listen actively, ask probing questions, and address concerns thoughtfully, clearly, and concisely.",
      "As someone quick to learn and proactive, she adapts to new challenges very well and is eager to take on new tasks and responsibilities, applying new knowledge to provide applicable Salesforce solutions for her customers’ needs.",
      "Whether working on tight deadlines or under pressure, Alisa consistently balances quality and efficiency in her work and is someone who can be relied on.",
    ],
  },
];

export type ContactItem = {
  icon: "linkedin" | "email" | "phone" | "location";
  label: string;
  href?: string;
};

export const contactItems: ContactItem[] = [
  { icon: "linkedin", label: "Alisa Vu", href: linkedinProfileUrl },
  { icon: "email", label: "alisavu307@gmail.com", href: "mailto:alisavu307@gmail.com" },
  { icon: "phone", label: "+49 152 2286 9233", href: "tel:+4915222869233" },
  { icon: "location", label: "Hessen, Germany" },
];
