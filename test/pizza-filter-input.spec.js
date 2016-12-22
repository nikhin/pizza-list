import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import PizzaFilterInput from '../src/pizza-filter-input';
import Chance from 'chance'
import sinon from 'sinon'

const chance = new Chance();

describe('<PizzaFilterInput /> Component', () => {

    let renderedPizzaFilterInput,
        sandbox,
        testProps;

    beforeEach(() =>{

            sandbox = sinon.sandbox.create();

            testProps = Object.freeze({
                onTextEntered: sandbox.stub(),
                placeHolder: chance.string()
            });
        renderedPizzaFilterInput = shallow(<PizzaFilterInput {...testProps}/>);

        });

    afterEach(() => {

        sandbox.restore();

    });

    it('should be a <div/>', () => {

        expect(renderedPizzaFilterInput.type()).string().equal('div');

    });



    describe('and the <input/>', () => {

        let pizzaFilterInput;

        beforeEach(() => {

            pizzaFilterInput = renderedPizzaFilterInput.childAt(0);

        });

        it('should be a <input/>', () => {
            expect(pizzaFilterInput.type()).string().equal('input');
        });

        it('should have an `onTextEntered` callback', () => {

            pizzaFilterInput.props().onChange();

            sinon.assert.calledOnce(testProps.onTextEntered);

        });

        it('should have a unique class name', () => {

            expect(pizzaFilterInput.hasClass('input-criteria')).true();

        });

        it('should have a unique class name', () => {

            expect(pizzaFilterInput.hasClass('input-criteria')).true();

        });

        it('should have `placeHolder`', () => {

            expect(pizzaFilterInput.props().placeholder).equal(testProps.placeHolder);

        });

    });

});
