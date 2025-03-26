/**
 * @description: 职业枚举
*/
export const enum JobEnum {
  /** 元素 */
  YuanSu = 1,
  /** 魔道 */
  MoDao,

  /** 奶妈 */
  NaiMa,

  /** 剑宗 */
  JianZong,
  /** 剑豪 */
  JianHao,
  /** 暗帝 */
  AnDi,
  /** 剑魔 */
  JianMo,

  /** 狂战 */
  KuangZhan,
  /** 鬼泣 */
  GuiQi,
  /** 剑魂 */
  JianHun,
  /** 阿修罗 */
  AXiuLuo,

  /** 武神 */
  WuShen,
  /** 气功 */
  QiGong,
  
  /** 漫游 */
  ManYou,
  /** 大枪 */
  DaQiang,
  /** 巫女 */
  WuNv,
  /** 团长 */
  TuanZhang,
  /** 四姨 */
  Siyi,
  /** 女南拳 */
  NvNanQuan,
}

/**
 * @description: 职业选择数据
*/
export type IJobSelectData = Array<{
  groupName: string;
  groupId: string;
  jobList: Array<JobEnum>;
}>;
