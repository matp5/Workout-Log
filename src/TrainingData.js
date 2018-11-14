import React, { Component } from 'react';

class TrainingData extends Component {
    render() { 
        return (
            <div className='training__data'>
                <div className='training__data--exercise'>
                    <h2>Type your exercise</h2>
                    <input type='text' /><button>Next</button>
                </div>
                <div className='training__items'>
                    <div className='training__item'>
                        <p>Set</p>
                        <p>Kg</p>
                        <p>Reps</p>
                    </div>
                </div>
            </div>
        );
    }
}

 
export default TrainingData;