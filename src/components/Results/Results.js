import styles from './Results.module.css'

const Results = (props) => {

    return (
        <ul className={styles.results}>
            {props.resultData.map(item => (
                <li key={item.key}>{item.userName} <span>({item.userAge} years old)</span></li>
            ))}
        </ul>
    )
}

export default Results;