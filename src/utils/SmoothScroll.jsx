/* eslint-disable react/prop-types */
import { ReactLenis} from "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {
     const lenisOptions = {
          // duration: 1,
          // easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 0.5,
          touchMultiplier: 1,
          infinite: false,
     }
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll