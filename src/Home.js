import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';

class Home extends Component {
    render(){
        return(
            <div className="App">
                <h2>ข้อมูลของ Home Component</h2>
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>


            </div>
        )
    }

}

// function Home() {
//     return (
//         <div className="App">
//             <h2>สวัสดี Function Component</h2>
//         </div>

//     );
// }

export default Home;