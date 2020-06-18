import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg'
import style from './index.module.css'
import ClassComponent from './pages/classComponent.js'
import FunctionComponent from './pages/functionComponent.js'
import Lifecyclepage from './pages/Lifecyclepage.js'
import Layout from './pages/Layout'

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

const JSX = (
  <div>
    { show ? greet : 'Bad' }
    <ul>
      { a.map(i => (<li key={i}>{i}</li>)) }
    </ul>
    { formatName(user) }
    <div className={style.logo}>
      <img alt="svg" src={logo} style={{ width: 100, height:100 }} />
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
      <Layout>
        {{
          content: (
            <div>
              <h3>Home Page</h3>
            </div>
          ),
          txt: "这是个文本",
          btnClick: () => {
            console.log('btn click')
          }
        }}
      </Layout>
    </div>
  </div>
)


ReactDOM.render(
  JSX,
  document.getElementById('root')
);
