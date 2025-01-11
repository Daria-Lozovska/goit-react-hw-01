import FriendListItem from './FriendListItem.jsx';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={styles.listItem}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;