import { motion, scale } from 'framer-motion';

const Animate1 = () => {
  return (
    <div 
    className='flex justify-center py-10'>
    
      <motion.div 
        animate={{ scale: 1.5}}
        transition={{ duration: 1}}
      className='w-25 h-25 rounded-lg bg-blue-600 text-white flex justify-center items-center'>Animate1</motion.div>
    </div>
  )
}

export default Animate1