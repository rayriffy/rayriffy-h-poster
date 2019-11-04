import React from 'react'

import { Helmet } from 'react-helmet'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'

import {createGlobalStyle} from 'styled-components'

import LoadingComponent from '../../templates/loading/components'

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

const PosterPage = Loadable({
  loader: () => import('../../templates/poster/components'),
  loading: LoadingComponent,
})

const NotFoundPage = Loadable({
  loader: () => import('../../templates/404/components'),
  loading: LoadingComponent,
})

const AppComponent = props => {

  return (
    <Router>
      <Helmet
        defaultTitle={`Poster API`}
        htmlAttributes={{lang: 'en'}}
        meta={[
          {
            name: 'referrer',
            content: 'same-origin',
          }
        ]}
      />
      <GlobalStyle />
      <Switch>
        <Route
          path={`/encode/:id`}
          component={PosterPage}
        />
        <Route
          component={NotFoundPage}
        />
      </Switch>
    </Router>
  )
}

export default AppComponent
