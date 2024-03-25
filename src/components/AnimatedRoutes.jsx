import { useLocation, Routes, Route} from 'react-router-dom';
import { lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
    <AnimatePresence
        mode="wait"
        onExitComplete={() => {
                window.scrollTo({ top: 0, behavior: "instant" });
        }}
    >
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
          </Route>
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes