import { useState } from "react";
import "./Post.css"
export default function Post(props){
    const {post} = props;
    const {id, postName, postInfo, viewNum, likes} = post;
    const [likess, setLikes] = useState(likes);

    const addLikes = () => {
        setLikes(likess + 1);
    }

    return <>
    <div className="post">
        <div><h3>{postName}</h3></div>
        <p> {postInfo}</p>
        views: {viewNum}
        likes: {likess}
        <button className="likebutton" onClick={addLikes}>Like</button>
    </div>

    </>
}