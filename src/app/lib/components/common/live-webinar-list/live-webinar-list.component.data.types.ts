export interface MediaIcons {
  iconCC: string;
  iconSpeaker: string;
}

export interface WebinarItem {
  id: number;
  isLive: boolean;
  viewers: string;
  duration: string;
  credits: number;
  title: string;
  by: string;
  highlights: string;
  image: string;
  liveImage: string;
  creditImage: string;
  isCreditExpiry: boolean;
  creditExpiryContent: string;
  peopleImage: string;
  webinarCompanyLogo: string;
  isMedia: boolean;
  watchNowBtn: boolean;
  notifySection: boolean;
  socialBtn: boolean;
  mediaIcons: MediaIcons;
}

export interface WebinarList {
  pageTitle: string;
  linearGradient: boolean;
  viewBtnText: string;
  data: WebinarItem[];
}