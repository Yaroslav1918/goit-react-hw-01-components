import FriendListItem from '../FriendListItem/FriendListItem'
import PropTypes from 'prop-types';
const FriendList =  ({ friends }) => {
    return (
    <ul className="friend-list">
            <FriendListItem
                key = {friends.id}
                avatar={friends.avatar}
                name={friends.name}
                isOnline = {friends.isOnline} />
</ul>
)
}

FriendList.propTypes = {
  friends: PropTypes.object.isRequired,
  
};

export default FriendList;