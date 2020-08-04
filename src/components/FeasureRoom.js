import React, { Component } from 'react'
import {RoomContext} from '../api/context'

export default class FeasureRoom extends Component {
    static contextType = RoomContext
    render() {

        return (
            <div>
                hello from feature rooms
            </div>
        )
    }
}
