import React from 'react';
import PropTypes from 'prop-types';


const FriendListItem = ({id, isOnline, avatar, name}) => {
    return (
        <li className="item" key = {id}>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    )

}



FriendListItem.propTypes = {
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
};

export default FriendListItem;

    // friends: protoTypes.arrayOf(PropTypes.shape({
            // }))