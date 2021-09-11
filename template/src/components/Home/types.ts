export interface NewsItemType {
  id: string;
  title: string;
  duration: number;
  category: {
    id: string;
    title: string;
  };
  image: any;
}
