/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface ExploreItem {
  type: string;
  id: string;
  self: string;
  data: ExploreItemData;
}

interface ExploreItemData {
  image_id: string;
  images: ExploreItemImages;
  title: string;
  description: string;
  created_at: string;
  privacy: string;
  watermark: {show: boolean};
  featured_at: string;
  published_at: string;
  author: ExploreItemAuthor;
  allow_share: boolean;
}

interface ExploreItemImages {
  thumbnails: ImageThumbnail[];
  cubemaps: any[];
  previews: ImagePreview[];
  equirectangulars: any[];
  orientation: number[];
}

interface ImageThumbnail {
  height: number;
  width: number;
  url: string;
  content_type: string;
}

interface ImagePreview {
  width: number;
  url: string;
  content_type: string;
}

interface ExploreItemAuthor {
  type: string;
  id: string;
  self: string;
  data: {username: string, display_name: string};
}

interface ExploreResponse {
  count: number;
  items: ExploreItem[];
  next: string;
  offset: string;
}
