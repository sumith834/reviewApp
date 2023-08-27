/* eslint-disable react/no-unused-state */
// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  rightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({prevState: prevState.activeReviewIndex + 1}))
    }
  }

  leftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({prevState: prevState.activeReviewIndex - 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentActiveIndex = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <div className="arrows-container">
          <button
            type="button"
            onClick={this.leftArrow}
            data-testid="leftArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentActiveIndex)}
          <button
            type="button"
            onClick={this.rightArrow}
            data-testid="rightArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
