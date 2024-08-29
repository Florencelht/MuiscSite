import Navbar from "./Navbar"
import Songitem from './Songitem'
import { PlayerContext } from '../context/PlayerContext'
import { useContext, useState,useEffect } from 'react';

const Playlist = () => {
    const { songsData, setTrack, setPlayStatus } = useContext(PlayerContext);
    const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteSongs');
    if (storedFavorites) {
      setFavoriteSongs(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (song) => {
    let updatedFavorites;
    if (favoriteSongs.some(favSong => favSong._id === song._id)) {
      updatedFavorites = favoriteSongs.filter(favSong => favSong._id !== song._id);
    } else {
      updatedFavorites = [...favoriteSongs, song];
    }
    
    setFavoriteSongs(updatedFavorites);
    localStorage.setItem('favoriteSongs', JSON.stringify(updatedFavorites));
  };

  const playSong = (song) => {
    setTrack(song);
    setPlayStatus(true);
  };

  return (
    <>
      <Navbar />
      <div className='mb-4 mt-5'>
        <div className='flex overflow-auto'>
          {songsData.map((item, index) => (
            <div key={index} className="relative">
              <Songitem
                name={item.name}
                desc={item.desc}
                id={item._id}
                image={item.image}
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  className={`text-white ${favoriteSongs.includes(item) ? 'text-red-500' : 'text-gray-500'}`}
                  onClick={() => toggleFavorite(item)}>
                  {favoriteSongs.some(favSong => favSong._id === item._id) ? '❤️' : '🤍'}
                </button>
                <button className="text-white" onClick={() => playSong(item)}></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="my-5 font-bold text-2xl">Favorite Songs</h2>
        <div className="flex overflow-auto">
          {favoriteSongs.map((song, index) => (
            <Songitem
              key={index}
              name={song.name}
              desc={song.desc}
              id={song._id}
              image={song.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Playlist
