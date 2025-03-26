import gifshot from "gifshot";
import { decompressFrames, parseGIF } from "gifuct-js";
import html2canvas from "html2canvas";


interface IHandleDownloadGifProps {
  startFn: () => void;
  endFn: () => void;
  process: (percent: number) => void;
  gifPath: string;
  idName: string;
  fileTitle: string;
}

const handleDownloadGif = async (props: IHandleDownloadGifProps) => {
  const { startFn, endFn, gifPath, idName, process, fileTitle } = props;

  startFn();

  const element = document.getElementById(idName);
  if (!element) return;
  const promisedGif = await fetch(gifPath)
    .then((resp) => resp.arrayBuffer())
    .then((buff) => {
      const gif = parseGIF(buff);
      const frames = decompressFrames(gif, true);
      return frames;
    });

  const frames = [];
  for (let i = 0; i < promisedGif.length; i++) {
    const percent = (i+1) / promisedGif.length;
    process(percent === 1 ? 0.99 : percent);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) continue;
    const frame = promisedGif[i];
    canvas.width = frame.dims.width;
    canvas.height = frame.dims.height;

    const imageData = new ImageData(
      new Uint8ClampedArray(frame.patch),
      frame.dims.width,
      frame.dims.height,
    );

    ctx.putImageData(imageData, 0, 0);

    // 把第一帧作为#preview的背景
    const preview = document
      .getElementById(idName)
      ?.querySelectorAll("div")[0];
    if (preview) {
      preview.style.backgroundImage = `url(${canvas.toDataURL()})`;
    }
    const canvasFin = await html2canvas(element);
    frames.push(canvasFin);
  }
  // 恢复preview的背景
  const target = document.getElementById(idName)?.querySelectorAll("div")[0];
  if (target) {
    target.style.backgroundImage = `url(${gifPath})`;
  }
  gifshot.createGIF(
    {
      images: frames,
      gifWidth: element?.clientWidth * 1.5,
      gifHeight: element?.clientHeight * 1.5,
      crossOrigin: "Anonymous",
    },
    (obj) => {
      if (!obj.error) {
        const image = obj.image;
        const link = document.createElement("a");
        link.href = image;
        link.download = `${fileTitle}.gif`;
        link.click();
        endFn();
      } else {
        console.error(obj);
      }
    },
  );
};

export default handleDownloadGif;
