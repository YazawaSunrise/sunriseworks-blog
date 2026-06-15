// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
  id: number;
  content: string;
  date: string;
  images?: string[];
  location?: string;
  mood?: string;
  tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
  {
    id: 1,
    content: "修改网页中",
    date: "2026-06-15T11:02:17.000Z",
    //images: ["/images/diary/sakura.jpg", "/images/diary/1.webp"],
  },
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
  const sortedData = [...diaryData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  if (limit && limit > 0) {
    return sortedData.slice(0, limit);
  }

  return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
  const tags = new Set<string>();
  for (const item of diaryData) {
    if (item.tags) {
      for (const tag of item.tags) {
        tags.add(tag);
      }
    }
  }
  return Array.from(tags).sort();
};
