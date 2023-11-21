import styles from "./Form.module.css";
import { useState } from "react";

const Form = (props) => {
    const [userInfo, setUserInfo] = useState({});

    const inputDataHandler = (id, value) => {
        setUserInfo((prevInput) => {
            return {
                ...prevInput,
                key: Math.random().toString(),
                [id]: value,
            };
        });
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log(userInfo);
        if (+userInfo.userAge <= 0) {
            props.onShowModal("Age can't less  than 0");
            return
        } else if (+userInfo.userAge >= 110) {
            props.onShowModal("Age cant be more than 110");
            return
        }

        props.onUserInput(userInfo);
    };

    return (
        <form className={styles.form} onSubmit={submitFormHandler}>
            <label htmlFor="userName">Username</label>
            <input
                type="text"
                required
                id="userName"
                onChange={(event) => {
                    inputDataHandler("userName", event.target.value);
                }}
            />
            <label htmlFor="userAge">Age (Years)</label>
            <input
                type="number"
                required
                id="userAge"
                onChange={(event) => {
                    inputDataHandler("userAge", event.target.value);
                }}
            />
            <button>Add User</button>
        </form>
    );
};

export default Form;
