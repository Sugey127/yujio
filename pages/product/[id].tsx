import React from 'react'
import { useRouter } from 'next/router'

const ProductItem=()=> {
//   const router=userRouter()
    const {query:{id},}=useRouter()
  return (
    <div>
      {id}
    </div>
  )
}

export default ProductItem