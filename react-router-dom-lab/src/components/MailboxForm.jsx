import { useState } from "react";
import { useNavigate } from "react-router-dom";
c;
const initialState = {
  boxHolder: "",
  boxSize: "",
};

const BoxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
};
const _handleSubmit = (event) => {
  event.preventDefault();
  props.addMailbox(formData);
  navigate("/mailboxes");
};

const _handleChange = (event) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
};

return (
  <main>
    <h1>New Mailbox</h1>
    <form onSubmit={_handleSubmit}>
      <label>
        Enter a Boxholder:
        <input
          name="boxHolder"
          onChange={_handleChange}
          value={formData.boxHolder}
        />
      </label>
      <label>
        Select a Boxsize
      </label>
      <button type="submit">Submit</button>
    </form>
  </main>
);
