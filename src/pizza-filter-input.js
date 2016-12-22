import React, {PropTypes} from 'react';
import '../src/pizza-filter-input.scss';

const PizzaFilterInput = (props) => {

    return (
        <div className="input-criteria-section">
            <input
                className="input-criteria"
                onChange={props.onTextEntered}
                placeholder={props.placeHolder}
                type='text'
            />
        </div>
    );

};

PizzaFilterInput.displayName = 'PizzaFilterInput';

export default PizzaFilterInput;
