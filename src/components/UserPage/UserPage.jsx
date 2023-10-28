import { useEffect, useMemo, useState } from "react";
import "./UserPage.css"

export default function UserPage() {
    const [username, setUsername] = useState("DANILA");
    const [photo, setPhoto] = useState("");

    const handleInput = (e, setter) => {
        setter(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        const username = localStorage.getItem("username")

        setUsername(username);
    }, []);

    const saveTo = () => {
        localStorage.setItem("username", username)
    }

    return <>
        <div className="userpage">
            HELLO {username}

            <div>THIS IS YOUR USER PAGE</div>


            <div className="changes">
                CHANGE NAME <input value={username} onChange={(e) => handleInput(e, setUsername)}></input>
                <button onClick={saveTo}>SAVE CHANGES</button>
            </div>
        </div>
    </>
}