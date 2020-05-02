import React from 'react'
import PropTypes from 'prop-types'
import {PostViewer} from './PostViewer'

class GetPosts extends React.Component{

  //создание поста для основной колонки
    renderPosts = () => {
       const { data } = this.props
       let Posts = [];
      
       if (data.length) {
        Posts.push(data.map(function(item) {
          return <PostViewer key={item.id} data={item}/>
        }))
      } else {
        Posts.push (<p>К сожалению постов нет</p>)
      }
  
      return Posts
    }
    
    render(){
      const {data} = this.props
  
        return (
          <div className='main_posts'>
          {this.renderPosts()}
          {
          data.length ? <strong className={'post__count'}>Обьявлений: {data.length}</strong> : null
          }
        </div>
        );
      }
  }
  
    GetPosts.propTypes = {
      data: PropTypes.array.isRequired
    }

export {GetPosts}