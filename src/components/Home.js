import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import User from './User';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import "../styles/home.css"


const Home = () => {
    const [ users, setUsers ] = useState([]);
    const [ count, setCount ] = useState(20);

    const fetchUsers = async() =>{
        const url = `https://randomuser.me/api/?results=${count}`;
        await axios.get(`${url}`)
        .then(res => setUsers(res?.data?.results))
        .catch((error) => console.log(error));
        setCount(count + 20 )
    }
    useEffect(() => {
        fetchUsers(count)            
        setTimeout(() => {
            setCount( count + 20 )
        }, 1000);
    }, [count]);


    
    return (
        <section>
            <Header />
            <InfiniteScroll
                dataLength={users.length}
                next={fetchUsers}
                hasMore={true}
                loader={<Loader />}
                scrollThreshold= {0.9}
            >
                <section className="userwrapper">
                    {
                        users.map((user, index )=> (
                            <User user={user} key={index}/>
                        ))
                    }
                </section>
            </InfiniteScroll>
        </section>
    );
};

export default Home;