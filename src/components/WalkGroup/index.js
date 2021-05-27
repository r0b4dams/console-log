import Nav from '../Nav'
import NavItem from '../NavItem'
import WalkList from '../WalkList'
import Walk from '../Walk'

export default function WalkGroup({ walkthroughs }) {
    return (
    <div>
      <div className="text-right">
      <Nav>
        <NavItem href="/rated" isActive>Highest Rated</NavItem>
        <NavItem href="/recent">Recent</NavItem>
      </Nav>
      </div>

      <WalkList>
        {walkthroughs.map((walkthrough) => (
          <Walk key={walkthrough.id} walkthrough={walkthrough} />
        ))}
      </WalkList>
    </div>
  )
}