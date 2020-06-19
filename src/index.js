import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg'
import style from './index.module.css'
import ClassComponent from './pages/classComponent.js'
import FunctionComponent from './pages/functionComponent.js'
import Lifecyclepage from './pages/Lifecyclepage.js'
import Layout from './pages/Layout'
import ReduxPage from './pages/ReduxPage'
import { Provider } from 'react-redux'
import ReactReduxPage from './pages/ReactReduxPage';
import store from './store/ReduxStore'
import RouterPage from './pages/RouterPage'

const show = true
const greet = <h2>Good</h2>
const a = [1, 2, 3]
const user = {
  firstName: "Richard",
  lastName: "Zhao"
}

function formatName(v) {
  return v.firstName + ' ' + v.lastName
}

// 全局提供store
const JSX = (
  <Provider store={store}>
    <div>
      {show ? greet : 'Bad'}
      <ul>
        {a.map(i => (<li key={i}>{i}</li>))}
      </ul>
      {formatName(user)}
      <div className={style.logo}>
        <img alt="svg" src={logo} style={{ width: 100, height: 100 }} />
      </div>
      <div>
        <ClassComponent></ClassComponent>
      </div>
      <div>
        <FunctionComponent></FunctionComponent>
      </div>
      <div>
        <Lifecyclepage></Lifecyclepage>
      </div>
      <div>
        <Layout showTopBar={true} showBottomBar={true} title="用户中心">
          <div>
            <h3>UserPage</h3>
          </div>
        </Layout>
      </div>
      <div>
        <ReduxPage></ReduxPage>
      </div>
      <div>
        <ReactReduxPage></ReactReduxPage>
      </div>
    </div>
    <div>
      <RouterPage></RouterPage>
    </div>
  </Provider>
)


ReactDOM.render(
  JSX,
  document.getElementById('root')
);
