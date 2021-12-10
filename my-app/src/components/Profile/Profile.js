import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css'
const Profile = ({ username, tag, location, avatar, stats, }) => {
    return (
        <div className= {s.profile}>
  <div className= {s.description}>
    <img
      src= {avatar}
      alt="User avatar"
      className= {s.avatar}
    />
    <div className={s.stat}>
    <p className={s.name}>{username}</p>
    <p className={s.tag}>{tag}</p>
            <p className={s.location}>{location}</p>
     </div>
  </div>

  <ul className={s.stats}>
    <li className= {s.statsItem}>
      <p className={s.label}>Followers</p>
      <p className={s.quantity}>{stats.followers}</p>
    </li>
    <li className= {s.statsItem}>
      <p className= {s.label}>Views</p>
      <p className={s.quantity}>{stats.views}</p>
    </li>
    <li className= {s.statsItem}>
      <p className={s.label}>Likes</p>
      <p className={s.quantity}>{stats.likes}</p>
    </li>
  </ul>
  
</div>
    )
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}
export default Profile;