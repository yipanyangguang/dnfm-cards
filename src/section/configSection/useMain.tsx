import { useEffect, useState } from "react";
import { returnJobSelectData } from "../../tools/returnJobSelectData";
import { IJobSelectData } from "../../interface/job";

const useMain = () => {
  const [jobData, setJobData] = useState<IJobSelectData>();

  useEffect(() => {
    const data = returnJobSelectData();
    setJobData(data);
  }, [])

  return {
    /** 职业选择数据 */
    jobData
  }
};

export default useMain;