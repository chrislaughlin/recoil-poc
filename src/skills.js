import { useState } from "react";
import { useRecoilState } from "recoil";

import { userState } from "./state/user";

const Skills = () => {
    const [user, setUser] = useRecoilState(userState);
    const {
        skills, 
    } = user;

    const [newSkill, setNewSkill] = useState("");

    return (
        <div>
            <h1>Skills <b>{Math.random()}</b></h1>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <div>
                <input 
                    value={newSkill} 
                    onChange={(e) => setNewSkill(e.target.value)}
                />
                <button
                    onClick={() => {
                        setUser({
                            ...user,
                            skills: [...user.skills, newSkill],
                        });
                    }}
                >
                    ADD
                </button>
            </div>
        </div>
    )
}

export default Skills;