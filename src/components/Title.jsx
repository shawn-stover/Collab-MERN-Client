import styled, { css, keyframes }  from 'styled-components'

const fade = keyframes`
    0% {
        opacity: 0;
    }

    25% {
        opacity: .25;
    }

    50% {
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
`

const titleHolder = styled.title`
    
    text-align: center;
   
    `

const Header = styled.h1`
    color: black;
    animation: ${fade} 5s linear infinite;
    font-size: 35px;
`
const SubHeader = styled(Header)`
    animation: ${fade} 5s linear infinite;
    font-size: 24px;
    color: black;
`

export default function Title () {
    return(
        <div>
            <titleHolder>
                <Header>FALENDAR</Header>
                <SubHeader>Schedule Better</SubHeader>
            </titleHolder>    
        </div>    
    )

}