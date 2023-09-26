import { Formik } from 'formik';
import { StyledForm, StyledField, Button, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = ({onAdd}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
           
            onSubmit={(values, actions) =>
               { onAdd({...values, id: nanoid()});
    actions.resetForm()}
            }
         
        >
      <StyledForm>
                <Label> Name
                <StyledField name="name"   
                    type="text"
                    pattern="^[а-яА-ЯёЁa-zA-Z\s]+$"
                    required />
                </Label>
      
                <Label> Number
                <StyledField name="number"   
                    type="tel"
                    pattern="\+\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required />
                </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
    )
}