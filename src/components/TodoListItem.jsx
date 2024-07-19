import classes from './TodoListItem.module.css'
import Button from '../UI/Button';

export default function TodoListItem({ list, removeList }) {
    return (
        <ul className={classes.ul}>{
            list.map(item => {

                const date = new Date(Date.parse(item.date))
                const formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

                return (<li key={item.id} className={classes.todoitem}>
                    <div className={classes.detail}>
                        <p>{item.detail}</p>
                        <p className={classes.date}>Created date : {formatDate}</p>
                        <p className={classes.date}>Status : {item.status}</p>
                    </div>
                    <div className={classes.close}>
                        <Button text='x' onClick={() => removeList(item.id)}/>
                    </div>
                </li>
            )})
        }</ul>
    );
}