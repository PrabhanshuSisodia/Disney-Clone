import { useEffect } from "react"
import GlobalApi from "../services/GlobalApi"

function Slider() {
    useEffect(() => {
        getTrendingMovies();
    },[])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp);
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default Slider
