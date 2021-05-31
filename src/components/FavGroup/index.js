import React,{useEffect,useState} from 'react'
import Nav from '../Nav'
import NavItem from '../NavItem'
// import FavList from '../FavList'
// import Fav from '../Fav'
import API from "../utils/API"


export default function FavGroup() {
    // const [FavState,setFavState] = useState([]);
    // useEffect(() => {
    //   API.getAllFavs().then(res=>{
    //       setFavState(res.data);
    //   })     
    // }, [])
  
    return (
    <div>
      {/* <FavList>
        {FavState.map((Fav) => (
          <Fav key={Fav._id} Fav={Fav} />
        ))}
      </FavList> */}
    </div>
  )
}