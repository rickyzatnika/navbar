import styled from "styled-components";


const Burger = ({open,  setOpen }) => {




    return (
        <>
            <StyledBurger aria-label="Toggle menu" open={open} onClick={() => setOpen(!open)} >
                <span />
                <span />
                <span />
            </StyledBurger>
        </>
    )
}
export default Burger;


const StyledBurger = styled.button`
    position: absolute;
    top: 3%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
  
   
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media screen and (max-width: 328px) {
        top: 1.5rem;
    }
    

    span {
        width: 2rem;
        height: 0.19rem;
        background: ${({ open }) => open ? '#319DA0' : '#319DA0'};
        border-radius: 10px;
        transition: all .3s linear;
        position: relative;
        transform-origin: 1px;
        box-shadow: none;
        outline: none;
        border: none;
        :first-child {
        width: ${({ open }) => open ? '2rem' : '0.6rem'};
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};   
        }
        :nth-child(2) {
            width: 1.2rem;
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateY(-2px)' : 'translateY(0)'};
        }
        :nth-child(3) {
            
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }

        @media screen and (min-width: 768px) {
            display: none;
        }

         
    }
`