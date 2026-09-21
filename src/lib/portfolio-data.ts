import strategyImage from "@/assets/project-strategy.jpg";
import dataImage from "@/assets/project-data.jpg";
import growthImage from "@/assets/project-growth.jpg";
import type { Project } from "@/components/portfolio/project-card";

const baseStar = {
  situation: "The business needed a clearer, repeatable way to turn fragmented customer and operational signals into confident decisions.",
  task: "Frame the opportunity, align stakeholders, and define a measurable plan that could work across teams and markets.",
  action: "Mapped the journey, analyzed the available data, facilitated working sessions, and translated insights into a prioritized roadmap.",
  results: "A practical operating model, stronger cross-functional alignment, and a clear measurement framework for the next phase.",
};

export const countryProjects: Record<string, Project[]> = {
  Germany: [
    { title: "European Market Entry", discipline: "Growth Strategy", summary: "A data-led market prioritization and launch plan for European expansion.", image: growthImage, star: baseStar },
    { title: "AI Product Discovery", discipline: "Product Management", summary: "Turning customer pain points into a focused AI-enabled product opportunity.", image: dataImage, star: { ...baseStar, task: "Define the highest-value AI use cases while balancing user needs, feasibility, and responsible adoption." } },
    { title: "Revenue Operating Model", discipline: "Sales Operations", summary: "A scalable commercial rhythm connecting pipeline, forecasting, and decisions.", image: strategyImage, star: { ...baseStar, results: "A shared revenue cadence and decision framework designed to improve forecast confidence and ownership." } },
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
