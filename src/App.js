import React from 'react';
import user from './user.json';
import Profile from "./components/Profile";

console.log(user);
const App = () => {
    return (
        <Profile
        name = {user.name}
        stats = {user.stats}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        />

    )
}

export default App;