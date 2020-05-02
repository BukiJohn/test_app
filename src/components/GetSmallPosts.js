import React from 'react'
import PropTypes from 'prop-types'
import {PostViewer} from './PostViewer'

class GetSmallPosts extends React.Component{

  state = {
    counter: 0,
    posts: [],
  }
//создание поста для дополнительной колонки
    renderPosts = () => {
       const { data } = this.props
       let Posts =[]

          if (this.state.counter<=4){
          if (data.length) {
            console.log(this.state.counter)
            Posts.push(data.map(function(item) {
              return <PostViewer key={item.id} data={item}/>
            })) 
          }
          else {
            Posts = <p>К сожалению постов нет</p>
        }
      } else {
          Posts.shift();
      }    
      return Posts;
  }
  
    
    render(){
      const {data} = this.props
  
        return (
          <div className='small_posts'>
          {this.renderPosts()}
        </div>
        );
      }
  }
  
    GetSmallPosts.propTypes = {
      data: PropTypes.array.isRequired
    }

export {GetSmallPosts}