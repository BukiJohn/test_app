import React from 'react'
import PropTypes from 'prop-types'
import PostViewer from './PostViewer'

class GetPosts extends React.Component {

  //создание поста для основной колонки
  renderPosts = () => {
    const { data } = this.props
    let Posts = [];
    Posts.push(data.map(function (item) {
      return <PostViewer key={item.id} data={item} />
    }))
    return Posts
  }

  render() {

    return (
      <div className='main_posts'>
        {this.renderPosts()}
      </div>
    );
  }
}

GetPosts.propTypes = {
  data: PropTypes.array.isRequired
}

export default GetPosts
