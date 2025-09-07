import React from 'react'
import { motion } from 'framer-motion'
import { boxVariant } from './motion'

const Animate2 = () => {
  return (
    <div
      className='flex justify-center bg-indigo-300 py-10'>

      <motion.div
      variants={boxVariant}
      initial="hidden"
      animate="show"
      transition={{ duration: 1 }}
      className='w-25 h-25 rounded-lg bg-pink-700 text-white flex justify-center items-center'>Animate2</motion.div>
    </div>

  )
}

export default Animate2
