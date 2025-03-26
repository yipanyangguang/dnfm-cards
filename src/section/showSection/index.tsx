import { useEffect, useState } from "react";

import { Button, Switch } from "@arco-design/web-react";

import demoPng from "../../assets/demo.png";
import yysGif from "../../assets/jobs/yys.gif";
import { JobEnum } from "../../interface/job";
import { returnJobImageObj } from "../../tools/returnJobImageObj";
import handleDownloadGif from "./gif";
import styles from "./index.module.less";
import { IShowSectionProps } from "./interface";
import html2canvas from "html2canvas";

const ShowSection = (props: IShowSectionProps) => {
  const { title, job, imgSrc } = props;
  const [bgImage, setBgImage] = useState(yysGif);
  const [isGif, setIsGif] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!job) {
      return;
    }
    setBgImage(returnJobImageObj(job, isGif));
    
  }, [job, isGif]);

  const handleDownloadGifThis = async () => {
    handleDownloadGif({
      startFn: () => {
        setPercent(1);
      },
      endFn: () => {
        setPercent(100);
      },
      gifPath: bgImage,
      idName: "preview",
      fileTitle: title,
      process: (i) => {
        setPercent(Math.floor(i * 100));
      },
    });
  };

  const handleDownloadImage = async () => {
    const element = document.getElementById("preview");
    if (element) {
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${title}.png`;
      link.click();
    }
  };

  return (
    <div className={styles.showSection}>
      <div id="preview" className={styles.preview}>
        <div
          className={styles.content}
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <p className={styles.guildName}>{title}</p>
          <img className={styles.main} src={imgSrc ?? demoPng} />
        </div>
      </div>
      <div className={styles.options}>
        <Switch
          checkedText="动图"
          uncheckedText="静态"
          checked={isGif}
          onChange={(val) => setIsGif(val)}
        />
        {job !== JobEnum.NvNanQuan && (
          <Button
            type={"primary"}
            onClick={() => {
              if (isGif) handleDownloadGifThis();
              else handleDownloadImage();
            }}
          >
            导出{isGif ? "动图" : "图片"}
          </Button>
        )}

        {job === JobEnum.NvNanQuan && <p>女南拳为手游原创角色，暂无资源</p>}
      </div>

      {percent !== 0 && percent !== 100 && (
        <div className={styles.mask}>
          <p>{percent}%</p>
          <p>{percent === 99 ? "即将完成！！！" : "正在合成..."}</p>
        </div>
      )}
    </div>
  );
};

export default ShowSection;
