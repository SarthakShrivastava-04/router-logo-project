import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function Github() {
  const data= useLoaderData()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // }, [])

  return (
  <div className='flex flex-col items-center ' >
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl w-full'>Github Followers: {data.followers}</div>
    <img src={data.avatar_url} alt='Github profile pic' width={300}></img>
  </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const res = await fetch('https://api.github.com/users/hiteshchoudhary')
  return res.json()
}