import React, { useEffect, useState } from 'react';
import Detail from './Detail';

const Comment = () => {
    
    const [detail, setDetail] = useState({});
    console.log(detail)
     useEffect(() => {
         const url = "https://jsonplaceholder.typicode.com/comments/?postId=2"
         fetch(url)
         .then(res => res.json())
         .then(data => setDetail(data))
     }, []);

     const detailStyle = {
         border: "1px solid lightgrey",
         padding: "15px",
         margin: "10px 0",
         width: "70%",
         boxShadow: "2px 2px 4px gray",
     }

    return (
        <div>
            <h3>this is comment: {detail.length}</h3>
                {/* {
                    detail.map(detail => 
                    <div style={detailStyle}>
                        <p><span style={{fontWeight: "bold"}}>Name:</span> {detail.name}</p>
                        <p><span style={{fontWeight: "bold"}}>Email:</span> {detail.email}</p>
                        <p><span style={{fontWeight: "bold"}}>Comment:</span> {detail.name}</p>
                        
                    </div> 
                    )
                } */}
        </div>
    );
};

export default Comment;