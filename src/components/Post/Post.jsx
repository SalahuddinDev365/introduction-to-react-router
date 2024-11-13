/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '6px'
    }

    const handleShowDetail = () => {
        console.log("Navigating to details page...");
        navigate(`/post/${id}`);
    }


    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Details</button></Link>
            <button onClick={handleShowDetail}>Show Details</button>
        </div>
    );
};

export default Post;