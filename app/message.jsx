import styles from "./message.module.scss"

const Message = ({author, message, type}) => {


    return(

        <aside className={type === 'positive' ? styles.positiveContainer : styles.errorContainer}>
            <p>{message}</p>
            <span>{author}</span>
        </aside>


    )



}

export default Message