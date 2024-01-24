import React from 'react'

import Header from './components/Header'
import Contents from './components/Posts'
import Content from './components/Post'

export default function App() {

 return (

    <div className="App">
      <Header />
      <Body>
        <Posts></Posts>
      </Body>
    </div>
 )
}

