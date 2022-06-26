import { Profile } from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from './friendList/friendList';
import { TransactionHistory } from './transaction/transactionHistory';

import friends from "data/friends.json";
import user from "data/user.json";
import data from "data/data.json";
import transactions from "data/transactions.json";

export const App = () => {
  return (
    <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  <Statistics title="Upload stats" stats={data} />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />;
  </div>
  );
};
