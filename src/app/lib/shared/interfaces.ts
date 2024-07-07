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
export type ServicesResponse = Service[];
export type OsDownloadsResponse = OSDownload[];
