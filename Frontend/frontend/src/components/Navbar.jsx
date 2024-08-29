
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=''/>
            <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=''/>
        </div>
        <div className='flex items-center gap-4'>
          <motion.p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer' whileHover={{ scale: 1.2 }}>Explor Premium</motion.p>
          <motion.p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer' whileHover={{ scale: 1.2 }}>Install App</motion.p>
          <motion.p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center' whileHover={{ scale: 1.2 }}>F</motion.p>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <motion.p onClick={()=>navigate('/')} className={`px-4 py-1 rounded-2xl cursor-pointer ${
          location.pathname === '/' ? 'bg-white text-black' : 'bg-black text-white'
        }`} whileTap={{ scale: 0.8 }}>All</motion.p>
        <motion.p onClick={()=>navigate('/playlist')} className={`px-4 py-1 rounded-2xl cursor-pointer ${
          location.pathname === '/playlist' ? 'bg-white text-black' : 'bg-black text-white'
        }`} whileTap={{ scale: 0.8 }}>Playlist</motion.p>
        <motion.p onClick={()=>navigate('/notfound')} className={`px-4 py-1 rounded-2xl cursor-pointer ${
          location.pathname === '/notfound' ? 'bg-white text-black' : 'bg-black text-white'
        }`} whileTap={{ scale: 0.8 }}>Podcasts</motion.p>
      </div>
    </>
  )
}

export default Navbar
