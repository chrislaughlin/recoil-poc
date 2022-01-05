import { useRecoilState } from "recoil"

import { userAgeDisplay } from './state/user';

const UserAge = () => {
    const [age, setAge] = useRecoilState(userAgeDisplay);

    return (
        <div>
            <h1>AGE <b>{Math.random()}</b></h1>
            <span>Age: {age}</span>
            <button onClick={() => setAge(Math.floor(Math.random() * 100))}>
                Change Age
            </button>
        </div>
    )
}

export default UserAge;