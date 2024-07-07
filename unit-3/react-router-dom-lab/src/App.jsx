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
    console.log(newMailbox, "newbox")
  };

  return (
    <>
    <NavBar />
      <h1>Mailbox</h1>
      

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
        element={<MailboxDetails mailbox={mailbox}/>}
        />
        <Route path="*" element={ <h2>Page does not exist</h2> } />
      </Routes> 
    </>
  );
};

export default App;
