import { CategoryResponse } from "../category/category";

export interface ChannelResponse {
  id: string;
  uploader_id: string;
  channel_id: string;
  channel: string;
  last_fetch?: string | null;
  disabled_at?: string | null;
  category?: CategoryResponse | null;
}

export interface ChannelSummary {
  id: string;
  channel: string;
  category?: CategoryResponse | null;
}
