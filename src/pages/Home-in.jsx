import Image from "../assets/logo.jpeg";

function HomeIn() {
  const nav = ["Home", "Jobs", "Resume", "Company", "Profile"];

  return (
    <>
      <section className="header">
        <div className="head">
          <div>
            <p>
              <a href="#">
                <i class="fa-solid fa-envelope"></i> info@jobnevus.com
              </a>
            </p>
            <p>
              <a href="#">
                <i class="fa-solid fa-phone"></i> +237676026603
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">Help Center</a>
            </p>
            <p>
              <a href="#">My account</a>
            </p>
            <p>
              <i class="fa-solid fa-chalkboard-user"></i>
            </p>
          </div>
        </div>
        <header className="Home1">
          <p>
            <img src={Image} alt="" className="logo" />
            <h2>
              Job<span>Seeker</span>
            </h2>
          </p>
          <nav>
            <ul>
              {nav.map((item) => (
                <li key={item}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
            <div className="Sign">
              <button className="but">Log Out</button>
            </div>
          </nav>
        </header>
        <div className="Job">
          <div className="JOB">
            <h1>JOBSEEKER</h1>
            <p>Search millions of jobs for free</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              eum?
            </p>
            <form action="">
              <input
                type="text"
                name=""
                placeholder="  What are you looking for"
                id="job"
              />
              <input type="text" placeholder="  Location" />
              <button type="submit" className="btn1">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="body">
        <div></div>
        <div></div>
      </section>
    </>
  );
}
export default HomeIn;
