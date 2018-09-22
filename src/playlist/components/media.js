import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component
{
  /**
  constructor(props)
  {
    super(props)

    this.state = {
      author: props.author
    }
  }
  **/

  handleClick = (event) => {
    this.setState({
      author: 'Leonidas Esteban'
    })
  }

  render() {
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.cover}
            alt="Cover"
            width={240}
            heigh={160}
          />
        </div>
        <h3 className="Media-title">
          {this.props.title}
        </h3>
        <p className="Media-author">
          {this.props.author}
        </p>
      </div>
    )
  }
}

Media.defaultProps = {
  author: 'Anónimo'
}

// Validar props
Media.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media
