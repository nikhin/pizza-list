import React from 'react';
import Chance from 'chance'
import {expect} from 'code';
import {shallow, mount} from 'enzyme';
import Filter from '../src/filter';
import PizzaFilterInput from '../src/pizza-filter-input'
import PizzaSortButton from '../src/pizza-sort-button'
import PizzaList from '../src/pizza-list'
import sinon from 'sinon';

const chance = new Chance();

describe('<Filter /> Component', () => {
    let renderedFilter,
        sandbox,
        testProps;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        testProps = Object.freeze({
            onTextEntered:sandbox.stub(),
            pizzas: [chance.string(),chance.string(),chance.string()],

        });
        renderedFilter = shallow(<Filter {...testProps}/>);
        renderedFilter.setState({pizzas:testProps.pizzas,sortedCollection:[]});
    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should be a <div/>', () => {
        expect(renderedFilter.type()).string().equal('div');
    });

    describe('and its <PizzaFilterInput/>', () => {

        let pizzaFilterInput;

        beforeEach(() => {

            pizzaFilterInput = renderedFilter.childAt(0);

        });

        it('should be using <PizzaFilterInput/>', () => {

            expect(pizzaFilterInput.type()).function().equal(PizzaFilterInput);

        });

        it('`should have a callback `onTextEntered`', () => {

            const expectedPizza = chance.string();

            const eventMock = {
                target: {
                    value: expectedPizza
                }
            };
            pizzaFilterInput.props().onTextEntered(eventMock);

        });


    });

    describe('and its <PizzaList/>', () => {

        let pizzaList;

        beforeEach(() => {

            renderedFilter.setState({pizzas:testProps.pizzas,sortedCollection:[]});
            pizzaList = renderedFilter.childAt(1);

        });

        it('should be using <PizzaList/>', () => {

            expect(pizzaList.type()).function().equal(PizzaList);

        });

    });


    describe('and its <PizzaSortButton/>', () => {

        let pizzaSortButton;

        beforeEach(() => {

            pizzaSortButton = renderedFilter.childAt(2);

        });

        it('should be using <PizzaSortButton/>', () => {

            expect(pizzaSortButton.type()).function().equal(PizzaSortButton);

        });

        it('`should have a callback `onSortClick`', () => {

            pizzaSortButton.props().onSortClick();

        });


    });


});
