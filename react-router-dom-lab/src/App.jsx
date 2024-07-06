import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxDetails from "./components/MailboxDetails";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import { useState } from "react";

const initialState = [];

const App = () => {
  const [mailbox, setMailbox] = useState(initialState);

  const addMailbox = (newMailbox) => {
    newMailbox._id = mailbox.length + 1;
    setMailbox([...mailbox, newMailbox]);
  };

  return (
    <>
    <NavBar />
      <h1>Mailbox Home</h1>
      

      <Routes>
        <Route path='/' element={<h2>Home</h2>} 
        />
        <Route
          path="/mailboxes/new"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
        <Route
        path="/mailboxes"
        element={<MailboxList mailbox={mailbox}/>}
        />
        <Route
        path="/mailboxes/:id"
        element={<MailboxDetails element={<MailboxDetails mailbox={mailbox}/> } />}
        />
      </Routes> 
    </>
  );
};

export default App;
