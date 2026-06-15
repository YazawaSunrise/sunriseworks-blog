import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
  title: "网站建设中！！！", // 公告标题，填空使用i18n字符串Key.announcement
  content:
    "上海WF确认参展 \n 绝区零:柚叶&席德，原型展示 \n 奥契丝版权申请中，原型展示 \n 486版权申请不到中，展示&贩卖", // 公告内容
  closable: false, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "Learn More", // 链接文本
    url: "https://x.com/Yazawa_Sunrise", // 链接 URL
    external: true, // 内部链接
  },
};
