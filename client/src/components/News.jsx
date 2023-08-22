import React from 'react'
import { Outlet } from 'react-router-dom'

const News = () => {
  return (
    <div>News
    <Outlet/>
    </div>
  )
}

export default News