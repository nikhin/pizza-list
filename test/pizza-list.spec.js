import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import PizzaList from '../src/pizza-list'
import PizzaItem from '../src/pizza-item'
import Chance from 'chance'
import LoadingIndicator from '../src/loading-indicator';

const chance = new Chance();

describe('<PizzaList /> Component', () => {

    let renderedPizzaList,
        testProps;

    describe('When pizza loaded', () => {

        beforeEach(() =>{

                testProps = Object.freeze({
                    list:[chance.string(),chance.string(),chance.string()],
                    isLoading: false
                });
                renderedPizzaList = shallow(<PizzaList {...testProps}/>);

            });

        it('should be a <div/>', () => {

            expect(renderedPizzaList.type()).string().equal('div');

        });

        it('should have a unique class name', () => {

            expect(renderedPizzaList.hasClass('pizza-list')).true();

        });

        describe('and its pizza items', () => {

            let renderedPizzaItems
                beforeEach(() =>{

                    renderedPizzaItems = renderedPizzaList.childAt(0);

            });

            it('should be a <ul/>', () => {

                expect(renderedPizzaItems.type()).string().equal('ul');

            });

            it('should have a unique class name', () => {

                expect(renderedPizzaItems.hasClass('pizza-list-items')).true();

            });

            describe('and its <PizzaItem/>', () => {

                it('should be a <PizzaItem/>', () => {

                    renderedPizzaItems.children().forEach((item, index) => {

                        const pizzaItem = renderedPizzaItems.childAt(index);

                        expect(pizzaItem.type()).function().equal(PizzaItem);

                    });

                });

                it('should have `key`', () => {

                    renderedPizzaItems.children().forEach((tab, index) => {

                        const pizzItemkey = renderedPizzaItems.childAt(index).key();

                        expect(pizzItemkey).equal(testProps.list[index]);

                    });

                });


            });

        });

    });

    describe('When pizza not loaded', () => {

        beforeEach(() =>{

            testProps = Object.freeze({
                list:[],
                isLoading: true
            });
            renderedPizzaList = shallow(<PizzaList {...testProps}/>);

        });

        it('should be using <LoadingIndicator/>', () => {

            expect(renderedPizzaList.type()).function().equal(LoadingIndicator);

        });


    })

});
