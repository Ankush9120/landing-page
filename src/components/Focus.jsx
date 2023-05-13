import Logo4 from "../assets/images/sec3/Logo4";
import Logo5 from "../assets/images/sec3/Logo5";
import Logo6 from "../assets/images/sec3/Logo6";
import Sec3 from "../assets/images/sec3.png";

const Focus = () => {
  return (
    <section className="Focus sec3 commonSec">
      <div className="contentCover">
        <div className="content">
          <header className="pc">Our focus is on YOU</header>
          <div className="miniHeader pc">A platform built with you in mind</div>
          <ul>
            <li>
              <div className="logo">
                <Logo4 />
              </div>
              <div className="text">
                <span>Personalized Offers</span>
                <p>
                  Your preferences and needs are our top priority. We learn from
                  your spending and investment behaviors, understand what&apos;s
                  happening in your neighborhood and make hyper-personalized
                  offer to you.
                </p>
              </div>
            </li>
            <li>
              <Logo5 />
              <div className="text">
                <span>One-stop-shop for every consumer convenience</span>
                <p>
                  There are many platforms today that serve your specific needs:
                  from account aggregation to merchant ratings and reviews, but
                  none of them look at you holistically, and hence provides
                  sub-par service. We look at you in totality, make an effort to
                  understand you, understand your spending patterns, determine
                  your preferences based on repeat spending at a particular
                  merchant, your income range, and thus provide you a single
                  platform to manage all of your needs in an effective, yet
                  personalized manner.
                </p>
              </div>
            </li>
            <li>
              <Logo6 />
              <div className="text">
                <span>No ads, ever. </span>
                <p>
                  We want you to get the most out of the platform. There are No
                  ads to distract you, so you can focus on what&apos;s important. Get
                  in, and get done quickly. [We do have offers, which are tucked
                  away neatly in their own sections on the website]
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="imgBox">
          <img src={Sec3} alt="boy" />
        </div>

        {/* Mobile -->  */}
        <div hidden className="miniHeader mobile">
          A platform built with you in mind
        </div>
        {/* <div className="square"></div> */}
        <header hidden className="mobile">
          Our focus is on YOU
        </header>
      </div>
    </section>
  );
};

export default Focus;
