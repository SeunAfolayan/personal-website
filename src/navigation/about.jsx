import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( <div className = 'container'>
        <br/><br/>
            <h6>Hi, I'm Shay!</h6>
            <br/>
            <h6>A <mark className='accent-color'> Software Engineer</mark> passionate about user experience design, front end development, and writing. </h6>
            <br/>
            <h6>If you want to know more, here's my <mark className='accent-color'>cv</mark></h6>
            
        </div> );
    }
}
 
export default About;