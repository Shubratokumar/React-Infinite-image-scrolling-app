import React from 'react';
import { Grid, Button, styled } from '@mui/material';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from 'firebase/auth';
import auth from './../firebase.init';
import { Link } from 'react-router-dom';


const Headeing = styled(Grid)(({theme})=>({
    padding: '30px 100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 700,
    [theme.breakpoints.down('md')] : {
        padding: '15px 5px',
    }
}))

const AuthBtn = styled(Button)`
    border: 1px solid white;
    outline: none;
    background: #000;    
    padding: 15px 20px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    & a{
        text-decoration: none;
        color: white;
    }
`;

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
      signOut(auth);
    };
    return (
        <Headeing>
            <h1>Infinite Scroll Image</h1>
            <AuthBtn>
                {
                    user?.uid ? 
                    (<Link onClick={handleSignOut}  to="/login">
                        Sign Out
                    </Link> )
                    : (<Link  to="/login">
                        Login
                    </Link>)
                }
            </AuthBtn>
        </Headeing>
    );
};

export default Header;