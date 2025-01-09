import React from 'react'

const Detail = async({params}:{params:{id:string}}) => {
    const id = (await params).id
  return (
    <div>Detail {id}</div>
  )
}

export default Detail