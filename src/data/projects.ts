// Project data configuration file
// Used to manage data for the project display page

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "Figure" | "Software" | "ZZZ" | "other";
  techStack: string[];
  status: "completed" | "in-progress" | "planned";
  liveDemo?: string;
  sourceCode?: string;
  visitUrl?: string;
  startDate: string;
  endDate?: string;
  featured?: boolean;
  tags?: string[];
  showImage?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "illuTag",
    title: "illuTag",
    description: "更适合二次元体质的图像管理器",
    image: "/assets/projects/128x128@2x.png",
    category: "Software",
    techStack: ["Vibe Coding"],
    status: "completed",
    sourceCode: "https://github.com/YazawaSunrise/illuTag",

    startDate: "2026-05-01",
    endDate: "2026-05-31",
  },
  {
    id: "seed",
    title: "花之谷的芙罗拉",
    description: "在做了（咕）",
    image: "/assets/projects/Flora.jpg",
    category: "Figure",
    techStack: ["ZBrush", "Blender"],
    status: "in-progress",

    visitUrl: "https://x.com/Yazawa_Sunrise/status/2064361423313207389",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
  },
  {
    id: "yuzuha",
    title: "浮波柚叶-彩糖花火",
    description: "毛衣怎么这么难做我要死了",
    image: "/assets/projects/yuzuha.jpg",
    category: "Figure",
    techStack: ["ZBrush", "Blender"],
    status: "in-progress",

    visitUrl: "https://x.com/Yazawa_Sunrise/status/2064619632959660207",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
  },
  {
    id: "orchis-link-heart",
    title: "奥契丝-连结之心",
    description: "cy何时复刻奥契丝",
    image: "/assets/projects/orchis-link-heart.png",
    category: "Figure",
    techStack: ["ZBrush", "Blender"],
    status: "in-progress",

    visitUrl: "https://x.com/Yazawa_Sunrise/status/2065360854527439338",
    startDate: "2026-05-01",
    endDate: "2026-05-31",
  },
];

// Get project statistics
export const getProjectStats = () => {
  const total = projectsData.length;
  const completed = projectsData.filter((p) => p.status === "completed").length;
  const inProgress = projectsData.filter(
    (p) => p.status === "in-progress",
  ).length;
  const planned = projectsData.filter((p) => p.status === "planned").length;

  return {
    total,
    byStatus: {
      completed,
      inProgress,
      planned,
    },
  };
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
  if (!category || category === "all") {
    return projectsData;
  }
  return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
  const techSet = new Set<string>();
  projectsData.forEach((project) => {
    project.techStack.forEach((tech) => {
      techSet.add(tech);
    });
  });
  return Array.from(techSet).sort();
};
