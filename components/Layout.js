import Footer from "./Footer";
import Navbar from "./navbar/Navbar"
import styled from "styled-components"

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <Main>{children}</Main>
        <Footer/>
    </>
  )
}
export default Layout



const Main = styled.main`
    padding: 0;
`