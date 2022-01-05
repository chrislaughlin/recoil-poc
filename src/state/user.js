import { atom, selector } from 'recoil';

const userState = atom({
    key: 'userState',
    default: {
        name: 'Chris Laughlin',
        location: 'Belfast',
        age: 32,
        skills: []
    },
})

const userDisplay = selector({
    key: 'userDisplay',
    get: ({ get }) => {
        const user = get(userState);
        const {
            name,
            location,
            age,
        } = user;
        return `${name} is from ${location} and is ${age} years old.`;
    }
});

const userAgeDisplay = selector({
    key: 'userAgeDisplay',
    get: ({ get }) => {
        const user = get(userState);
        return user.age;
    },
    set: ({ set, get}, newAge) => {
        const user = get(userState);
        set(userState, {
            ...user,
            age: newAge,
        });
    }
});

export {
    userState,
    userDisplay,
    userAgeDisplay,
}