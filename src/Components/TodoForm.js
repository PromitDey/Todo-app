import react, {useState, useContext} from 'react'

import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupText,
}from "reactstrap"

import {v4} from "uuid"

import {TodoContext} from "../context/TodoContext"

import { ADD_TODO } from '../context/action.types'

const TodoForm = () => {
    
    const [todoString, setTodoString] = useState("")
    const {dispatch} = useContext(TodoContext)
    const handleSubmit = e => {
        e.preventDefault()
        if(todoString == ""){ 
            return alert("Please Enter Todo")
        }
        
        const todo = {
            todoString,
            id : v4()
        }
        dispatch({
            type : ADD_TODO,
            payload : todo
        })
        setTodoString("")
    }

    return(
        <Form onSubmit = {handleSubmit}>
            <FormGroup>
                <InputGroup>
                <Input
                type = "text"
                name = "todo"
                id = "todo"
                placeholder="Your Next Todo"
                value={todoString}
                onChange = {e => setTodoString(e.target.value)}
                />
                <InputGroupText addonType = "prepend">
                    <button color = "warning">Add</button>
                </InputGroupText>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default TodoForm