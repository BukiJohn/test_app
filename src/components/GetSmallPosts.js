import React from 'react'
import PropTypes from 'prop-types'
import SmallPostViewer from './SmallPostViewer'

class GetSmallPosts extends React.Component {

  //создание поста для дополнительной колонки

  render() {
    const { data } = this.props

    return (
      <div className="small_posts">
        {
          data.slice(0, 5).map(function (item) {
            return <SmallPostViewer key={item.id} data={item} />
          })
        }
      </div>
    );
  }
}

GetSmallPosts.propTypes = {
  data: PropTypes.array.isRequired
}

export default GetSmallPosts
