import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import PizzaSortButton from '../src/pizza-sort-button';
import sinon from 'sinon'

describe('<PizzaSortButton /> Component', () => {

    let renderedPizzaSortButton,
        sandbox,
        testProps;

    beforeEach(() =>{

        sandbox = sinon.sandbox.create();

        testProps = Object.freeze({
                onSortClick: sandbox.stub()
            });
        renderedPizzaSortButton = shallow(<PizzaSortButton {...testProps}/>);

        });

    afterEach(() => {

        sandbox.restore();

    });

    it('should be a <div/>', () => {

        expect(renderedPizzaSortButton.type()).string().equal('div');

    });



    describe('and the sort <button/>', () => {

        let pizzaSortButton;

        beforeEach(() => {

            pizzaSortButton = renderedPizzaSortButton.childAt(0);

        });

        it('should be a <button/>', () => {
            expect(pizzaSortButton.type()).string().equal('button');
        });

        it('should have an `onSortClick` callback', () => {

            pizzaSortButton.props().onClick();

            sinon.assert.calledOnce(testProps.onSortClick);

        });

    });

});
