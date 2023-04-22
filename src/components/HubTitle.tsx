import styled from "styled-components"
import { devices } from "../styles/devices"

interface T_HubTitleProps {
    title?: string
}

export function HubTitle({ title = "Indefinido" }: T_HubTitleProps) {
    return (
        <Title>{title}</Title>
    )
}

const Title = styled.span`
    margin-top: 20px;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: #1282A2;
    width: 100%;

    @media ${devices.mobileL} {
        font-size: 26px;
    }
`