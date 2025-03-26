import { useRef, useState } from "react";

import { Button, Input, Select } from "@arco-design/web-react";

import alipay from "../../assets/alipay.jpg";
import closeSvg from "../../assets/close.svg";
import wechat from "../../assets/wechat.jpg";
import { jobEnumToString } from "../../tools/jobEnumToString";
import styles from "./index.module.less";
import { IConfigSectionProps } from "./interface";
import useMain from "./useMain";

/**
 * @description 配置区
 */
const ConfigSection = (props: IConfigSectionProps) => {
  const { jobData } = useMain();
  const { job, setJob, imageSrc, setImageSrc, title, setTitle } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const [showHide, setShowHide] = useState<'ali' | 'wechat' | 'none'>('none');

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleCloseClick = () => {
    // 清空input的选择
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setImageSrc(null);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAliClick = () => {
    setShowHide('ali');
  }

  const handleWechatClick = () => {
    setShowHide('wechat');
  }

  const handleHideClick = () => {
    setShowHide('none');
  }

  return (
    <div className={styles.configSection}>
      <h1>配置</h1>

      <h3>1 选择职业</h3>
      <Select placeholder="选择职业" value={job} onChange={setJob}>
        {jobData?.map((jobGroupItem) => {
          return (
            <Select.OptGroup
              key={jobGroupItem.groupId}
              label={jobGroupItem.groupName}
            >
              {jobGroupItem.jobList.map((jobItem) => {
                return (
                  <Select.Option key={jobItem} value={jobItem}>
                    {jobEnumToString(jobItem)}
                  </Select.Option>
                );
              })}
            </Select.OptGroup>
          );
        })}
      </Select>

      <h3>2 角色图片</h3>
      {/* 仅可上传图片的input框 */}
      <input
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <p>
        消除背景{" "}
        <a target="_blank" href="https://www.remove.bg/zh/">
          点击此处
        </a>
      </p>

      {imageSrc ? (
        <div className={styles.imageWrapper}>
          <img className={styles.mainImage} src={imageSrc} alt="角色图片" />
          <img
            onClick={handleCloseClick}
            className={styles.close}
            src={closeSvg}
          />
        </div>
      ) : (
        <Button onClick={handleButtonClick}>选择图片</Button>
      )}

      <h3>3 文字配置</h3>
      <Input.TextArea
        value={title}
        onInput={(e) => setTitle(e.currentTarget.value)}
      />

      <h3>4 您赏金点儿三瓜两枣的</h3>
      <div className={styles.payButtonWrapper}>
        <Button onClick={handleAliClick} type={"primary"} >支付宝</Button>
        <Button onClick={handleWechatClick} type={"primary"} status='success'>微信</Button>
        <Button onClick={handleHideClick}>隐藏</Button>
      </div>
      <div className={styles.payWrapper}>
        {showHide === 'ali' && <img className={styles.show} src={alipay} />}
        {showHide === 'wechat' && <img className={styles.show} src={wechat} />}
      </div>
    </div>
  );
};

export default ConfigSection;
