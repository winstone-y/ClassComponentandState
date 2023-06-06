// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="tag-line">Thankyou, Happy Learning!</p>
        <div>
          {isSubscribed ? (
            <button type="button" className="button">
              Subscribed
            </button>
          ) : (
            <button type="button" className="button">
              Subscribe
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
