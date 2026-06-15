// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string; // Iconify icon name
  category:
    | "frontend"
    | "backend"
    | "database"
    | "tools"
    | "3D"
    | "creative"
    | "创作"
    | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert" | "菜鸡";
  experience: {
    years: number;
    months: number;
  };
  projects?: string[]; // Related project IDs
  certifications?: string[];
  color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
  // Frontend Skills
  {
    id: "zbrush",
    name: "ZBrush",
    description: "ZBrush已崩溃",
    icon: "file-icons:zbrush",
    category: "3D",
    level: "菜鸡",
    experience: { years: 0, months: 0 },
    // projects: ["mizuki-blog", "portfolio-website", "data-visualization-tool"],
    color: "#000000",
  },
  {
    id: "blender",
    name: "Blender",
    description: "3D资产格式转化器",
    icon: "simple-icons:blender",
    category: "3D",
    level: "菜鸡",
    experience: { years: 0, months: 0 },
    color: "#E87D0D",
  },
  {
    id: "vibe-coding",
    name: "Vibe Coding",
    description: "豆包，帮我点一份疯狂星期四",
    icon: "arcticons:openai-chatgpt",
    category: "tools",
    level: "菜鸡",
    experience: { years: 0, months: 0 },
    color: "#22C55E",
  },
  {
    id: "spray-painting",
    name: "喷涂",
    description: "王牌代工在线接单.jpg",
    icon: "mdi:paint-outline",
    category: "创作",
    level: "菜鸡",
    experience: { years: 0, months: 0 },
    color: "#34d0b1",
  },
  {
    id: "style3d",
    name: "Style3D",
    description: "老大我们真的跑得动布料模拟吗",
    icon: "material-symbols:apparel",
    category: "3D",
    level: "菜鸡",
    experience: { years: 0, months: 0 },
    color: "#2563EB",
  },
  {
    id: "Adobe illustrator",
    name: "Adobe Illustrator",
    description: "滚滚长江东逝水（谁帮我画水贴）",
    icon: "simple-icons:adobeillustrator",
    category: "创作",
    level: "菜鸡",
    experience: { years: 0, months: 0 },
    color: "#eb6425",
  },
];
