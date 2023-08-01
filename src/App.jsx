import { useState } from "react";
import SubscriberForm from "./SubscriberForm.jsx";
import TableForm from "./TableForm.jsx";
import myEmailList from "./database.js";
import Title from "./Title.jsx";

function App() {
  const [emailList, setEmailList] = useState(myEmailList);

  const addNewSubscriber = (newEmail) => {
    const newSubscriber = {
      id: emailList.length + 1,
      email: newEmail,
    };
    setEmailList([...emailList, newSubscriber]);
  };

  return (
    <div className="container">
      <Title />
      <SubscriberForm addNewSubscriber={addNewSubscriber} />
      <table>
        <thead>
          <tr>
            <th>Newsletter Subscribers</th>
          </tr>
        </thead>
        <tbody>
          {emailList.map((user) => (
            <TableForm key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
