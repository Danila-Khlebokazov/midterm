import "./Post.css"
export default function Post(props){
    const {post} = props;
    const {id, postName, postInfo, viewNum, likes} = post;
    return <>
    <div className="post">
        <div><h3>{postName}</h3></div>
        <p> {postInfo}</p>
        views: {viewNum}
        likes: {likes}
    </div>
    </>
}