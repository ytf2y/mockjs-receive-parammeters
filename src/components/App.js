import React,{Component} from 'react';

import "../mock"

import axios from 'axios';

import './App.css'

class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        /*axios.get('/list').then((res)=>{
            console.log(res.data);
        })*/
        /*axios.post('/login',{ username:"admin",password:"1234" } ).then((res)=>{
            console.log(res.data);
        })*/

        axios.post('/goodList',{page:1,pageSize:10 }).then((res)=>{
            console.log(res.data.list);
        })


    }
    render(){
        return (
            <div className="app">
				<div className="btn" onClick={ this.handleClick }>点击获取数据</div>
            </div>
        )
    }
}

export default App;

