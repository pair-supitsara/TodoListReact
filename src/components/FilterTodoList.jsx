import Button from "../UI/Button";
import classes from './FilterTodoList.module.css'
import { useState, useRef } from "react";
import Input from "../UI/Input";

export default function FilterTodoList({ doFilter }) {
    const [showfilter, setShowFilter] = useState(false)
    const todo = useRef(null);
    const pending = useRef(null);
    const completed = useRef(null);
    const canceled = useRef(null);

    function showFilterHandlert() {
        setShowFilter(prev => !prev)
    }

    function showFilter() {
        const option = {
            todo: todo.current.checked,
            pending: pending.current.checked,
            completed: completed.current.checked,
            canceled: canceled.current.checked
        }
        doFilter(option)
    }
    
    return (
        <div className={classes.div}>
            {!showfilter && <Button type='button' text='Filter' onClick={showFilterHandlert} />}
            {showfilter && (<>
                <div>
                    <Input type='checkbox' label='todo' ref={todo} />
                    <Input type='checkbox' label='pending' ref={pending} />
                    <Input type='checkbox' label='completed' ref={completed} />
                    <Input type='checkbox' label='canceled' ref={canceled} />
                    <hr />
                </div>
                <Button type='button' text='Close' onClick={showFilterHandlert} />
                <Button type='button' text='Search' onClick={showFilter} />
            </>)}
        </div>
        
    );
}