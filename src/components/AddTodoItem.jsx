import Input from '../UI/Input'
import Button from '../UI/Button';
import classes from './AddTodoItem.module.css'
import { useRef } from 'react';

export default function AddTodoItem({ addTodoList }) {
    const subject = useRef('')

    function addTodoListHandler(event) {
        event.preventDefault()
        
        addTodoList(subject.current.value)
        subject.current.value = ''
    }

    return (
        <form className={classes.form}>
            <Input id='name' label='subject' type='text' ref={subject} />
            <Button type='submit' text='Add' onClick={addTodoListHandler} />
        </form>
    );
}