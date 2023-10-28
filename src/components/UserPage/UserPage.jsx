import { useState } from "react";

export default function UserPage(){
    const [username, setUsername] = useState("DANILA");
    const [photo, setPhoto] = useState("");



    return <>
        HELLO {username}
    </>
}