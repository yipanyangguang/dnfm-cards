import { JobEnum } from "../interface/job";

export function jobEnumToString(job: JobEnum) {
  switch (job) {
    case JobEnum.YuanSu:
      return "元素";
    case JobEnum.MoDao:
      return "魔道";
    case JobEnum.NaiMa:
      return "奶妈";
    case JobEnum.JianZong:
      return "剑宗";
    case JobEnum.JianHao:
      return "剑豪";
    case JobEnum.AnDi:
      return "暗帝";
    case JobEnum.JianMo:
      return "剑魔";
    case JobEnum.KuangZhan:
      return "狂战";
    case JobEnum.GuiQi:
      return "鬼泣";
    case JobEnum.JianHun:
      return "剑魂";
    case JobEnum.AXiuLuo:
      return "阿修罗";
    case JobEnum.WuShen:
      return "武神";
    case JobEnum.QiGong:
      return "气功";
    case JobEnum.ManYou:
      return "漫游";
    case JobEnum.DaQiang:
      return "大枪";
    case JobEnum.WuNv:
      return "巫女";
    case JobEnum.TuanZhang:
      return "团长";
    case JobEnum.Siyi:
      return "四姨";
    case JobEnum.NvNanQuan:
      return "女南拳";
  }
  return "未知职业";
}