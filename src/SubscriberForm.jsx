import { useState } from "react";
function SubscriberForm({ addNewSubscriber }) {
  const [newEmail, setNewEmail] = useState("");

  const handleItemChange = (e) => {
    setNewEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);
    alert(`The email you enterd was:${newEmail}`);
    addNewSubscriber(newEmail);
    setNewEmail("");
  };

  return (
    <div>
      <h2>Email Address</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={newEmail}
          onChange={handleItemChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
export default SubscriberForm;
