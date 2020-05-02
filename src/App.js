import React  from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import {Add} from '.components/Add'
import {GetPosts} from '.components/GetPosts'
import './App.css'

const myPosts = [];

class App extends React.Component {
  state = {
    mainPost:myPosts,  
  }

  handleAddPost = (data) =>{
    const nextPost = [data, ...this.state.mainPost]
    this.setState({mainPost: nextPost})
  }
  render(){
  return (
    <React.Fragment>
      <h3>Наши посты</h3>
      <Add onAddPosts={this.handleAddPost} />
      <GetPosts data={this.state.mainPost}/>
    </React.Fragment>
  )
}
}


  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

  export default App
