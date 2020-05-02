import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Tooltip } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';



class PostViewer extends React.Component {


  // вывод списка постов на екран

  render() {
    const { author, avatar_url, text } = this.props.data

    return (
      <div className="postViewe">
        <StylesProvider injectFirst>
          <Tooltip title={author} placement="bottom">
            <Avatar className="avatar_style_large" src={avatar_url} />
          </Tooltip>
        </StylesProvider>
        <div className="post__author">{author}</div>
        <div className="post__text">{text}</div>
      </div>
    )
  }
}

PostViewer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default PostViewer
