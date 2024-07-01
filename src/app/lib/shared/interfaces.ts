import { RefObject } from "react";

export interface SegmentComponentProps {
  id: string;
  appHeaderRef?: RefObject<HTMLDivElement>;
  onView: () => void;
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
export type ServicesResponse = Service[];
