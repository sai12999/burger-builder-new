import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {

    state = {
        ingredients  : {
            meat : 1,
            salad : 1,
            bacon : 1,
            cheese : 1
        }
    }

    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Auxiliary>
        )
    }
}

export default BurgerBuilder