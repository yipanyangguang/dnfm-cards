import { JobEnum } from "../../interface/job";

export interface IShowSectionProps {
  title: string;
  job: JobEnum | undefined;
  imgSrc: string | null;
}