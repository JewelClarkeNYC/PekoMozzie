'use client'

import { useState } from 'react'

function SetGoal() {
  const [weeklyGoal, setWeeklyGoal] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    console.log('submit weekly goal', weeklyGoal)
    const response = await fetch('/api/goal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ weeklyGoal })
    })
    e.target.elements['setGoalInput'].value = '';
    console.log('response status', response.status)
    const result = await response.json()
    console.log('response result', result)
  }
  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-4 text-center text-2xl font-bold'>
        Set Your Weekly Goal
      </h1>
      <form onSubmit={handleSubmit} className='rounded bg-white p-6 shadow-md'>
        <div className='flex space-x-4'>
          <input
            name='setGoalInput'
            type='text'
            value={weeklyGoal}
            onChange={e => setWeeklyGoal(e.target.value)}
            placeholder='Enter number of apps you want to submit this week'
            className='w-full rounded border border-gray-300 p-2'
            required
          />
          <button
            type='submit'
            className='rounded bg-blue-500 p-2 text-white hover:bg-blue-600'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default SetGoal
