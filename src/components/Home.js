import React, { useState, useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import axios from 'axios';
import User from './User';


const UserWrapper = styled.section`
    max-width: 1280px;
    margin: 60px auto;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
`;


const Home = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetchImages()
    }, []);


    const fetchImages = async() =>{
        const url = `https://randomuser.me/api/?results=500`;
        await axios.get(`${url}`)
        .then(res => setUsers(res?.data?.results))
    }
    return (
        <section>
            <Header />
            <UserWrapper>
                {
                    users.map((user, index )=> (
                        <User user={user} key={index}/>
                    ))
                }
            </UserWrapper>
        </section>
    );
};

export default Home;