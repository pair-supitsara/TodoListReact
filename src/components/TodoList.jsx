// import classes from './TodoList.module.css'
import FilterTodoList from './FilterTodoList'
import TodoListItem from './TodoListItem';

export default function TodoList({ list, removeList, doFilter }) {

    return (
        <>
            <FilterTodoList doFilter={doFilter} />
            <TodoListItem list={list} removeList={removeList} />
        </>
        
    );
}