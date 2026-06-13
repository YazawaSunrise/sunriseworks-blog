import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: "矢澤 サンライズ",
  bio: "不会摄影的涂装不是好原型",
  typewriter: {
    enable: true, // 启用个人简介打字机效果
    speed: 80, // 打字速度（毫秒）
  },
  links: [
    {
      name: "Bilibili",
      icon: "fa7-brands:bilibili",
      url: "https://space.bilibili.com/32883655",
    },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      url: "https://x.com/Yazawa_Sunrise",
    },
    {
      name: "GitHub",
      icon: "fa7-brands:github",
      url: "https://github.com/matsuzaka-yuki",
    },
  ],
};
