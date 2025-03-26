import yssGif from "../assets/jobs/yys.gif";
import yssWebp from "../assets/jobs/yys.webp";
import mdxzGif from "../assets/jobs/mdxz.gif";
import mdxzWebp from "../assets/jobs/mdxz.webp";
import adqsGif from "../assets/jobs/adqs.gif";
import adqsWebp from "../assets/jobs/adqs.png";
import axlGif from "../assets/jobs/axl.gif";
import axlWebp from "../assets/jobs/axl.webp";
import gqGif from "../assets/jobs/gq.gif";
import gqWebp from "../assets/jobs/gq.webp";
import jhGif from "../assets/jobs/jh.gif";
import jhWebp from "../assets/jobs/jh.webp";
import kzsGif from "../assets/jobs/kzs.gif";
import kzsWebp from "../assets/jobs/kzs.webp";
import llwsGif from "../assets/jobs/llws.gif";
import llwsWebp from "../assets/jobs/llws.webp";
import myqsGif from "../assets/jobs/myqs.gif";
import myqsWebp from "../assets/jobs/myqs.webp";
import qgsGif from "../assets/jobs/qgs.gif";
import qgsWebp from "../assets/jobs/qgs.webp";
import qmzGif from "../assets/jobs/qmz.gif";
import qmzWebp from "../assets/jobs/qmz.png";
import qpsGif from "../assets/jobs/qps.gif";
import qpsWebp from "../assets/jobs/qps.webp";
import sdGif from "../assets/jobs/sd.gif";
import sdWebp from "../assets/jobs/sd.webp";
import sqsGif from "../assets/jobs/sqs.gif";
import sqsWebp from "../assets/jobs/sqs.webp";
import wnGif from "../assets/jobs/wn.gif";
import wnWebp from "../assets/jobs/wn.webp";
import ydspzGif from "../assets/jobs/ydspz.gif";
import ydspzWebp from "../assets/jobs/ydspz.webp";
import yjsGif from "../assets/jobs/yjs.gif";
import yjsWebp from "../assets/jobs/yjs.webp";
import ymzGif from "../assets/jobs/ymz.gif";
import ymzWebp from "../assets/jobs/ymz.webp";
import nnqWebp from "../assets/jobs/nnq.png";


import { JobEnum } from "../interface/job";

/**
 * @description 返回对应职业的图片
*/
export function returnJobImageObj(job: JobEnum, isGif: boolean) {
  switch (job) {
    case JobEnum.YuanSu:
      return isGif ? yssGif : yssWebp;
    case JobEnum.MoDao:
      return isGif ? mdxzGif : mdxzWebp;
    case JobEnum.NaiMa:
      return isGif ? sqsGif : sqsWebp;
    case JobEnum.JianZong:
      return isGif ? yjsGif : yjsWebp;
    case JobEnum.JianHao:
      return isGif ? llwsGif : llwsWebp;
    case JobEnum.AnDi:
      return isGif ? adqsGif : adqsWebp;
    case JobEnum.JianMo:
      return isGif ? qmzGif : qmzWebp;
    case JobEnum.KuangZhan:
      return isGif ? kzsGif : kzsWebp;
    case JobEnum.GuiQi:
      return isGif ? gqGif : gqWebp;
    case JobEnum.JianHun:
      return isGif ? jhGif : jhWebp;
    case JobEnum.AXiuLuo:
      return isGif ? axlGif : axlWebp;
    case JobEnum.WuShen:
      return isGif ? sdGif : sdWebp;
    case JobEnum.QiGong:
      return isGif ? qgsGif : qgsWebp;
    case JobEnum.ManYou:
      return isGif ? myqsGif : myqsWebp;
    case JobEnum.DaQiang:
      return isGif ? qpsGif : qpsWebp;
    case JobEnum.WuNv:
      return isGif ? wnGif : wnWebp;
    case JobEnum.TuanZhang:
      return isGif ? ydspzGif : ydspzWebp;
    case JobEnum.Siyi:
      return isGif ? ymzGif : ymzWebp;
    case JobEnum.NvNanQuan:
      return nnqWebp;
    default:
      return isGif ? yssGif : yssWebp;
  }
}
