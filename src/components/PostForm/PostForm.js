import React, {useState} from 'react';
import styled from "styled-components";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {PhotoLibraryRounded} from "@material-ui/icons";

function PostForm() {
    const [file,setFile]=useState();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const { content } = event.target.elements;
        console.log(content);
        const formData = new FormData();
        formData.append("content",content.value);
        formData.append("file", file);
        fetch(process.env.REACT_APP_API_URL+'/post/new', {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        }).then(r=>r.json()).then(
            r=> {
                console.log(r)
            }
        );
    }

    return (
        <Form
            onSubmit={handleSubmit}
        >
            <FormGroup>
                <PostInput id="content" placeholder="Share your thoughts..."/>
            </FormGroup>
            <FormGroup>
                <Label className="file-upload">
                    <input  onChange={(e) => setFile(e.target.files[0])} hidden id="file" type="file" accept="image/*"/>
                    <p>Add image to post</p>
                    <ImageIcon style={{ fontSize: 40}}/>
                </Label>
            </FormGroup>
            <FormGroup>
                <Button type="submit" color="secondary">Publish</Button>
            </FormGroup>
        </Form>
    );
}
const PostInput = styled(Input)`
  height:120px;
  border:none;
  box-shadow: none;
  font-size: 24px;
`
const Form =styled.form`
  display:flex;
  flex-direction: column;
  align-items:stretch;
  margin:5px;
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  align-items: center;
`
const ImageIcon = styled(PhotoLibraryRounded)`
  color:${props => props.theme.primaryTextLight};
  margin-left:20px;
  :hover{
    color:${props => props.theme.primaryText};
  }
`
export default PostForm;