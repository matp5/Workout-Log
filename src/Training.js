import React, { Component } from 'react';

class Training extends Component {
    render() { 
        return ( 
            <section className='training'>
                <div className='training__date'>
                <h1>Enter date</h1>
                    <input type='text' placeholder='dd-mm-yyyy'/>
                    <button>Next</button>
                </div>
            </section>
         );
    }
}
 
export default Training;