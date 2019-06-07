import React, {Component} from "react"
import Hog from './Hog'

export default class HogList extends Component {

    
    render () {
        const { hogs } = this.props

        // console.log("props:", hogs)
        return (
            <div className="ui cards">
                {hogs.map(hog => <Hog key={hog.name} hog={hog}/>)}
            </div>
        )
    }
}