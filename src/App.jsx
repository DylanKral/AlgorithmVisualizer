import { useState } from 'react'

import VisualizerContainer from '../components/visualizerContainer'
import Nav from '../Nav/Nav'
import { ArrayDataProvider } from '../context/ArrayDataContext'

import './App.css'

function App() {

  return (
    <ArrayDataProvider>
      <Nav/>
      <VisualizerContainer/>
    </ArrayDataProvider>
  )
}

export default App
