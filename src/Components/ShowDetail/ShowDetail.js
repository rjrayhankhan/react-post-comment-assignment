import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../DataLoad/Comment';
import './ShowDetail.css';

const ShowDetail = () => {
    const {DetailId} = useParams();
    const [detail, setDetail] = useState({});

     useEffect(() => {
         const url = `https://jsonplaceholder.typicode.com/posts/${DetailId}`
         fetch(url)
         .then(res => res.json())
         .then(data => setDetail(data))
     }, []);

    return (
        <div>
            <div className="allDetail">
                <p style={{fontWeight:"bold"}}>Post: {detail.id}</p>
                <p><span style={{fontWeight:"bold"}}>Title:</span> {detail.title}</p>
                <p><span style={{fontWeight:"bold"}}>Description:</span> {detail.body}</p>
                <Comment></Comment>
            </div>
        </div>
    );
};

export default ShowDetail;