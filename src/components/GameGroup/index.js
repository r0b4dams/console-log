import Nav from '../Nav'
import NavItem from '../NavItem'
import GameList from '../GameList'
import Game from '../Game'

export default function GameGroup({ games }) {
    return (
    <div>
      <Nav>
        <NavItem href="/featured" isActive>Featured</NavItem>
        <NavItem href="/popular">Popular</NavItem>
        <NavItem href="/recent">Recent</NavItem>
      </Nav>
      <GameList>
        {games && games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
        {!games && <div>Sorry, no matches found</div>}
      </GameList>
    </div>
  )
}