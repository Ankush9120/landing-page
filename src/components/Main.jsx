import Graph from "../assets/Graph.png";
import LightGraph from "../assets/LightGraph.png";
const Main = () => {
  return (
    <section className="Main sec1">
      <ul>
        <li className="p1">
          <p>
            <span>Reimagine</span> how you
          </p>
          <p>make money</p>
          <p>decisions</p>
        </li>
        <li className="graph">
          <img src={Graph} alt="graph" />
          <img hidden src={LightGraph} alt="graph" />
        </li>

        <li className="p2">
          <p>
            A platform that brings like-minded people together, to learn from
            one another, and enhance their financial fulfillment
          </p>
        </li>
        <li className="buttons">
          <button className="btn1">Sign Up</button>
          <button className="btn2">Login</button>
        </li>
      </ul>

      <div className="c circle"></div>
      <div className="c circle2"></div>
      <div className="c circle3"></div>
      <div className="c circle4"></div>
    </section>
  );
};

export default Main;
