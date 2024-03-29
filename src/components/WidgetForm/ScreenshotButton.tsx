import { useState } from "react";
import html2canvas from "html2canvas";

import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    try {
      setIsTakingScreenshot(true);
      const canvas = await html2canvas(document.querySelector("html")!);
      const base64image = canvas.toDataURL("image/png");
      onScreenshotTook(base64image);
    } catch (error) {
    } finally {
      setIsTakingScreenshot(false);
    }
  }

  if (screenshot) {
    return (
      <button
        onClick={() => onScreenshotTook(null)}
        type="button"
        className="
        p-1 w-10 h-10 rounded-md border-transparent 
        flex justify-end items-end text-zinc-400
        hover:text-zinc-100 transiation-colors
        "
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: 100,
          backgroundPosition: "right bottom",
        }}
      >
        <Trash weight="fill" className="w-4 h-4" />
      </button>
    );
  }
  return (
    <button
      disabled={isTakingScreenshot}
      onClick={handleTakeScreenshot}
      type="button"
      className="
      p-2 bg-zinc-800 rounded-md border-transparent
      hover:bg-zinc-700 transition-colors focus: outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
      focus:ring-brand-500
      "
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
}
