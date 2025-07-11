import { ChannelSummary } from "../channel/channel";

export interface VideoResponse {
  id: string;
  timestamp: string;
  full_title: string;
  display_id: string;
  duration: number;
  language?: string | null;
  thumbnail: string;
  channel: ChannelSummary;
}
