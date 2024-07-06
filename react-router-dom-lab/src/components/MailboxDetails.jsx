import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const params = useParams();
    // const singleMailbox = props.mailbox.find((mailbox) => mailbox._id == params.id);

    return (
        <>
            {/* <h2>{ singleMailbox.boxHolder }</h2> */}
            <h2>abc</h2>
        </>
    );
};

export default MailboxDetails;

