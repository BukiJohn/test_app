import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from '@material-ui/core'


class PostViewer extends React.Component {
  state = {
    visible: false,
  }
  handleReadMoreClick = (e) => {
    e.preventDefault()
    this.setState({visible:true})
  }

  
  
// вывод поста на екран 
  render () {
    const {author, avatar_url, text} = this.props.data
    const {visible} = this.state

    return (
      <div className="postViewe">
        <p className="post__author">{author}:</p>
          <Avatar className="avatar_style" src={avatar_url} />
        
        {!visible && <a onClick={this.handleReadMoreClick}href="www.ukr.net" className="post_readmore">Подробнее</a>}
        {visible && <p className="post__text">{text}</p>}
      </div>
    ) 
  }
}

  PostViewer.propTypes = {
      data: PropTypes.shape ({
        id:PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }

  export {PostViewer}