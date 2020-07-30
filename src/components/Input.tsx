import React, { useEffect } from 'react';

type Props = {
    numberQue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
    useEffect(() => {
        $(document).ready(function () {
            M.updateTextFields();
        });
    }, []);
    return <div className="input-field col s6">
        <input placeholder="10" id="number" type="text" onChange={(event)=> props.numberQue(event)} />
        <label htmlFor="first_name" className="active">Choose quantity</label>
    </div>
};

export default Input;