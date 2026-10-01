import strategyImage from "@/assets/project-strategy.jpg";
import dataImage from "@/assets/project-data.jpg";
import growthImage from "@/assets/project-growth.jpg";
import healthcheckAsset from "@/assets/portfolio-healthcheck.png.asset.json";
import ecommerceDashboardAsset from "@/assets/portfolio-master-ecommerce.png.asset.json";
import financialDashboardAsset from "@/assets/portfolio-master-financial.png.asset.json";
import bcgMatrixImage from "@/assets/bcg-matrix-editorial.png";

export type ProjectIcon = "health" | "dashboard" | "matrix" | "model" | "customer" | "automation" | "value" | "market" | "sales";

export type Project = {
  title: string;
  icon: ProjectIcon;
  images: string[];
  star: { situation: string; task: string; action: string; result: string };
};

const baseStar = {
  situation: "The business needed a clearer, repeatable way to turn fragmented customer and operational signals into confident decisions.",
  task: "Frame the opportunity, align stakeholders, and define a measurable plan that could work across teams and markets.",
  action: "Mapped the journey, analyzed the available data, facilitated working sessions, and translated insights into a prioritized roadmap.",
  result: "A practical operating model, stronger cross-functional alignment, and a clear measurement framework for the next phase.",
};

export const countryProjects: Record<string, Project[]> = {
  Germany: [
    { title: "Portfolio Healthcheck Program", icon: "health", images: [healthcheckAsset.url], star: { situation: "Portfolio leaders needed a consistent way to identify product health risks before they affected adoption and growth.", task: "Create a recurring healthcheck that connects product, customer, and commercial signals.", action: "Defined a shared assessment framework, aligned stakeholders on indicators, and translated findings into focused action plans.", result: "Established a repeatable portfolio review rhythm with clearer ownership and earlier intervention." } },
    { title: "Portfolio Master Dashboard", icon: "dashboard", images: [ecommerceDashboardAsset.url, financialDashboardAsset.url], star: { situation: "Portfolio data was fragmented across more than ten sources, limiting visibility and slowing monthly analysis.", task: "Create one trusted view of portfolio performance for faster leadership decisions.", action: "Integrated 10+ data sources using Excel Power Query and structured the metrics into clear commercial and financial views.", result: "Delivered a single source of truth for recurring portfolio reviews and performance discussions." } },
    { title: "BCG Matrix of Customer Growth", icon: "matrix", images: [bcgMatrixImage], star: { situation: "SAP's portfolio spans 1,000+ products, with no unified view of which products deserve continued investment and which are underperforming.", task: "Delivered the monthly Portfolio Review to support data-driven resource allocation decisions.", action: "Mapped products onto a BCG Matrix, positioning Stars (invest), Cash Cows (harvest), Question Marks (evaluate), and Poor Dogs (divest) to produce a performance benchmark.", result: "Identified which products to accelerate, maintain, and exit across the portfolio." } },
  ],
  Thailand: [
    { title: "Salesforce Data Cloud Data Modeling", icon: "model", images: [dataImage], star: { situation: "Customer data lived across disconnected systems, making activation and reporting inconsistent.", task: "Design a scalable Salesforce Data Cloud model for unified customer intelligence.", action: "Mapped source objects, defined identity rules, and structured calculated insights around priority use cases.", result: "Created a reliable data foundation for segmentation, personalization, and measurement." } },
    { title: "Unified Customer 360 Profile", icon: "customer", images: [growthImage], star: { ...baseStar, task: "Create a practical Customer 360 view that teams could use across channels.", action: "Connected customer identifiers, lifecycle signals, engagement history, and commercial attributes into one profile." } },
    { title: "Pardot Automation Scoring and Grading", icon: "automation", images: [strategyImage], star: { situation: "Sales teams lacked a consistent way to distinguish engagement from customer fit.", task: "Design a transparent lead scoring and grading model in Pardot.", action: "Mapped behavioral signals and profile criteria, then defined thresholds, routing rules, and nurture triggers.", result: "Improved lead prioritization and gave marketing and sales a shared qualification framework." } },
  ],
  Vietnam: [
    { title: "Customer Value Program", icon: "value", images: [strategyImage], star: baseStar },
    { title: "Marketplace Expansion", icon: "market", images: [growthImage], star: baseStar },
    { title: "Sales Excellence", icon: "sales", images: [dataImage], star: baseStar },
  ],
};
