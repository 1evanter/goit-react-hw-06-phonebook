import { ContactItem } from "components/ContactItem/ContactItem"
import { List } from "./ContactList.styled" 
export const ContactList = ({contacts, onDelete}) => {
    return (
        <List >
            <ContactItem/>
    </List>
    )

}