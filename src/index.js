import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state, action) => {
  if (!state) {
    return { n: 0 }
  } else {
    if (action.type === 'add') {
      return { n: state.n + action.payload }
    } else {
      return state
    }
  }
}
const store = createStore(reducer)

function add3() {
  let n = store.getState().n
  if (n % 2 === 1) {
    store.dispatch({ type: 'add', payload: 1 })
  }
}

function add4() {
  setTimeout(() => {
    store.dispatch({ type: 'add', payload: 1 })
  }, 1000)
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App onAdd3={add3} onAdd4={add4} />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
