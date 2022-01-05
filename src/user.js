import { useRecoilValue } from "recoil";

import { userDisplay } from "./state/user";

const User = () => {
    const display = useRecoilValue(userDisplay);
    return (
        <div>
            <h1>User <b>{Math.random()}</b></h1>
            <span>{display}</span>
        </div>
    )
}

export default User;