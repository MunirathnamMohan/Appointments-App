import { Component } from "react"
import AppointmentItem from '../AppointmentItem'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class Appointments extends Component{
    state={title:'',date:'',appointmentsList:[],isStarred:false}

    onAdd=(event)=>{
        event.preventDefault()
        const{title,date,appointmentsList}=this.state

       if(title!=='' && date!==''){
        const newAppointment={
            id:uuidv4(),
            title,
            date,
            isClicked:false
        }
        this.setState(prevState => ({
            appointmentsList: [...prevState.appointmentsList,newAppointment],
            title:'',
            date:''
          }))
       }
       
    }

    onDate=(event)=>{
       this.setState({date:new Date(event.target.value)})
    }
    onTitle=(event)=>{
        this.setState({title:event.target.value})
    }

    onStarImageToggle=(id)=>{
        const{appointmentsList}=this.state

        this.setState(prevState => ({
            appointmentsList: prevState.appointmentsList.map(eachappointment => {
              if (id === eachappointment.id) {
                return {...eachappointment, isClicked: !eachappointment.isClicked}
              }
              return eachappointment
            }),
          }))

    }

    onStarred=()=>{
        const {isStarred}=this.state
        this.setState({isStarred:!isStarred})
    }
    
    getFilteredOnes=()=>{
        const{appointmentsList,isStarred}=this.state
        if(isStarred){
            return appointmentsList.filter(eachOne=>eachOne.isClicked===true)
        }
        return appointmentsList

    }


    render(){
        const{title,date,appointmentsList}=this.state
        const filteredItems=this.getFilteredOnes()
        
        return(
            <div className="bg-container">
                <div className="card-container">
                    <div className="top-container">
                    <div className="text-con">
                        <h1 className="header">Add Appointment</h1>
                        <form onSubmit={this.onAdd}>
                            <label className="title">TITLE</label>
                            <input value={title} onChange={this.onTitle} type="search" placeholder="Title" className="title-input"/><br/>
                            <label className="date">DATE</label>
                            <input value={date} type="date" onChange={this.onDate} placeholder="dd/mm/yyyy" className="date-input"/><br/>
                            <button className="add-button" type="submit">Add</button>
                        </form>
                        
                    </div>
                    <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="appointments" className="img"/>

                    </div>
                    <hr/>
                    <div className="below-con">
                        <div className="below-first-con">
                            <p className="appointments">Appointments</p>
                            <button onClick={this.onStarred} className="started-btn">Starred</button>
                        </div>
                        <ul className="app-con">
                            {filteredItems.map((eachItem)=>
                             <AppointmentItem eachItem={eachItem} key={eachItem.id} onStarImageToggle={this.onStarImageToggle}/>)}

                        </ul>

                    </div>
                    

                </div>

            </div>

        )
    }

}

export default Appointments