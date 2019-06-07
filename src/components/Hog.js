import React, {Component} from 'react'

export default class Hog extends Component {

    state = {
        selectedHog: false
    }

    selectHog = () => {
        this.setState({selectedHog: !this.state.selectedHog})
    }

    
    render () {
        const { hog } = this.props
        const fileName = hog.name.toLowerCase().replace(/ /g, "_")
        const filePath = require(`../hog-imgs/${fileName}.jpg`)
        const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        // console.log("hog:", hog[weight])
        return(
            <div className= "ui card">
                <div className="image">
                    <img src={filePath}/>
                </div>
                <div className="content">
                    <a className="header">Name: {hog.name}</a>
                </div>
                <div className="description">
                    Specialty: {hog.specialty}
                </div>
                <div>
                    <a>Weight: {hog[weight]}</a>
                </div>
                <div>
                <button style={{margin: "10px"}} onClick={this.selectHog}>click me</button>
                </div>
                {this.state.selectedHog === true
                ?<div style={{margin: "10px"}}>
                 <a>Highest Achievement: {hog['highest medal achieved']}</a>
                </div>
                : null
                }
            </div>
        )
    }
}


// {
//     name: 'Mudblood',
//     specialty: 'Mediocre magic',
//     greased: false,
//     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//     'highest medal achieved': 'bronze'
//   },