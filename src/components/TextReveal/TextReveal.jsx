/* eslint-disable react/prop-types */
// import { gsap } from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const elementMap = {
  p: 'p',
  span: 'h6',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const TextReveal = ({ elementType, cN, content = "Text Reveal" }) => {
  const elementRef = useRef();
  const contentWrapper = useRef();
  
  useGSAP(()=>{
    // Check if it is an heading element or content element
    new SplitType(contentWrapper.current, {types: (elementType.startsWith("h")) ? "chars, words" : "words"})

    // gsap code
    
  }, {scope: elementRef})
  const Element = elementMap[elementType];
  return (
    <Element className={cN} ref={elementRef}>
      <span className="wrapper" ref={contentWrapper}>
        {content}
      </span>
    </Element>
  );
};

export default TextReveal