import {Component} from 'react'
import TabItem from '../TabItem'
import GreetMessage from '../GreetMessage'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greeting extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  updateTabItem = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div className="app-container">
        <h1>Multilingual Greetings</h1>
        <ul className="greeting-btn-container">
          {languageGreetingsList.map(eachTab => (
            <TabItem
              key={eachTab.id}
              tabDetails={eachTab}
              isActive={activeTabId === eachTab.id}
              updateTabItem={this.updateTabItem}
            />
          ))}
        </ul>
        {languageGreetingsList.map(eachTab => (
          <GreetMessage
            key={eachTab.id}
            tabDetails={eachTab}
            isActive={activeTabId === eachTab.id}
          />
        ))}
      </div>
    )
  }
}

export default Greeting
