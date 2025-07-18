import { useState } from 'react'
import './App.css'
import Loading_Animation1 from './components/Loading_Animation1'
import Loading_Animation2 from './components/Loading_Animation2'

function App() {

  return (
    <>
    <main className='select-none'>
      <Loading_Animation1 />
      <Loading_Animation2 />
    </main>
      
    </>
  )
}

export default App
