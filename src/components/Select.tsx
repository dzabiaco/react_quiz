import React, { useEffect } from 'react';

type Props = {
    // getOption?: (event:  React.ChangeEvent<HTMLSelectElement>) => void;
    getOption?: any;
}

const Select: React.FC<Props> = (props) => {

    useEffect(() => {
        $(document).ready(function(){
            $('select').formSelect();
          });
    }, []);

    return <div>
        <div className="input-field col s12">
            <select onChange={(event)=> props.getOption(event)!}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <label>Choose your difficulty</label>
        </div>
    </div>
};

export default Select;

