import {sortCollection, filterCollection} from '../src/pizza-service'
import {expect} from 'code';

describe('Given the pizza service', () => {


    describe('When Sorting Collection', () => {

        let pizzaList,
            sortedPizzaList;

        beforeEach(() =>{

            pizzaList = ['a','b','c']
            sortedPizzaList = ['c','b','a']
        });

        it('should sort in reverse alphabetical order', () => {

            const sortedCollection = sortCollection(pizzaList);

            expect(sortedCollection).array().equal(sortedPizzaList);

        });


    })


    describe('When filtering Collection', () => {

        let pizzaList,
            filteredPizzaList,
            filterValue;

        beforeEach(() =>{

            pizzaList = ['a','b','c']
            filteredPizzaList = ['a']
            filterValue = 'a'
        });

        it('should filter the array if filter value found', () => {

            const filteredCollection = filterCollection(filterValue,pizzaList);

            expect(filteredCollection).array().equal(filteredPizzaList);

        });

        it('should not display if no filter value found', () => {

            filterValue = 'd'
            const filteredCollection = filterCollection(filterValue,pizzaList);

            expect(filteredCollection.length).equal(0);

        });


    })


})
