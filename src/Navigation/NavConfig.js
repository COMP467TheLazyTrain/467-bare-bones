import HomeIcon from "@material-ui/icons/Home";
import IsoIcon from "@material-ui/icons/Iso";
import { Header } from "../Components/Header";
import { ExampleFeature } from "../Components/example-feature/Feature";
import { SobelFeature } from "../Components/sobel-feature/Feature";

export const NavItems = [
  {
    title: "No sub features",
    component: Header,
    icon: HomeIcon,
  },
  {
    title: "Sub features",
    component: ExampleFeature,
    icon: IsoIcon,
  },
  //{
  //  title: "Sobel",
  //  component: SobelFeature,
  //  icon: IsoIcon,
  //},
];
