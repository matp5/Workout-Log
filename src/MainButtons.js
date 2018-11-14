import React, {Component} from 'react';

class MainButtons extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        return ( 
            
        <div className = 'mainButtons'>
            <button onClick={this.handleClick}>Nowy trening</button> 
            <button>Poprzednie treningi</button> 
        </div>
        );
    }
}
 
export default MainButtons;