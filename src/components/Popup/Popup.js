import styles from './Popup.module.css'

const Popup = (props) => {
    const closeButtonHandler = () => {
        props.onClosePopup();
    }

    return (
        <div className={styles.popup}>
            <div className={styles['popup-inner']}>
                <header>Invalid input</header>
                <main>
                    <p>{props.textContent}</p>
                    <button onClick={closeButtonHandler}>Okay</button>
                </main>
            </div>
        </div>
    )
};

export default Popup;
