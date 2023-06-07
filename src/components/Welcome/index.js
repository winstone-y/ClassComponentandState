// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, buttonText: 'Subscribe'}

  onSubscribe = () => {
    const {isSubscribed, buttonText} = this.state
    if (isSubscribed === false) {
      this.setState({isSubscribed: true, buttonText: 'Subscribed'})
      return buttonText
    }
    this.setState({isSubscribed: false, buttonText: 'Subscribe'})
    return buttonText
  }

  render() {
    const {buttonText} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="tag-line">Thankyou, Happy Learning!</p>
        <div>
          <button className="button" type="button" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
