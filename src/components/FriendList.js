import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map((friend) => {
                return (
                <FriendListItem
                name = {friend.name}
                avatar = {friend.avatar}
                isOnline  = {friend.isOnline}
                id = {friend.id}
            />
            )
            })

            }
        </ul>
    )
}

export default FriendList;