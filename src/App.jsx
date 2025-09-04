import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #4CAF50;  /* Green */
  color: white;              /* Text color */
  padding: 10px 20px;        /* Space inside */
  border: none;              /* No border */
  border-radius: 8px;        /* Rounded corners */
  cursor: pointer;           /* Hand icon */
  font-size: 16px;           /* Text size */
  transition: background 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }

  &:active {
    background-color: #3e8e41; /* Even darker when clicked */
  }
`


function App() {
  return (
    <div className='App'>
      {/* <button>Button</button> */}
      <StyledButton>Styled button </StyledButton>
    </div>
  )
}

export default App