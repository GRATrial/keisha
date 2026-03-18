// ### PLACEHOLDER: Researcher will customize video data

export interface VideoResult {
  id: string;
  title: string;
  source: string;
  duration: string;
  views: string;
  thumbnailKey?: string;
}

// Fictional video results for research simulation
export const VIDEOS: VideoResult[] = [
  {
    id: "v1",
    title: "Keisha Williams on leadership in nonprofit management ...",
    source: "YouTube · Nonprofit Leadership Institute",
    duration: "12:15",
    views: "Jan 18, 2025"
  },
  {
    id: "v2",
    title: "Keisha Williams — Women in Business Awards 2024",
    source: "YouTube · Atlanta Business Chronicle",
    duration: "5:33",
    views: "Oct 22, 2024"
  },
  {
    id: "v3",
    title: "Community development strategies — Keisha Williams",
    source: "YouTube · Urban League Channel",
    duration: "8:47",
    views: "Jul 5, 2024"
  }
];

