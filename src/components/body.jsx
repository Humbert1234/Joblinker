import Image from "../assets/work.png";
import Image1 from "../assets/google.png";
import Image2 from "../assets/slack.png";
import Image3 from "../assets/toko.png";
import Image4 from "../assets/amazon.png";
import Image5 from "../assets/avast.png";

function Body() {
  return (
    <>
      <section className="perfact">
        <div className="div">
          <h1>Best Way To Find A Perfect Job</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nostrum fugit veritatis.
          </p>
          <div>
            <div>
              <button className="btn2">Remote</button>
              <button className="btn3">Office</button>
            </div>
            <form action="">
              <input
                type="text"
                name=""
                placeholder="  What are you looking for"
                id="job"
              />
              <input type="text" placeholder="  Location" />
              <button type="submit" className="btn1">
                Search
              </button>
            </form>
          </div>
        </div>
        <img src={Image} alt="" className="work" />
      </section>
      <section className="team">
        <div>
          <h2 className="trust">
            20M+ users trust Job<span>Seeker</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            consequatur iste, tempora eius dicta porro soluta moles praesentium.
          </p>
          <div className="company">
            <img src={Image1} alt="" className="com_pho" />
            <img src={Image2} alt="" className="com_pho" />
            <img src={Image3} alt="" className="com_pho" />
            <img src={Image4} alt="" className="com_pho" />
            <img src={Image5} alt="" className="com_pho1" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Body;
