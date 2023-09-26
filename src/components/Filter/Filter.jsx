import { Input } from "./Filter.styled"
import { Label } from "components/ContactForm/ContactForm.styled"

export const Filter = ({ onChange, value }) => {
    return (
        <Label>
            Find contacts by name
        <Input type="text" onChange={onChange} value={value} name="filter"/>
        </Label>
    )
}