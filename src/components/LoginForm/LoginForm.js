import Button from "../Button/Button";
import Input from "../Input/Input";
import styled from "styled-components";
import {useAuth} from "../../context/AuthContext";

const Form =styled.form`
  display:flex;
  flex-direction: column;
  align-items:stretch;
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`

function LoginForm(props){
    const {login}=useAuth();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const {username, password} = event.target.elements;
        login({username:username.value,password:password.value});
    }
    return(
        <Form
            onSubmit={handleSubmit}
        >
            <FormGroup>
                <Input id="username" placeholder="Username" required/>
            </FormGroup>
            <FormGroup>
                <Input id="password" type="password" placeholder="Password" required/>
            </FormGroup>
            <FormGroup>
                <Button type="submit" color="secondary">Sign In</Button>
            </FormGroup>
        </Form>

    )
}
export default LoginForm