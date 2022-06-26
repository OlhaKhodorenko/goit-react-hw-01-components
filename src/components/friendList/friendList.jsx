import PropTypes from 'prop-types';
import css from './friendList.module.css'
import { FriendListItem } from 'components/friendListItem/friendListItem';

export const FriendList = ({friends}) => {
    return (
    <ul className={css.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => {
        return(
        <FriendListItem key = {id} name={name} avatar={avatar} isOnline ={isOnline}/>)
    })}
  </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
      }),)
}
