import { nanoid } from 'nanoid';
import { Item } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ items}) => {

   const dispatch = useDispatch();

    return (
        
        items.map(({name, number, id}) => {
            return (
                <Item key={nanoid()}>{name}: {number}
                    <Button onClick={() => dispatch(deleteContact(id))} type="button">Delete</Button>
                </Item>
            )
        })
       
    )
}