import { useState } from 'react';
import  styled from 'styled-components';




 function Home() {

    const[open, setOpen] = useState(false);


    return (
        <>
            <Container >
                
            


            </Container>
        </>
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`


const Title = styled.h1`
    color : red;
`
