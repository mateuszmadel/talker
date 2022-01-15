import styled from "styled-components";
import Button from "../Button/Button";
import React, {useState} from "react";
import {useUser} from "../../context/UserContext";
import {useAuth} from "../../context/AuthContext";
import avatarPlaceholder from "../../assets/avatarPlaceholder.png";
import Input from "../Input/Input";
import {apiCall} from "../../utils/apiCall";
import {Link, useNavigate} from "react-router-dom";
function Navbar(props){
    const user=useUser();
    const auth=useAuth();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [searchUsersList, setSearchUsersList] = useState([]);
    const search = (value)=>{
        setInputValue(value);
        if(value) {
            apiCall('user/search', {data: {value},token:localStorage.getItem("token")}).then(r=>{
                console.log(r)
                setSearchUsersList(r);
            })
        }
    }
    const selectUser = (user) =>{
        console.log(user);
    }

    const logout = () =>{
        navigate('/')
        auth.logout()
    }

    return (
        <Section>
            {!props.showSearch &&
                <Link to={'/'}><Button color="secondary">Go back</Button></Link>
            }
            <SearchContainer>
                {props.showSearch &&
                <Input autoComplete="off" onChange={evt => search(evt.target.value)} search id="username" placeholder="Search user..."/>}
                {inputValue.length>0 && searchUsersList.length>0 &&
                    <SearchResult>
                        {searchUsersList.map(el=>{
                            return (
                                <Link style={{textDecoration:'none'}} to={`user/${el._id}`}>
                                    <SearchResultElement key={el.id} onClick={()=>selectUser(el)}>{el.username}</SearchResultElement>
                                </Link>
                            )
                            })
                        }
                    </SearchResult>
                }
            </SearchContainer>
            <UserContainer>
                <Image src={avatarPlaceholder} alt="avatar"/>
                {user && user.username}
                <Button small margin onClick={logout} color="secondary">Logout</Button>
            </UserContainer>
        </Section>
    );
}

const Section = styled.section`
    position: fixed;
    top: 0;
    height:50px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 30px;
`
const SearchContainer = styled.div`
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
  width:30px;
  height:30px;
  margin-right:5px;
`
const SearchResult = styled.div`
  position: fixed;
  top: 45px;
  width:400px;
  margin-left:15px;
  background-color:white;
`
const SearchResultElement=styled.div`
  padding:15px;
  border-bottom:1px solid lightgray;
  cursor:pointer;
`
export default Navbar;