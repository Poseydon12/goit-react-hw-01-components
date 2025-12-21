import { Profile } from "./Components/Profile/Profile";
import { Statistics } from "./Components/Statistic/Statistic";
import { FriendList } from "./components/FriendList/FriendList";
import friends from "./friends.json";
import user from "./Data/user.json";
import stats from "./Data/stats.json";
import transactions from "./transactions.json";
import TransactionHistory from "./TransactionHistory";
import "./TransactionHistory.css";
import "./App.css";

function App() {
  return (
    <>
      <Profile userInfo={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
