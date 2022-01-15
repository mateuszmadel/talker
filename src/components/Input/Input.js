import styled, {css} from 'styled-components'

const Input = styled.input`
    border:1px solid ${props=>props.theme.grayDark};
    background-color:  ${props=>props.theme.primary};
    border-radius:3px;
    padding: 10px 12px;
    height:50px;
    margin-bottom:15px;
    box-shadow: inset 0 2px 4px 0 hsla(0,0%,0%,0.08);
    :focus{
        outline-style: none;
        border-color:${props=>props.theme.secondary};
    }
  ${({search}) =>
          search && css`
              margin-left:15px;
              height:40px;
              width:400px;
              margin-bottom:0;
    `}
`

export default Input