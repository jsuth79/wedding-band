export interface VideoItem {
  id: string;
  platform?: "youtube" | "instagram" | "facebook";
  title: string;
  label?: string;
  caption?: string;
  description?: string;
  category?: "ceremony" | "background" | "party";
}

export const allVideos: VideoItem[] = [
  {
    id: "1527356838341959",
    platform: "facebook",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "1284114416974597",
    platform: "facebook",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "698668756491902",
    platform: "facebook",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "1815747426018131",
    platform: "facebook",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "3963547593955808",
    platform: "facebook",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "882952860709255",
    platform: "facebook",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "963968569130937",
    platform: "facebook",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "616681694666317",
    platform: "facebook",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "DNyfT92WHtM",
    platform: "instagram",
    title: "The Clooneys — Live Reel",
    category: "party",
  },
  {
    id: "4cXKL3oPLNA",
    title: "Leave the Door Open — Silk Sonic",
    label: "Ceremony",
    caption: "Intimate vocals for the moments that matter most.",
    description:
      "The Clooneys perform Leave the Door Open by Silk Sonic — live wedding ceremony in Scotland",
    category: "ceremony",
  },
  {
    id: "XKc-6xf8_mQ",
    title: "This Will Be — Natalie Cole",
    label: "Drinks Reception",
    caption: "Warm, upbeat harmonies while guests celebrate.",
    description:
      "The Clooneys perform This Will Be by Natalie Cole — live wedding drinks reception in Scotland",
    category: "background",
  },
  {
    id: "ElDXQQPltmU",
    title: "Love on Top — Beyoncé",
    label: "Evening Party",
    caption: "High energy and a full dancefloor.",
    description:
      "The Clooneys perform Love on Top by Beyoncé — live wedding evening party in Scotland",
    category: "party",
  },
  {
    id: "Ay7eYAzIUSk",
    title: "Young Hearts Run Free — Candi Staton",
    label: "Evening Party",
    caption: "The crowd loves it every time.",
    description:
      "The Clooneys perform Young Hearts Run Free by Candi Staton — live wedding performance in Scotland",
    category: "party",
  },
];
