import { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./MainPage.css";
import "../../bd.json";
import { usePosts } from "../../hooks";

export default function MainPage(){
    const {postList} = usePosts();

    return <>
        <div className="mainpage">POSTS</div>
        <div className="postcontainer">
        {postList.map((post) => (<Post key={post.id} post={post}/>)
        )}
        </div>
    </>;
}