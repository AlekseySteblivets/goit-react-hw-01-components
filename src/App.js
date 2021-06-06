import React from 'react';
import user from './user.json';
import statisticalData from './statistical-data.json'
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";

console.log(Statistics);
console.log(statisticalData);
const App = () => {
    return (
        // <Profile
        // name = {user.name}
        // stats = {user.stats}
        // tag = {user.tag}
        // location = {user.location}
        // avatar = {user.avatar}
        // />
        <Statistics title="Upload stats" stats={statisticalData} />
    )
}

export default App;