import React from 'react';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";

console.log(Statistics);
console.log(statisticalData);
const App = () => {
    return (
        <div>
        <Profile
        name = {user.name}
        stats = {user.stats}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList 
        friends={friends} />,
        </div>

    )
}

export default App;