import React from "react";
import {post} from 'axios';


class UserAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file: null,
            userId: '',
            fileName:'',
            userName:'',
            birthday:'',
            gender: '',
            job:''
        }
    }
    onSubmitForm = (e) =>{
        e.preventDefault()
        this.addUser()
            .then((response) => {
                console.log(response.data);
            })
    }
    FileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }
    ValueChange = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    addUser = () =>{
        const url = '/api/userArr';
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('userId', this.state.userId)
        formData.append('UserName', this.state.userName)
        formData.append('birthday',this.state.birthday)
        formData.append('gender',this.state.gender)
        formData.append('job',this.state.job)
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
                <h1>유저추가</h1>
                프로필 이미지 : <input type="file" name="file"      file={this.state.file}      value={this.fileName} onChange={this.FileChange}></input>
                id :            <input type="text" name="userId"    value={this.state.userId}   onChange={this.ValueChange}></input>
                이름 :          <input type="text" name="userName"  value={this.state.userName} onChange={this.ValueChange}></input>
                생년월일 :      <input type="text" name="birthday"  value={this.state.birthday} onChange={this.ValueChange}></input>
                성별 :          <input type="text" name="gender"    value={this.state.gender}   onChange={this.ValueChange}></input>
                직업 :          <input type="text" name="job"       value={this.state.job}      onChange={this.ValueChange}></input>
                <button type="submit">고고</button>
            </form>
        )
    }
}export default UserAdd;