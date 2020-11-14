import BrightnessMediumIcon from "@material-ui/icons/BrightnessMedium";
import IsoIcon from "@material-ui/icons/Iso";
import FilterBAndWIcon from "@material-ui/icons/FilterBAndW";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ImageAspectRatioIcon from "@material-ui/icons/ImageAspectRatio";

export const NavItems = [
  {
    title: "Brightness",
    path: "/",
    icon: BrightnessMediumIcon,
  },
  {
    title: "Contrast",
    path: "/Contrast",
    icon: IsoIcon,
  },
  {
    title: "Sobel",
    path: "/Sobel",
    icon: FilterBAndWIcon,
  },
  {
    title: "Face Detection",
    path: "/FaceDetection",
    icon: InsertEmoticonIcon,
  },
  {
    title: "Image Trace",
    path: "/ImageTrace",
    icon: ImageAspectRatioIcon,
  },
];
