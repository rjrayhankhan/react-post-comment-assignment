import { Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Detail.css'

const Detail = ({post}) => {
    const {id, title, body,} = post;
    
    return (
        <div className="detail">
            <h2>Post id: {id}</h2>
            <p><span style={{fontWeight:"bold"}}>Title</span>: {title}</p>
            <p><span style={{fontWeight:"bold"}}>Description</span>: {body}</p>
            <Button variant="contained" color="primary">
            <NavLink className="btn" to={`/ShowDetail/${id}`}>Post Details >></NavLink>
            </Button>
        </div>
    );
};

export default Detail;