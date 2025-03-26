import { JobEnum } from "../../interface/job";

export interface IConfigSectionProps {
  job: JobEnum | undefined;
  setJob: (job: JobEnum) => void;
  imageSrc: string | null;
  setImageSrc: (imageSrc: string | null) => void;
  title: string;
  setTitle: (title: string) => void;
}
