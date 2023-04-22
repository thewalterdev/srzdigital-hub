import { useContext } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import styled, { ThemeContext } from 'styled-components'
import { devices } from '../styles/devices'

export function SocialButtons() {

    const { colors, title } = useContext(ThemeContext)

    return (
        <SocialBtnList>
            <a href="https://www.instagram.com/srz.digital_">
                <IconButton>
                    <IconBg>
                        <AiFillInstagram size={25} color={colors.text} />
                    </IconBg>
                </IconButton>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5581979040174&text&type=phone_number&app_absent=0">
                <IconButton>
                    <IconBg>
                        <RiWhatsappFill size={25} color={colors.text} />
                    </IconBg>
                </IconButton>
            </a>
        </SocialBtnList>
    )
}

const SocialBtnList = styled.div`
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
`

const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: none;
    
    @media ${devices.mobileL} {
        width: 50px;
        height: 50px;
    }
`

const IconBg = styled.div`
    border: 1.5px solid ${props => props.theme.colors.text};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
`