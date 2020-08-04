import React, { Component } from 'react'
import {RoomContext} from '../api/context'

export default class FeasureRoom extends Component {
    static contextType = RoomContext
    render() {
        const {name , greading} =this.context;
        // console.log(value)
        return (
            <div>
                {greading}, {name} from feature rooms
            </div>
        )
    }
}
