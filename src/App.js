import React, {useState} from 'react';
import moment from 'moment'

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

 const prettyTime = (DateComponent) =>{
   return class extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        date : ''
      }
    }

    mutateDate(){
      const currentDate = moment()
      const publishDate = moment(this.props.date)

      if(currentDate.diff(publishDate, 'day') >= 1){
        return(currentDate.diff(publishDate, 'day') + ' дней назад')
      }
      else if(currentDate.diff(publishDate, 'hour')  >= 1 ){
        return(currentDate.diff(publishDate, 'hour') + ' часов назад')
      }
      else if(currentDate.diff(publishDate, 'hour') < 1){
        return(currentDate.diff(publishDate, 'minute') + ' минут назад')
      }
    }

    componentDidMount(){
      this.setState({date : this.mutateDate()})
    }

     render(){
       return(
         <DateComponent date = {this.state.date} />
       )
     }
   }
 }

 const DateTimePretty =  prettyTime(DateTime)

 

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}