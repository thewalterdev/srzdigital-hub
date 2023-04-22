import styled from "styled-components";
import { devices } from "../styles/devices";

interface Props {
    title: string;
    color: string;
    link: string;
}

export function HubButton({ title, color, link }: Props) {
    return (
        <a href={link}>
            <Button style={
                {
                    background: color,

                }
            }>
                {title}
            </Button>
        </a>
    )
}

const Button = styled.button`
    padding: 3px;
    width: 220px;
    height: 31px;
    border-radius: 13px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    cursor: pointer;

    @media ${devices.mobileL} {
        width: 280px;
        height: 40px;
    }
`