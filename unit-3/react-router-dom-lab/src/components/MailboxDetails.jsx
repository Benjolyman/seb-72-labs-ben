import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
    const params = useParams();
    const singleMailbox = props.mailbox.find((mailbox) => mailbox._id == params.id);

    if (!singleMailbox) {
        return (
            <>
                <h2>Mailbox Not Found</h2>
                <p>The mailbox you are looking for does not exist.</p>
            </>
        );
    }
    
    return (
        <>
            <h2>{ singleMailbox.boxHolder }</h2>
            <h2>abc</h2>
        </>
    );
};

export default MailboxDetails;

