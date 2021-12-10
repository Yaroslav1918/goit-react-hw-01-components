import Profile from '../Profile/Profile'
import user from '../Profile/user.json'
import Statistics from '../Statistics/Statistics'
import statistics from '../Statistics/data.json'
import friends from '../FriendList/friends.json'
import FriendList from '../FriendList/FriendList'
import transactions from '../TransactionHistory/transactions.json'
import TransactionHistory from '../TransactionHistory/TransactionHistory'

export default function App() {
    return (
     <div>
        <Profile
            key={Math.random()}
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics
               title="Upload stats"
            stat={statistics}
            />;
    {friends.map(item =>
    <FriendList
        key = {item.id}
        friends={item}
      />
)}
        <TransactionHistory
        items={transactions} />
        </div>
    );
}
