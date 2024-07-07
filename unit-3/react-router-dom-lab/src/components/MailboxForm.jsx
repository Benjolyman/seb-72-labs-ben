import { useState } from "react";
import { useNavigate } from "react-router-dom";


const initialState = {
  boxHolder: "",
  boxSize: "",
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

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
      <h2>New Mailbox</h2>
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
          <select
            name="boxSize"
            onChange={_handleChange}
            value={formData.boxSize}
            >
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
