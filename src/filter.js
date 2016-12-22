import React, {Component} from 'react';
import PizzaList from './pizza-list';
import PizzaFilterInput from './pizza-filter-input';
import PizzaSortButton from './pizza-sort-button';
import {filterCollection, sortCollection} from './pizza-service';


// be sure to render the contents of the page using this component.

export class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {pizzas: [], sortedCollection: [], isLoading:true};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSortButtonClick = this.handleSortButtonClick.bind(this);
    }


    handleInputChange(event) {

    let filteredCollection=filterCollection(event.target.value, this.state.pizzas);
    this.setState({sortedCollection: filteredCollection});

    }

    handleSortButtonClick(event){

        let sortedCollection = sortCollection(this.state.sortedCollection);
        this.setState({sortedCollection});

    }




    componentDidMount() {

        return fetch('../pizza.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({pizzas: responseJson.pizzas, sortedCollection: responseJson.pizzas,isLoading:false});
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        const {pizzas, sortedCollection, sortTo, isLoading} = this.state;
        return (
            <div>
                <PizzaFilterInput
                    onTextEntered={this.handleInputChange}
                    placeHolder='Enter to Filter'
                />
                <PizzaList
                    list={sortedCollection}
                    isLoading={isLoading}
                />
                <PizzaSortButton onSortClick={this.handleSortButtonClick}/>

            </div>
        );
    }
}



Filter.displayName = 'Filter';

export default Filter;
