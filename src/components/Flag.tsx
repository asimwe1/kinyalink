import type { StaticImageData } from "next/image";
import _flagsSvg from "../../public/flags.svg";
import type { Language } from "~/utils/languages";

const flagsSvg = _flagsSvg as StaticImageData;

export const Flag = ({
  language,
  width = 84,
}: {
  language: Language;
  width?: number;
}) => {
  const height = width * (19.3171 / 24);
  return (
    <svg viewBox={language.viewBox} style={{ height, width }}>
      {language.name == "Kinyarwanda" ? <image className="border-white border-[4px]" height="66px" href="/rwanda.png" width="82px"></image> :
        <image
        height={flagsSvg.height}
        href={flagsSvg.src}
        width={flagsSvg.width}
      ></image>
      }
    </svg>
  );
};
