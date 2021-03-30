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

function RegisterForm(onSubmit){

    const handleSubmit = (event) =>{
        event.preventDefault();
        const {username, password, email} = event.target.elements;
        onSubmit({username: username.value, password: password.value,email:email.value});

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
                <Input id="confirmPassword" type="password" placeholder="Confirm password"/>
            </FormGroup>
            <FormGroup>
                <Input id="email" type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
                <Button type="submit" color="secondary">Sign Up</Button>
            </FormGroup>
        </Form>

    )
}
export default RegisterForm