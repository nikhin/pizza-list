import React, {PropTypes} from 'react';
import '../src/pizza-sort-button.scss';

const PizzaSortButton = (props) => {

    return (
        <div className="sort-section">
            <button
                type='button'
                onClick={props.onSortClick}
            >
            Sort
            </button>
        </div>
    );

};

PizzaSortButton.displayName = 'PizzaSortButton';
PizzaSortButton.propTypes = {
    onSortClick:  PropTypes.func.isRequired
};

export default PizzaSortButton;
