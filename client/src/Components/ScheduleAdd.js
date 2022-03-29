import React from "react";
import {post} from 'axios';


class ScheduleAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            account : '',
            title: '',
            content: '',
            location:'',
            time: '',
            etc:''
            
        }
    }
    onSubmitForm = (e) =>{
        e.preventDefault()
        this.ScheduleAdd()
            .then((response) => {
                console.log(response.data);
            })
    }
    
    ValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    ScheduleAdd = () =>{
        const url = '/add/Schedule';
        const formData = new FormData();
        formData.append('account', this.state.account)
        formData.append('title', this.state.title)
        formData.append('content', this.state.content)
        formData.append('location', this.state.location)
        formData.append('time',this.state.time)
        formData.append('etc',this.state.etc)
       
        const config = {
            headers : {
                'content-type' : 'multipart/form-data'
            }
        }
        return post(url, formData,config)
    }

    render(){
        return(
            <form onSubmit = {this.onSubmitForm}>
                <h1>일정 추가</h1>
                
                제목 :          <input type="text" name="title"     value={this.state.title}    onChange={this.ValueChange}></input>
                내용 :          <input type="text" name="content"   value={this.state.content}  onChange={this.ValueChange}></input>
                장소 :          <input type="text" name="location"  value={this.state.location} onChange={this.ValueChange}></input>
                시간 :          <input type="text" name="time"      value={this.state.time}     onChange={this.ValueChange}></input>
                기타 :          <input type="text" name="etc"       value={this.state.etc}      onChange={this.ValueChange}></input>
                <button type="submit">고고</button>
            </form>
        )
    }
}export default ScheduleAdd;