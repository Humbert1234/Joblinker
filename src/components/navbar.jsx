import { Link } from "react-router-dom";
function NavBar() {
  const nav = ["Home", "About", "Our Services", "Contact Us"];

  return (
    <>
      <header className="Home">
        <h2>JobNexus</h2>
        <nav>
          <ul>
            {nav.map((item) => (
              <li key={item}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="Sign">
          <Link to="/login">
            <button className="but">Login</button>
          </Link>
          <Link to="/signup">
            <button className="but1">Sign Up</button>
          </Link>
        </div>
      </header>
    </>
  );
}
export default NavBar;
