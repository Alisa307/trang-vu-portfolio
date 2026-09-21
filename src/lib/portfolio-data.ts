import strategyImage from "@/assets/project-strategy.jpg";
import dataImage from "@/assets/project-data.jpg";
import growthImage from "@/assets/project-growth.jpg";
import sapLogoAsset from "@/assets/sap-logo.svg.asset.json";
import bcgMatrixAsset from "@/assets/project-bcg-matrix.png.asset.json";
import type { Project } from "@/components/portfolio/project-card";

const baseStar = {
  situation: "The business needed a clearer, repeatable way to turn fragmented customer and operational signals into confident decisions.",
  task: "Frame the opportunity, align stakeholders, and define a measurable plan that could work across teams and markets.",
  action: "Mapped the journey, analyzed the available data, facilitated working sessions, and translated insights into a prioritized roadmap.",
  results: "A practical operating model, stronger cross-functional alignment, and a clear measurement framework for the next phase.",
};

export const countryProjects: Record<string, Project[]> = {
  Germany: [
    { title: "Portfolio Master Dashboard", discipline: "SAP", logo: sapLogoAsset.url, summary: "Integrated 10+ data sources using Excel Power Query.", image: growthImage, star: baseStar },
    { title: "Claude Code RAG System", discipline: "SAP", logo: sapLogoAsset.url, summary: "Connected Claude Code with the Portfolio Master knowledge graph via SAP MCP and designed retrieval logic for customer adoption and retention questions.", image: dataImage, star: { ...baseStar, task: "Design reliable retrieval logic for customer adoption and retention questions.", action: "Connected Claude Code with the Portfolio Master knowledge graph via SAP MCP." } },
    { title: "BCG Matrix of Adoption & Customer Growth", discipline: "SAP", logo: sapLogoAsset.url, summary: "Designed a semantic model defining Adoption Rate and Customer Growth benchmarks to categorize products into a BCG Matrix.", image: strategyImage, detailImage: bcgMatrixAsset.url, star: { situation: "SAP's portfolio spans 1,000+ products, with no unified view of which products deserve continued investment and which are underperforming.", task: "Delivered the monthly Portfolio Review to support data-driven resource allocation decisions.", action: "Mapped products onto a BCG Matrix, positioning Stars, Cash Cows, Question Marks, and Poor Dogs to produce a performance benchmark.", results: "Identified which products to accelerate, maintain, and exit across the portfolio." } },
  ],
  Thailand: [
    { title: "Omnichannel CRM", discipline: "CRM Strategy", summary: "A customer lifecycle and personalization blueprint across digital and retail.", image: dataImage, star: { ...baseStar, action: "Segmented customer behaviors, mapped lifecycle moments, and designed testable journeys with clear success measures." } },
    { title: "Healthcare Growth", discipline: "Product Strategy", summary: "A service-growth plan grounded in patient needs and operational realities.", image: growthImage, star: baseStar },
    { title: "Commercial Analytics", discipline: "Data & Insights", summary: "A leadership view translating sales signals into weekly commercial actions.", image: strategyImage, star: baseStar },
  ],
  Vietnam: [
    { title: "Customer Value Program", discipline: "E-commerce", summary: "A value-based retention program for high-potential customer segments.", image: strategyImage, star: baseStar },
    { title: "Marketplace Expansion", discipline: "Go-to-Market", summary: "A category and partner strategy built for disciplined regional scale.", image: growthImage, star: baseStar },
    { title: "Sales Excellence", discipline: "Sales Operations", summary: "A practical performance system for a fast-growing commercial team.", image: dataImage, star: baseStar },
  ],
};
