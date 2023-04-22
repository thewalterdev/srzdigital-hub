import styled from "styled-components"
import { devices } from "../styles/devices"

interface T_HubTitleProps {
    content?: string
}

export function HubDescription({ content = "Indefinido" }: T_HubTitleProps) {
    return (
        <Description>{content}</Description>
    )
}

const Description = styled.span`
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    color: #777575;
    width: 100%;
    
    @media ${devices.mobileL} {
        font-size: 18px;
    }
`