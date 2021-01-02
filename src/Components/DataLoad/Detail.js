import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Detail.css'

const Detail = ({post}) => {
    const {id, title, body,} = post;
     const history = useHistory();
     function handleClick() {
         history.push(`/ShowDetail/${id}`);
     }
    return (
        <div className="detail">
            <h2>Post id: {id}</h2>
            <p><span style={{fontWeight:"bold"}}>Title</span>: {title}</p>
            <p><span style={{fontWeight:"bold"}}>Description</span>: {body}</p>
            <Button onClick={() => handleClick()} variant="contained" color="primary">
                see more >>
            </Button>  
        </div>
    );
};

export default Detail;