import Profile from '../Profile/Profile'
import user from '../../data/user.json'
import Statistics from '../Statistics/Statistics'
import statistics from '../../data/data.json'
import friends from '../../data/friends.json'
import FriendList from '../FriendList/FriendList'
import transactions from '../../data/transactions.json'
import TransactionHistory from '../TransactionHistory/TransactionHistory'



export default function App() {
    return (
     <div>
        <Profile
            key={user.id}
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics
               title="Upload stats"
            stat={statistics}
            />
            <FriendList
                friends={friends} />
        <TransactionHistory
        items={transactions} />
        </div>
    );
}
