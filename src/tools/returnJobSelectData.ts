import { IJobSelectData, JobEnum } from "../interface/job";

export function returnJobSelectData(): IJobSelectData {
  return [
    {
      groupName: "魔法师",
      groupId: "magic",
      jobList: [JobEnum.YuanSu, JobEnum.MoDao]
    },
    {
      groupName: "圣职者",
      groupId: "holy",
      jobList: [JobEnum.NaiMa, JobEnum.WuNv, JobEnum.TuanZhang, JobEnum.Siyi, JobEnum.NvNanQuan]
    },
    {
      groupName: "女鬼剑",
      groupId: "femaleSword",
      jobList: [JobEnum.JianZong, JobEnum.JianHao, JobEnum.AnDi, JobEnum.JianMo]
    },
    {
      groupName: "男鬼剑",
      groupId: "maleSword",
      jobList: [JobEnum.KuangZhan, JobEnum.GuiQi, JobEnum.JianHun, JobEnum.AXiuLuo]
    },
    {
      groupName: "女格斗",
      groupId: "femaleFighter",
      jobList: [JobEnum.WuShen, JobEnum.QiGong]
    },
    {
      groupName: "神枪手",
      groupId: "gunner",
      jobList: [JobEnum.ManYou, JobEnum.DaQiang]
    }
  ]
}