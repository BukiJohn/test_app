import React from 'react'
import PropTypes from 'prop-types'
import {Avatar, Tooltip} from '@material-ui/core';


class SmallPostViewer extends React.Component {

  shortText = (e) => {
    const shortText = e.slice(0,128)
    return shortText;
  }
  
// вывод маленького списка постов на екран 

  render () {
    const {author, avatar_url, text} = this.props.data
    

    return (
      <div className="smallPostView">
      <Tooltip title={author} placement="left">
        <Avatar className="avatar_style_small" src={avatar_url} />
      </Tooltip>
        <div className="post__text">{this.shortText(text)}</div>
      </div>
    ) 
  }
}

  SmallPostViewer.propTypes = {
      data: PropTypes.shape ({
        id:PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }

  export {SmallPostViewer}