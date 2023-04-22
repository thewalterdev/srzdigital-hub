import B_Logo from '../assets/logoo.png'
import styled from "styled-components"
import { devices } from '../styles/devices'

export function Logo() {
    return (
        <LogoContainer>
            <ImgLogo src={B_Logo} />
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid #DADADA;
    overflow: hidden;

    @media ${devices.mobileL} {
        width: 200px;
        height: 200px;
    }
`

const ImgLogo = styled.img`
    width: 100%;
    height: 100%;
`