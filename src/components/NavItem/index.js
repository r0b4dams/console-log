export default function NavItem({ href, isActive, children }) {

  const handleClick = (href) => {
    const startDate ="2021-05-01";
    const endDate = "2021-06-04"
    switch (href) {
      case "/featured":
        global.filter = "";
        localStorage.setItem('filter', "");
        break;
      case "/popular":
        global.filter = "&ordering=-metacritic";
        localStorage.setItem('filter', "&ordering=-metacritic");
        break;
      case "/recent":
        global.filter = "?dates=2021-05-01,2021-06-04";
        localStorage.setItem('filter', `&dates=${startDate},${endDate}`);
        break;
      case "/rated":
        global.walk = "rated";
        localStorage.setItem('walk', "rated");
        break;
      case "/newest":
        global.walk = "newest";
        localStorage.setItem('walk', "newest");
        break;
      default:
        break;
    }
  }

  return (
    <li>
      <a onClick={() => { handleClick(href) }} href={href} className={`block px-8 pt-2 rounded-md ${isActive ? 'bg-amber-100 text-amber-700' : ''}`}>
        {children}
      </a>
    </li>
  )
}