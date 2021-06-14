import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../img/defolt.jpg';
import styles from './Profile.module.css';
console.log(defaultImg);

const User = ({name, tag, location, avatar, stats }) => {
    return (
<div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
        width = "200px"
      />
      <p className={styles.name}>{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity"> {stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity"> {stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity"> {stats.likes}</span>
      </li>
    </ul>
</div>)
}

User.defaultProps = {
  avatar: defaultImg,
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats:PropTypes.shape({
    followers:PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};

export default User;