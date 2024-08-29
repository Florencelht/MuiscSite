import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";
import { useEffect, useState } from "react";

const ListAlbum = () => {
  const [data, setData] = useState([]);

  const fetchAlbums = async ()=>{
    try {
      const response = await axios.get(`${url}/api/album/list`)
      
      if(response.data.success){
        setData(response.data.albums)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const removeAlbums= async(id)=>{
    try {
      const response = await axios.post(`${url}/api/album/remove`,{id});
      console.log(response.data);
      if(response.data.satisfies === 'success'){
        toast.success(response.data.messsage);
        await fetchAlbums();
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchAlbums();
  },[]);

  return (
    <div>
      <p>All Albums list</p>
      <br />
      <div>
        <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        
        {data.map((item,index)=>{
            return (
              <div key={index} className="grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5">
                  <img className="w-12" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.desc}</p>
                  <input type="color" defaultValue={item.bgColour}/>
                  <p className="cursor-pointer" onClick={()=>removeAlbums(item._id)}>X</p>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default ListAlbum
