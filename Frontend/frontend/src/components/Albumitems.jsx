import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

const Albumitems = ({image,name,desc,id}) => {
  const navigate=useNavigate()
  return (
    <motion.div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] ' whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}>
        <img className='rounded' src={image} alt=''/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </motion.div>
  )
}

export default Albumitems
