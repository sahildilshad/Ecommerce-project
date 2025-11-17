import React from 'react'
import Slidebar from './Slidebar'

const AdminQuery = () => {
  return (
    <div className='flex mt-16'>
        <Slidebar />
     <div className='flex-1 p-10 bg-gray-50 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-700'> Query Management</h1>
        <div className=''>
            <table className='w-full text-sm text-left text-gray-700 dark:text-gray-400'>

                <thead className='text-xs text-gray-700 uppercase bg-gray-300 '>
                    <tr>
                        <th className='px-6 py-3 '>S.No</th>
                        <th className='px-6 py-3 '>User Name</th>
                        <th className='px-6 py-3 '>Query</th>
                        <th className='px-6 py-3 '>Email-Id</th>
                        <th className='px-6 py-3 '>Status</th>
                        <th className='px-6 py-3 '>Action-1</th>
                        <th className='px-6 py-3 '>Action-2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className='bg-gray-100 border-b border-gray-400'>
                        <td className='px-6 py-3 '>1</td>
                        <td className='px-6 py-3 '>Sahil</td>
                        <td className='px-6 py-3 '>Mern</td>
                        <td className='px-6 py-3 '>Sahil@example.com</td>
                        <td className='px-6 py-3 '>unread</td>
                        <td className='px-6 py-3 '><button className='text-xs bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded'>Reply</button></td>
                        <td className='px-6 py-3 '><button className='text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded'>Delete</button></td>
                        
                    </tr>
                </tbody>
            </table>

        </div>
       
     </div>
    </div>
  )
}

export default AdminQuery
