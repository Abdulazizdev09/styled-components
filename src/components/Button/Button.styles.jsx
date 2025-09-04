import styled from "styled-components"

export const StyledButton = styled.button`
  background-color:${(props) => { return props.variant == "outline" ? "white" : "green" }} ;  /* Green */
  color: ${(props) => { return props.variant == "outline" ? "green" : "white" }};              /* Text color */
  padding: 10px 20px;        /* Space inside */
  border: none;              /* No border */
  border-radius: 8px;        /* Rounded corners */
  cursor: pointer;           /* Hand icon */
  font-size: 16px;           /* Text size */
  transition: background 0.3s ease;
`
