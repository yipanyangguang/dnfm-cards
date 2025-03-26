import { useState } from "react";

import styles from "./app.module.less";
import { JobEnum } from "./interface/job";
import ConfigSection from "./section/configSection";
import { IConfigSectionProps } from "./section/configSection/interface";
import ShowSection from "./section/showSection";

function App() {
  const [job, setJob] = useState<JobEnum>(JobEnum.YuanSu);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("征服天下·爿素素");

  const configSectionProps: IConfigSectionProps = {
    job,
    setJob,
    imageSrc,
    setImageSrc,
    title,
    setTitle,
  };

  return (
    <div className={styles.app}>
      <ConfigSection {...configSectionProps} />
      <ShowSection title={title} job={job} imgSrc={imageSrc} />
    </div>
  );
}

export default App;
