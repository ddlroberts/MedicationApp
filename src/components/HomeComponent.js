import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
      }
      render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>;
      }
      componentDidMount() {
        const oneSecond = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
      }
    } 


function Home(props) {
    return (
        <div className="container">
           
            <h2 className="calendar">Set Medication Reminder</h2>
            <div> {<Clock />}</div>
            {<Calendar />}
            
        </div>
    )
}

export default Home;