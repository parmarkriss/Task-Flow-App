// App.jsx
import React from 'react'
import Animate from './components/Animate'
import Notification from './components/Notification'
import Header from './components/Header'
import StatsGrid from './components/StatsGrid'
import Input from './components/Input'
import TodoList from './components/TodoList'
import ClearButton from './components/ClearButton'

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 p-3 sm:p-3 relative overflow-hidden">
        <Animate />

        <Notification />

        <div className="max-w-3xl mx-auto relative z-10">
          <Header />

          <StatsGrid />

          <Input />

          <TodoList />

          <ClearButton />
        </div>
      </div>
    </>
  )
}

export default App;