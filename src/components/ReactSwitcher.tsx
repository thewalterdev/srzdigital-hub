import { useContext } from 'react'
import { CiLight, CiDark } from 'react-icons/ci'
import styled, { ThemeContext } from 'styled-components'
import ReactSwitch from 'react-switch'

interface Props {
    ToggleFunction(): void
}

export function ThemeSwitcher({ ToggleFunction }: Props) {
    const { colors, title } = useContext(ThemeContext)

    return (
        <SwitchContainer>
            <ThemeButton onClick={ToggleFunction}>
                {
                    title === "dark" ? <CiLight size={30} color={colors.background} /> : <CiDark size={30} color={colors.background} />
                }
            </ThemeButton>
        </SwitchContainer>
    )
}

const SwitchContainer = styled.div`
    position: absolute;
    right: 5%;
    top: 2%;
    padding: 2px;
`

const ThemeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${props => props.theme.colors.text};
    border: none;
    padding: 5px;
    cursor: pointer;
`