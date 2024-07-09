import { RefObject } from "react";

export interface SegmentComponentProps {
  id: string;
  appHeaderRef?: RefObject<HTMLDivElement>;
  onView: () => void;
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
export type ServicesResponse = Service[];
export type OsDownloadsResponse = OSDownload[];
export type TeamsResponse = Team[];
export type QuestionAnswerResponse = QuestionAnswer[];
