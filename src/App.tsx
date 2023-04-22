import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";
import { light } from "./styles/themes/light";
import { Logo } from "./components/PageLogo";
import { HubTitle } from "./components/HubTitle";
import { HubDescription } from "./components/HubDescription";
import { SocialButtons } from "./components/SocialButtons";
import { HubButton } from "./components/HubButton";
import { ThemeSwitcher } from "./components/ReactSwitcher";
import { useState } from "react";

const ButtonsList = [
  {
    title: "Serviços e Pacotes",
    color: "#001F54",
    link: "https://about:blank/"
  }
]

export function App() {

  const [theme, setTheme] = useState(dark);

  function ToggleTheme() {
    theme === light ? setTheme(dark) : setTheme(light)
  }

  return (
    <ThemeProvider theme={theme} >
      <AppContainer>
        <GlobalStyle />
        <ThemeSwitcher ToggleFunction={ToggleTheme} />
        <HubWrapper>
          <Logo />
          <HubTitle title="SenhorZ - Digital" />
          <HubDescription content="Seja notado através do visual ✨" />
          <SocialButtons />
          <ButtonsWrapper>
            {
              ButtonsList && ButtonsList.map(button => {
                return (
                  <HubButton
                    key={button.title}
                    color={button.color}
                    title={button.title}
                    link={button.link}
                  />
                )
              })
            }
          </ButtonsWrapper>
          <Credits>
            WalterDev © 2023
          </Credits>
        </HubWrapper>
      </AppContainer>
    </ThemeProvider>

  )
}

const ButtonsWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`

const HubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
`

const Credits = styled.span`
  margin-top: 30px;
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  user-select: none;
`

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
  transition: .4s;
`