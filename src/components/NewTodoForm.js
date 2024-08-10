import { useState } from "react";
//install react-uuid
import { v4 as uuid } from "uuid";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../static/NewTodoForm.css"

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = { text: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Send {text } to parent
     *    & clear form. */

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    };

    /** Update local state w/curr state of input elem */

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((fData) => ({
            ...fData,
            [name]: value,
        }));
    };

    /** render form */

    return (
        <Form className="Todo-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="text">
                <Form.Label>What do you need todo?</Form.Label>
                <Form.Control
                    type="string"
                    placeholder="Enter a new todo"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    );
};

export default NewTodoForm;
