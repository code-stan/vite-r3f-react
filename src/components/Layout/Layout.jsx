import { createContext, useContext, useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import './layout.scss'
import SmoothScroll from "../utils/SmoothScroll";

const PageContext = createContext();
export const usePageContext = () => useContext(PageContext)

const Layout = () => {
  const [ footerPageMsg, setFooterPageMsg ] = useState("")

  return (
    <PageContext.Provider value={{footerPageMsg, setFooterPageMsg}}>
      <SmoothScroll>
        <main className="main page-section">
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
      </SmoothScroll>
    </PageContext.Provider>
  )
}

export default Layout