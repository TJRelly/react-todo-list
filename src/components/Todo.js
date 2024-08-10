import Button from "react-bootstrap/Button";

const Todo = ({ text, remove, id }) => {
    const removeTodo = () => remove(id);
    return (
        <div className="m-2">
            {text}
            <Button className="btn-danger ms-2" onClick={removeTodo}>
                delete
            </Button>
        </div>
    );
};

export default Todo;
