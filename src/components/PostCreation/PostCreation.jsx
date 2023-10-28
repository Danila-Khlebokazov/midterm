import { useState } from "react"
import { usePosts } from "../../hooks";

export default function CreatePost() {
    const [postName, setPostName] = useState("some name");
    const [postDescription, setDescription] = useState("");
    const { useAddPost } = usePosts();

    const handleInput = (e, setter) => {
        setter(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (postName, postDescription) => {

        console.log("submit")
        useAddPost({
            "id": 10,
            "postName": postName,
            "postInfo": postDescription,
            "viewNum": 10,
            "likes": 10
        })
    }

    return <>
        <form>
            Post Name <input value={postName} onChange={(e) => handleInput(e, setPostName)}></input>
            Post Description<input value={postDescription} onChange={(e) => handleInput(e, setDescription)}></input>
            <button type="submit" onClick={handleSubmit(postName, postDescription)}>Post</button>
        </form>
    </>
}