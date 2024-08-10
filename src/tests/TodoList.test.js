import { render, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders learn react link", () => {
    render(<TodoList />);
});

test("matches snapshot", function () {
    const { asFragment } = render(<TodoList title="Title" />);
    expect(asFragment()).toMatchSnapshot();
});

test("can add a new todo", function () {
    const todoList = render(<TodoList />);

    // no todos yet
    expect(todoList.queryByText("delete")).not.toBeInTheDocument();

    // Simulate filling out the form to add a new todo
    const textInput = todoList.getByLabelText("What do you need todo?");
    const addButton = todoList.queryByText("Add");

    // Change values in the form
    fireEvent.change(textInput, { target: { value: "do todos" } });

    // Submit the form to add the todo
    fireEvent.click(addButton);

    // expect to see a todo
    const removeButton = todoList.getByText("delete");
    expect(removeButton).toBeInTheDocument();
});

it("can remove a todo", function () {
    const todoList = render(<TodoList />);

    // Simulate filling out the form to add a new todo
    const textInput = todoList.getByLabelText("What do you need todo?");
    const addButton = todoList.getByText("Add");

    // Change values in the form
    fireEvent.change(textInput, { target: { value: "do todos" } });

    // Submit the form to add the todo
    fireEvent.click(addButton);

    const removeButton = todoList.getByText("delete");

    // click the remove button and the todo should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});
