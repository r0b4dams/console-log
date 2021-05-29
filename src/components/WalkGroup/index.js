import React,{useEffect,useState} from 'react'
import Nav from '../Nav'
import NavItem from '../NavItem'
import WalkList from '../WalkList'
import Walk from '../Walk'
import API from "../utils/API"


export default function WalkGroup() {
    const [walkthroughState,setWalkthroughState] = useState([]);
    useEffect(() => {
      API.getAllWalkthroughs().then(res=>{
          setWalkthroughState(res.data);
      })     
    }, [])
  
    return (
    <div>
      <div className="text-right">
      <Nav>
        <NavItem href="/rated" isActive>Highest Rated</NavItem>
        <NavItem href="/recent">Recent</NavItem>
      </Nav>
      </div>

      <WalkList>
        {walkthroughState.map((walkthrough) => (
          <Walk key={walkthrough._id} walkthrough={walkthrough} />
        ))}
      </WalkList>
    </div>
  )
}