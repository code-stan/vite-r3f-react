import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import SmoothScroll from "./utils/SmoothScroll";

function App() {

  return (
    <>
      <SmoothScroll>
        <BrowserRouter>
              <AnimatedRoutes/>
        </BrowserRouter>
      </SmoothScroll>
    </>
  )
}

export default App
