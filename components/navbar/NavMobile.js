import styled from "styled-components";
import Link from "next/link";
import { MdHome, MdContactPhone, MdFeaturedPlayList } from "react-icons/md";

const NavMobile = ({ open, setOpen  }) => {




    return (
        <>
            <NavItem open={open}  >
                <NavLink>
                    <span>
                        <MdHome size={30} />
                    </span>
                    <Link href="/" >
                        <a onClick={() => setTimeout(() => { setOpen(!open) }, 200)}>Home</a>
                    </Link>
                </NavLink>
                <NavLink>
                    <span>
                        <MdFeaturedPlayList size={30}/>
                    </span>
                    <Link href="/about" >
                        <a onClick={() => setTimeout(() => { setOpen(!open) }, 200)}>About</a>
                    </Link>
                </NavLink>
                <NavLink>
                    <span>
                        <MdContactPhone  size={30} />
                    </span>
                    <Link href="/contact" >
                        <a onClick={() => setTimeout(() => { setOpen(!open) }, 200)}>Contact</a>
                    </Link>
                </NavLink>
            </NavItem>
        </>
    )
}
export default NavMobile;





const NavItem = styled.ul`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        background: #222;
        opacity: ${({ open }) => open ? '1' : '0.1'};
        transform: ${( {open} ) => open ? 'translateX(0)' : 'translateX(-100%)'};
        height: 100vh;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: -1rem;
        left: 0;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;




        @media screen and (max-width: 768px ) {
            width: 80%;
            }

            @media screen and (max-width: 568px ) {
            width: 90%;
            }

             @media screen and (max-width: 268px ) {
            width: 100%;
            }
    }
`

const NavLink = styled.li`
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    a {
        color: #fff;
        text-decoration: none;
        font-size:  1.3rem;
        margin: 0 ;
        line-height: 5rem;
    }

    span {
        color: orange;
        display: flex;
        border: 1px solid #f2f2f2;
        border-radius: 50%;
        padding: 0.4rem;
        
    }


`