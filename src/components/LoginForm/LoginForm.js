import Button from "../Button/Button";
import Input from "../Input/Input";
import styled from "styled-components";

const Form =styled.form`
  display:flex;
  flex-direction: column;
  align-items:stretch;
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`

function LoginForm(onSubmit){

    const handleSubmit = (event) =>{
        event.preventDefault();
        const {username, password} = event.target.elements;
        onSubmit({username: username.value, password: password.value,});

    }
    return(
        <Form
            onSubmit={handleSubmit}
        >
            <FormGroup>
                <Input id="username" placeholder="Username"/>
            </FormGroup>
            <FormGroup>
                <Input id="password" type="password" placeholder="Password"/>
            </FormGroup>
            <FormGroup>
                <Button type="submit" color="secondary">Sign In</Button>
            </FormGroup>
        </Form>

    )
}
export default LoginForm