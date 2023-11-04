import Image from "next/image";
import LogoWhite from "@/public/logo/white.svg";
import LogoBlack from "@/public/logo/black.svg";
import LogoColor from "@/public/logo/color.svg";
import LogoTransparentBlack from "@/public/logo/transparent_black.svg";
import LogoTransparentWhite from "@/public/logo/transparent_white.svg";
import LogoTransparentColor from "@/public/logo/transparent_color.svg";

interface Props {
  type?:
    | "white"
    | "black"
    | "color"
    | "transparent_black"
    | "transparent_white"
    | "transparent_color";
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({
  className,
  height = 42,
  width,
  type = "white",
}: Props) {
  const getLogo = () => {
    switch (type) {
      case "white":
        return LogoWhite;
      case "black":
        return LogoBlack;
      case "color":
        return LogoColor;
      case "transparent_black":
        return LogoTransparentBlack;
      case "transparent_white":
        return LogoTransparentWhite;
      case "transparent_color":
        return LogoTransparentColor;
      default:
        return LogoWhite;
    }
  };

  return (
    <Image
      priority
      src={getLogo()}
      alt="Follow us on Twitter"
      className={className}
      width={width}
      height={height}
    />
  );
}
