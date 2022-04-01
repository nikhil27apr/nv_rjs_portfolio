import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I love exploring new tech stacks, and using them to solve real world problems out there. 
        </p>
        <p className="a-desc">
        I don't like to define myself by the work I've done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
        </p>
        <div className="a-award">
        <a href="https://www.codingninjas.in/verify/443598a77940da6f" target="_blank">
          <img src={Award} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Coding Ninjas Certificate.</h4>
            <p className="a-award-desc">
            Coding Ninjas platform helped me a lot to get better at coding and logical thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
