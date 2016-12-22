import React, {PropTypes} from 'react';
import LoadingIndicator from '../src/loading-indicator';
import PizzaItem from '../src/pizza-item';
import '../src/pizza-list.scss';

const PizzaList = props =>
    {
        return (
        !props.isLoading ?
            <div className="pizza-list">
            <ul className='pizza-list-items'>
                {props.list.map((item, index) =>
                    <PizzaItem
                        name={item}
                        key={item}
                    />
                )}
            </ul> </div>: <LoadingIndicator/>)
    }

PizzaList.displayName = 'PizzaList';

export default PizzaList;
