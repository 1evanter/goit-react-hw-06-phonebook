import { nanoid } from 'nanoid';
import { Item } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactItem = ({ items, onDelete }) => {
    return (
        
        items.map(({name, number, id}) => {
            return (
                <Item key={nanoid()}>{name}: {number}
                    <Button onClick={() => onDelete(id)} type="button">Delete</Button>
                </Item>
            )
        })
       
    )
}