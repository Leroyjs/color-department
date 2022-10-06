import React from 'react'
import { Wolf } from '../components'

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#101010',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        height: '100vh',
      }}
    >
      <Wolf
        style={{
          width: '25%',
        }}
      />
    </div>
  )
}

export default Home
