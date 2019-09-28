import React from 'react'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {createGlobalStyle} from 'styled-components'

import NotFoundComponent from '../../templates/404/components/index'
import PosterTemplate from '../../templates/poster/components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
  }

  #root {
    height: 100%;
  }

  @font-face {
    font-family: 'RM4SCC';
    src: url('/fonts/rm4scc.woff') format('woff');
  }
`

const AppComponent = props => {

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route
          path={`/encode/:id`}
          component={PosterTemplate}
        />
        <Route
          component={NotFoundComponent}
        />
      </Switch>
    </Router>
  )
}

export default AppComponent
