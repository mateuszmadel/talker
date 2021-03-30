import styled,{css}from 'styled-components'

const Button = styled.button`
    padding:10px 20px;
    border:0;
    border-radius:5px;
    font-size: 2.4rem;
    font-family:'Lora',serif;
    font-weight:400;
    color:${props => props.theme.primary};
    background-color: ${({ color, theme }) => theme[color]};
    :hover{
      background-color: ${({ color, theme }) => theme[color+"Dark"]};
    }
    :focus{
    outline-style: none;
    }
    ${({ small }) =>
          small && css`
              padding:0 8px;
    `}
`
export default Button