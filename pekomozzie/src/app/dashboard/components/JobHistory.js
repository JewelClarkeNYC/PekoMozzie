'use client'

import { useState, useEffect } from 'react'

export default function JobHistory() {
  const [historyData, setHistoryData] = useState([])
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch('/api/job-history')
        const data = await response.json()
        //console.log('data', data)
        setHistoryData(data)
      } catch (error) {
        console.error('Error fetching job history', error)
      }
    }
    fetchHistory()
  }, [])

  useEffect(() => {
    
      if (search === '') {
        setFilteredData(historyData)
      } else {
        const searchLower = search.toLowerCase()
        const filtered = historyData.filter(item => {
          return (
            item.company.toLowerCase().includes(searchLower) ||
            item.role.toLowerCase().includes(searchLower) ||
            new Date(item.created_at).toLocaleDateString().includes(searchLower)
          )
        })
        setFilteredData(filtered)
      }
    
  },[search,historyData])

  return (
    <div className='mx-auto p-6'>
      <h2 className='mb-6 text-center text-2xl font-bold'>Past Feasts</h2>

      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search app history here'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='w-full rounded border border-gray-500 p-2'
        />
      </div>

      <div id='tableDiv' className='overflow-x-auto rounded-t-2xl'>
        <table className='min-w-full border border-gray-500 text-left'>
          <thead className='bg-blue-500'>
            <tr>
              <th className='px-6 py-3 text-white'>Date</th>
              <th className='px-6 py-3 text-white'>Company</th>
              <th className='px-6 py-3 text-white'>Role</th>
            </tr>
          </thead>
          <tbody id='tableBody' className='overflow-y-auto'>
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <tr
                  key={item.created_at}
                  className='border-b border-gray-500 hover:bg-gray-50'
                >
                  <td className='px-6 py-4'>
                    {new Date(item.created_at).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4'>{item.company}</td>
                  <td className='px-6 py-4'>{item.role}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='2' className='px-6 py-4 text-center text-gray-500'>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
