import { RefObject } from "react";

export interface SegmentComponentProps {
  idString: string;
  appHeaderRef?: RefObject<HTMLDivElement>;
  onView: () => void;
  unView: () => void;
  languages?: AllLanguagesResponse;
}
export type Language = {
  title: string;
  flag: string;
  id: string;
};
export type AllLanguagesResponse = Language[];

export type Service = {
  content: string;
  media: string;
};
export type OSDownload = {
  product: string;
  image: string;
  link: string;
  os_name: string;
};
export type Team = {
  name: string;
  image: string;
  side: string;
};
export type QuestionAnswer = {
  question: string;
  answer: string;
};

export interface IntlParamsI {
  params: {
    locale: string;
  };
}
export interface contactUs {
  address: string;
  tel: string;
  lat: string;
  long: string;
  social_networks: [];
}
export type ServicesResponse = Service[];
export type OsDownloadsResponse = OSDownload[];
export type TeamsResponse = Team[];
export type QuestionAnswerResponse = QuestionAnswer[];
export type FindIpResponse = {
  ip: string;
  country: string;
};
export type LocationInfo = {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  isProxy: boolean;
  continent: string;
  continentCode: string;
};

export type ClientInfoResponse = {
  countryNameInEn: string;
  ip: string;
  flag: string;
};
export type ContactUsResponse = contactUs[];
