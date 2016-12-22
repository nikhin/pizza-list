 import React, {PropTypes} from 'react';
 import '../src/pizza-item.scss';

 const PizzaItem = props =>

    <li className='pizza-item'>
        <label>{props.name}</label>
    </li>


 PizzaItem.displayName = 'PizzaItem';
 PizzaItem.propTypes = {
     name:  PropTypes.string.isRequired
 };

 export default PizzaItem;
