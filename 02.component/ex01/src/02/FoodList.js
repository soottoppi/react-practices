import React, { Component } from 'react';
import ListItem from './ListItem'

export default class FoodList extends Component {
    render() {
        //const components = [];
        // const foods = this.props.foods;
        // for(let i = 0; i< foods.length; i++){
        //     components[i] = <ListItem name = {foods[i].name} quantity={foods[i].quantity}/>
        // }
        // this.props.foods.forEach(function(food){
        //     components.push(<ListItem name = {food.name} quantity={food.quantity}/>);
        // })

    

        return (
            <ul>
                { this.props.foods.map((food) => <ListItem 
                                                    name = {food.name}
                                                    quantity={food.quantity} />) }
            </ul>

            
        )
    }
}