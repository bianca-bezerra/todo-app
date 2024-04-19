import styles from './style.module.css'


export function Task(props){
    return (
        <div className={styles.task}>
            <h4>{props.task.id}.</h4>
            <p className={`${props.task.isCompleted && styles.title}`}> {props.task.content}</p>
            {props.task.isCompleted == false &&
             <button onClick={() => props.handleComplete(props.task.id) } className={styles.button}> OKIE </button>}
             
        </div>
    )
}