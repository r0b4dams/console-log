import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import NavItem from '../NavItem'
import WalkList from '../WalkList'
import Walk from '../Walk'
import API from "../utils/API"


export default function WalkGroup() {
  const sortBy = global.walk;
  const [walkthroughState, setWalkthroughState] = useState([]);
  useEffect(() => {
    API.getAllWalkthroughs().then(res => {
      setWalkthroughState(res.data);
    })
  }, [])

  function getAverage(arrNum) {
    return (arrNum.reduce((a, b) => a + b, 0) / arrNum.length) || 0
  }
  return (
    <div>
      <div className="text-right">
        <Nav>
          <NavItem href="/rated" isActive>Highest Rated</NavItem>
          <NavItem href="/newest">Newest</NavItem>
        </Nav>
      </div>

      <WalkList>
        {sortBy === "rated" &&
          <div>
            {walkthroughState.sort((a, b) => getAverage(a.ratings) < getAverage(b.ratings) ? 1 : -1).map((walkthrough) => (
              <Walk key={walkthrough._id} walkthrough={walkthrough} />
            ))}
          </div>}
        {sortBy === "newest" &&
          <div>
            {walkthroughState.sort((a, b) => a.updated < b.updated ? 1 : -1).map((walkthrough) => (
              <Walk key={walkthrough._id} walkthrough={walkthrough} />
            ))}
          </div>}
        {sortBy === "" &&
          <div>
            {walkthroughState.map((walkthrough) => (
              <Walk key={walkthrough._id} walkthrough={walkthrough} />
            ))}
          </div>}
      </WalkList>
    </div>
  )
}