import { useState } from "react"
import { usePosts } from "../../hooks";
import "./PostCreation.css"

export default function CreatePost() {
    const [postName, setPostName] = useState("some name");
    const [postDescription, setDescription] = useState("");
    const { handleAddPost } = usePosts();

    const handleInput = (e, setter) => {
        setter(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (postName, postDescription) => {

        console.log("submit")
        handleAddPost({
            "id": 10,
            "postName": postName,
            "postInfo": postDescription,
            "viewNum": 10,
            "likes": 10
        })
    }

    return <>
        <form> 
            <div className="form">
            <div>Post Name <input value={postName} onChange={(e) => handleInput(e, setPostName)}></input></div>
            <div>Post Description<input value={postDescription} onChange={(e) => handleInput(e, setDescription)}></input></div>
            <button type="submit" onClick={(e) => handleSubmit(postName, postDescription)}>Post</button>
            </div>
        </form>
    </>
}