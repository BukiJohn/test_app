import React from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add'
import GetPosts from './components/GetPosts'
import GetSmallPosts from './components/GetSmallPosts'
import './stylesheet.css'


const myPosts = [];

class App extends React.Component {
  state = {
    mainPost: myPosts,
  }

  handleAddPost = (data) => {
    const nextPost = [data, ...this.state.mainPost]
    this.setState({ mainPost: nextPost })
  }
  render() {
    return (
      <React.Fragment>
        <div className="mainform">
          <div className="left_colon">
            <div className="add">
              <Add onAddPosts={this.handleAddPost} />
            </div>
            <div className="posts_styler">
              <GetPosts data={this.state.mainPost} />
            </div>
          </div>
          <div className="right_colon">
            <GetSmallPosts data={this.state.mainPost} />
          </div>
        </div>

      </React.Fragment>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
