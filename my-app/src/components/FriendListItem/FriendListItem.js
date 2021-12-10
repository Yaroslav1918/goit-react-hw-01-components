import s from '../FriendListItem/FriendListItem.module.css'
import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
   
        <li className={s.item}>
            <span className={s.status}>{isOnline === true
                ? (<div className={s.greenBox}> </div>) :
                (<div className={s.redBox}> </div>)}</span>
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={s.name}>{name}</p>
            </li>

    )
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;