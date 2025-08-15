import React from 'react'
import { useLocation, useParams } from 'react-router'
import BreadCrumb from './BreadCrum'

function Details() {
  const params = useParams()
  const location = useLocation()

  console.log(params)
  const { id } = params
  console.log(id)
  const brreadCrub = {
    title: "DetaProduct Details",
    link: [{ title: "Home", path: "/" },
    { title: "Product", path: "/product" },],
    active: id

  }
  return (

    <div>
      <BreadCrumb data={brreadCrub} />
    </div>
  )
}

export default Details