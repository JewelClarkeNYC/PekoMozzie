'use client'

import { useState,useEffect } from 'react'

function SetGoal() {
  const [weeklyGoal, setWeeklyGoal] = useState('')
  const [currentQuota, setCurrentQuota] = useState()
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
    setCurrentQuota(result.data[0].weekly_quota)
    console.log('response result', result)
  }

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/hunger-data');
        const data = await response.json();

        setCurrentQuota(data.weekly_quota)
      } catch (error) {
        console.error('Error fetching job history', error);
      }
    }
    fetchHistory()

  }, [currentQuota])

  return (
    <div className='container mx-auto py-24 px-96'>
      <h1 className='mb-4 text-center text-3xl font-bold'>
        Set Your Weekly Goal
      </h1>
      <form onSubmit={handleSubmit} className='rounded border border-gray-300 bg-red-50 p-6 shadow-md'>
        <div className='flex space-x-4'>
          <input
            name='setGoalInput'
            type='text'
            value={weeklyGoal}
            onChange={e => setWeeklyGoal(e.target.value)}
            placeholder='Enter total number of apps to submit this week'
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
      <br>
        </br>
      <h3 className='text-center italic text-lg font-semibold'>
        Current Goal: <br>
        </br> {currentQuota} apps per week
      </h3>
    </div>
  )
}

export default SetGoal
