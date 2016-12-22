import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import LoadingIndicator from '../src/loading-indicator';
import Spinner from 'react-spinkit'

describe('<LoadingIndicator /> Component', () => {

    let renderedLoadingIndicator


    beforeEach(() =>{

        renderedLoadingIndicator = shallow(<LoadingIndicator/>);

        }

    )

    it('should have  <Spinner/>', () => {

        expect(renderedLoadingIndicator.type()).function().equal(Spinner);

    });

    it('should have a unique class name', () => {

         expect(renderedLoadingIndicator.props().spinnerName).equal('three-bounce');

    });


});
