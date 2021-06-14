import React from 'react';
// import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={styles.friend}>
            {friends.map(({id, isOnline, avatar, name}) => (
                <li className={styles.item} key={id}>
                    <span className={styles.status} style={{
                    backgroundColor: `${isOnline ? 'green' : 'red'}`,}}>{isOnline}</span>
                    <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{name}</p>
                </li>
                    ))

            }
        </ul>
    )
}


// outline: 1px solid tomato
// !!title ? title : " "
export default FriendList;

// {
//     stats.map((data) => (
//       <li className="item" key = {data.id}>
//         <DataStatistics
//         label = {data.label}
//         percentage = {data.percentage}
//         />
//       </li>
//     ))
//     }