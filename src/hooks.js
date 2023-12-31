import { useCallback, useMemo } from "react";
import { useEffect, useState } from "react";

export function usePosts(){
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostList([
            {
                "id": 1,
                "postName": "name1",
                "postInfo": "info1",
                "viewNum": 0,
                "likes": 0
            },
            {
                "id": 2,
                "postName": "name1",
                "postInfo": "info1",
                "viewNum": 0,
                "likes": 0
            }
            ,
            {
                "id": 3,
                "postName": "name1",
                "postInfo": "info1",
                "viewNum": 0,
                "likes": 0
            }
        ])
    }, []);

    const handleAddPost = useCallback((name, desc) => {
        setPostList(postList.push({
            "id": 10,
            "postName": name,
            "postInfo": desc,
            "viewNum": 10,
            "likes": 10
        }))
    }, []);

    return {postList, handleAddPost}
}