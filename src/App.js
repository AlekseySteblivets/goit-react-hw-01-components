import React from 'react';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import Profile from "./components/Profile/Profile"
import Statistics from "./components/Statistics";
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from "./components/TransactionHistory";

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
        friends={friends} />

        <TransactionHistory 
        items={transactions} />
        </div>

    )
}

export default App;