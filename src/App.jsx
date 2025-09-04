import StyledButton, { FancyButton, SubmitButton } from "./components/Button/Button"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { DarkButton } from "./components/Button/Button.styles"



const theme = {
  dark: {
    primary: "black",
    text: "white"
  },
  light: {
    primary: "white",
    text: "black"
  },
  fontFamily: "Segoe UI"
}




const GlobalStyle = createGlobalStyle`
  button{
    font-family: ${(props) => props.theme.fontFamily};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className='App'>
        <StyledButton type="submit ">Styled button </StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant='outline'>Styled button </StyledButton>
        <div>
          <br />
        </div>
        <FancyButton>Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>


  )
}

export default App