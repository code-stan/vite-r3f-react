import { gsap } from "gsap";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(CustomEase);
CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");
CustomEase.create("primary-ease-out", ".34, 1.56, 0.64, 1");

const primaryEase = "primary-ease",
      primaryEaseOut = "primary-ease-out";

export { primaryEase, primaryEaseOut}