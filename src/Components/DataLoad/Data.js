import React, { useEffect, useState } from 'react';
import Detail from './Detail';

const Data = () => {
   const [post, setPost] = useState([]);

    useEffect(() => {
        const url = ('https://jsonplaceholder.typicode.com/posts')
        fetch(url)
        .then(res => res.json())
        .then(post => setPost(post))
    } ,[])
    return (
        <div>
            <h1 style={{backgroundColor:"lightgrey"}}>User Post</h1>
            <h2>Total Post: {post.length}</h2>
            {
                post.map(detail => <Detail post={detail}  ></Detail> )
            }
            
        </div>
    );
};

export default Data;