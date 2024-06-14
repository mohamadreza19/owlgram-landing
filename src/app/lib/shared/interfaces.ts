import { RefObject } from "react";

export interface SegmentComponentProps {
  id: string;
  appHeaderRef?: RefObject<HTMLDivElement>;
  onView: () => void;
}
