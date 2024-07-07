import { Link } from "react-router-dom";

const MailboxList = (props) => {
  const mailboxListItems = props.mailbox.map((mailbox) => {
    return (
      <li key={mailbox._id}>
        <Link to={"/mailboxes/" + mailbox._id}>{mailbox.boxHolder}</Link>
      </li>
    );
  });
  
  return (
    <ul>
      {mailboxListItems}
    </ul>
  );
};

export default MailboxList;
