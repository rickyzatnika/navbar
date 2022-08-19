import styled from "styled-components";
import Link from "next/link";
import { MdHome, MdContactPhone, MdFeaturedPlayList } from "react-icons/md";

const NavMobile = ({ open, setOpen  }) => {




    return (
        <>
            <NavItem open={open}  onClick={() =>{ setOpen(!setOpen)}}>
                    <NavLink>
                        <Link href='/' passHref>
                            <span >
                                <MdHome size={25} />
                            </span>
                        </Link>
                        <Link href="/" >
                            <a onClick={() => setTimeout(() => { setOpen(!open) }, 200)}>Home</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/about" passHref>
                            <span>
                                <MdFeaturedPlayList size={25} />
                            </span>
                        </Link>
                        <Link href="/about" >
                            <a onClick={() => setTimeout(() => { setOpen(!open) }, 200)}>About</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/contact " passHref>
                            <span>
                                <MdContactPhone size={25} />
                            </span>
                        </Link>
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
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
        background: #222121;
        opacity: ${({ open }) => open ? '1' : '0.1'};
        transform: ${( {open} ) => open ? 'translateY(0)' : 'translateY(-100%)'};
        width: 100%;
        height: 50%;
        text-align: left;
        padding: 2rem;
        position: absolute;
        top: 4rem;
        left: 0;
        z-index: ${({ open }) => open ? '1' : '-1'};
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

        
    }
`

const NavLink = styled.li`
    list-style: none;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    a {
        color: rgba(255, 255, 255, 0.9);
        text-shadow: 0px 0px 5px #333151;
        text-decoration: none;
        font-size:  calc(1vh + 1vw + 1vmin);
        margin: 5px 0 ;
        line-height: 5rem;
    }
    opacity: ${({ open }) => open ? '0' : '1'};

    span {
        color: #333151;
        display: flex;
        border-radius: 10px;
        background: #222121;
        box-shadow: inset 21px 21px 18px #1d1c1c,
            inset -21px -21px 18px #272626,
            0px 0px 7px 1px #333151
            ;
        padding: 0.8rem;
    }


`