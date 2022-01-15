import Button from "../Button/Button";
import Input from "../Input/Input";
import styled from "styled-components";
import {apiCall} from "../../utils/apiCall";
import {useState} from "react";

const Form =styled.form`
  display:flex;
  flex-direction: column;
  align-items:stretch;
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`
const ErrorMessage = styled.span`
  color: red;
  margin-bottom:10px;
`

function RegisterForm({closeModal}){

    const [error,setError]=useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        const {username, password, email} = event.target.elements;
        register({username: username.value, password: password.value,email:email.value});

    }
    const register = (userInput) => {
            apiCall('user/register', {data: userInput}).then((data) => {
                    closeModal();
                }).catch(e =>{
                    if(typeof e === 'string'){
                        setError(e)
                    }
            })
    }
    return(
        <Form
            onSubmit={handleSubmit}
        >
            <FormGroup>
                <ErrorMessage>{error}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Input id="username" placeholder="Username" required/>
            </FormGroup>
            <FormGroup>
                <Input id="password" type="password" placeholder="Password" required/>
            </FormGroup>
            <FormGroup>
                <Input id="confirmPassword" type="password" placeholder="Confirm password" required/>
            </FormGroup>
            <FormGroup>
                <Input id="email" type="email" placeholder="Email" required/>
            </FormGroup>
            <FormGroup>
                <Button type="submit" color="secondary">Sign Up</Button>
            </FormGroup>
        </Form>

    )
}
export default RegisterForm