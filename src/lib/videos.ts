export interface VideoItem {
  id: string;
  platform?: "youtube" | "instagram" | "facebook";
  orientation?: "landscape" | "portrait";
  title: string;
  description?: string;
  category?: string;
}

export function getOrientation(v: VideoItem): "landscape" | "portrait" {
  if (v.orientation) return v.orientation;
  if (!v.platform || v.platform === "youtube") return "landscape";
  return "portrait";
}

export const allVideos: VideoItem[] = [
  {
    id: "1527356838341959",
    platform: "facebook",
    title: "I Can't Help Falling in Love",
    description: "Acoustic",
    category: "Wedding Ceremony",
  },
  {
    id: "1284114416974597",
    platform: "facebook",
    title: "Man I Need — Olivia Dean",
    description: "Party",
    category: "Corporate Event",
  },
  {
    id: "698668756491902",
    platform: "facebook",
    title: "Reach — S Club 7",
    description: "Singing Waiters",
    category: "Wedding Meal",
  },
  {
    id: "1815747426018131",
    platform: "facebook",
    title: "Dance With Me",
    description: "Acoustic",
    category: "First Dance",
  },
  {
    id: "3963547593955808",
    platform: "facebook",
    title: "Lover — Taylor Swift",
    description: "Acoustic",
    category: "Drinks Reception",
  },
  {
    id: "882952860709255",
    platform: "facebook",
    orientation: "landscape",
    title: "Signed Sealed Delivered",
    description: "Acoustic",
    category: "Wedding Ceremony",
  },
  {
    id: "963968569130937",
    platform: "facebook",
    title: "Waffle House",
    description: "Acoustic",
    category: "Drinks Reception",
  },
  {
    id: "616681694666317",
    platform: "facebook",
    title: "Pink Pony Club — Chappell Roan",
    description: "Party",
    category: "Wedding Party",
  },
  {
    id: "DNyfT92WHtM",
    platform: "instagram",
    title: "Red Light Spells Danger",
    description: "Singing Waiters",
    category: "Wedding Meal",
  },
  {
    id: "4cXKL3oPLNA",
    title: "Leave the Door Open — Silk Sonic",
    description: "Roaming Singers",
    category: "Roaming Singers",
  },
  {
    id: "XKc-6xf8_mQ",
    title: "This Will Be — Natalie Cole",
    description: "Acoustic",
    category: "Wedding Ceremony",
  },
  {
    id: "ElDXQQPltmU",
    title: "Love on Top — Beyoncé",
    description: "Party",
    category: "party",
  },
  {
    id: "Ay7eYAzIUSk",
    title: "Young Hearts Run Free — Candi Staton",
    description: "Party",
    category: "party",
  },
];
