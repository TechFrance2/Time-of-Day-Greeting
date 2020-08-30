import React, {Component} from "react"




class App extends Component {
    render () {
    const date = new Date()
    const hours = date.getHours ()
    let timeOfDay
    const styles ={
        fontSize: 30
    }

    if (hours <12){
        timeOfDay = "morning"
        styles.color = "#04756F"

    } else if (hours >=12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
        styles.textAlign = "center"

    } else {
        timeOfDay= "night"
        styles.color = "#D9000"
    }

    
    return (
        
        <h1 style = {styles} > Good {timeOfDay} to you, sir or madam!</h1>
                
    )
  }
}

export default App  
