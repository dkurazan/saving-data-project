import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import Popup from "./components/Popup/Popup";
import { useState } from "react";

const outputDataArr = [];
const initialPopupState = {
    value: false,
    text: ""
};

function App() {
    const [otputData, setOtputData] = useState(null);
    const [popupState, setPopupState] = useState(initialPopupState);

    const userInputHandler = (inputData) => {
        outputDataArr.push(inputData);
        setOtputData((prevData) => {
            return [inputData, prevData];
        });
    };

    const showPopupHandler = (ageInfo) => {
        setPopupState({ value: true, text: ageInfo });
    };

    const closePopupHandler = () => {
        setPopupState(initialPopupState);
    };

    return (
        <div className="App">
            <Form
                onUserInput={userInputHandler}
                onShowModal={showPopupHandler}
            />
            {outputDataArr.length && <Results resultData={outputDataArr} />}
            {popupState.value && <Popup onClosePopup={closePopupHandler} textContent={popupState.text}/>}
        </div>
    );
}

export default App;
