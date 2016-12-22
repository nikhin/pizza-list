import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import PizzaItem from '../src/pizza-item';
import Chance from 'chance'

const chance = new Chance();

describe('<PizzaItem /> Component', () => {

    let renderedPizzaItem,
        testProps;

    beforeEach(() =>{

        testProps = Object.freeze({
            name:chance.string()
        });
        renderedPizzaItem = shallow(<PizzaItem {...testProps}/>);

        });


    it('should be a <li/>', () => {

        expect(renderedPizzaItem.type()).string().equal('li');

    });

    it('should have a unique class name', () => {

        expect(renderedPizzaItem.hasClass('pizza-item')).true();

    });

    describe('and the pizza label', () => {

        let pizzaLabel;

        beforeEach(() => {

            pizzaLabel = renderedPizzaItem.childAt(0);

        });

        it('should be a <label/>', () => {

            const pizzaLabelText = pizzaLabel.childAt(0);

            expect(pizzaLabel.type()).string().equal('label');
            expect(pizzaLabelText.node).string().equal(testProps.name);

        });

    });

});
