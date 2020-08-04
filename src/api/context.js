import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRoom:[],
        loading:true
    }
    // getData
    componentDidMount(){
        let rooms=this.formatData(items);
        console.log(rooms)
    }
    formatData(items){
        let tempItem =items.map(item =>{
            let id = item.sys.id
            let images =item.fields.images.map(image =>
                image.fields.file.url)
            let room ={...item.fields ,images,id}
            return room;   
        })
        return tempItem
    }
    render() {
        return (
        <RoomContext.Provider value={{...this.state}}>
            {this.props.children}
        </RoomContext.Provider>
        )
    }
}


const RoomConsumer = RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext}