import styled from "styled-components";
import { useState, useRef } from "react";
import Burger from "./Burger";
import Link from "next/link";
import NavMobile  from "./NavMobile";
import { useRouter } from "next/router";


const Navbar = () => {

    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <>
            <NavContainer >
                    
                <NavLogo>
                    <Link href="/">
                        <a onClick={() => setTimeout(() =>  setOpen(!setOpen) )}> HuHei</a>
                    </Link>
                </NavLogo>
                <Burger open={open} setOpen={setOpen} />
                <NavMobile open={open} setOpen={setOpen} />
                <NavITems>
                    <NavLinks>
                        <Link href="/">
                            <a className={router.pathname == '/' ? 'activeTab' : ''}>Home</a>
                        </Link>
                    </NavLinks>
                    <NavLinks>
                        <Link href="/about">
                            <a className={router.pathname == '/about' ? 'aboutTab' : ''}>About</a>
                        </Link>
                    </NavLinks>
                    <NavLinks>
                        <Link href="/contact">
                            <a className={router.pathname == '/contact' ? 'contactTab' : ''}>Contact</a>
                        </Link>
                    </NavLinks>
                </NavITems>
            </NavContainer>
        </>
    )
}
export default Navbar;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: #222121;
  padding: 0 2rem;
 box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

 @media screen and (max-width: 768px){
    justify-content: space-between;
 }
`
const NavLogo = styled.h2`
    color: #fff; 
    position: relative;
    z-index: 9;

    a {
        color: white;
        text-transform: uppercase;
    }
`
const NavITems = styled.ul`
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const NavLinks = styled.li`
    list-style: none;
    a {
        color: ${{ activeTab: '#fff' }};
        text-decoration: none;
        font-size:  16px;
        margin: 0 1rem;
        font-weight: 400;
        text-transform: uppercase;
    }
    
`


