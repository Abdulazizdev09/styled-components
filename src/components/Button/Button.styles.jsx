import styled from "styled-components";




export const StyledButton = styled.button`
  background-color:${(props) => { return props.variant == "outline" ? "white" : "green" }} ;  /* Green */
  color: ${(props) => { return props.variant == "outline" ? "green" : "white" }};              /* Text color */
  padding: 10px 20px;        /* Space inside */
  border: none;              /* No border */
  border-radius: 8px;        /* Rounded corners */
  cursor: pointer;           /* Hand icon */
  font-size: 16px;           /* Text size */
  transition: background 0.3s ease;
  &:hover{
     background-color:${(props) => { return props.variant !== "outline" ? "white" : "green" }} ;  /* Green */
  color: ${(props) => { return props.variant !== "outline" ? "green" : "white" }};      
  }
`

export const FancyButton = styled(StyledButton)`
  background-image:linear-gradient(to right,#f6d365 0%,#fda085 100%) ;
  border: none;
`

// - here we are extenting StyledButton
export const SubmitButton = styled(StyledButton).attrs({
  type: "submit"
})`
  box-shadow:0 9px #999;
  &:active{
     background-color:${(props) => { return props.variant !== "outline" ? "white" : "green" }} ;  /* Green */
    box-shadow: 0 5px #666;
    transform:translateY(4px);
  }
`