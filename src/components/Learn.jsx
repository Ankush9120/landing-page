import Logo1 from "../assets/images/sec2/Logo1";
import Logo2 from "../assets/images/sec2/Logo2";
import Logo3 from "../assets/images/sec2/Logo3";
import Sec2 from "../assets/images/sec2.png";
const Learn = () => {
  return (
    <section className="Learn sec2 commonSec">
      <div className="contentCover">
        <header hidden className="mobile">
          Learn how others are managing their money
        </header>

        <div className="imgBox">
          <img src={Sec2} alt="boy" />
        </div>
        <div className="content">
          <header className="pc">
            Learn how others are managing their money
          </header>
          <ul>
            <li>
              <div className="logo">
                <Logo1 />
              </div>
              <div className="text">
                <span>Engage with your peers</span>
                <p>
                  The only platform that lets you discuss your burning concerns,
                  and unanswered questions in a safe space of like- minded
                  peers. You get to decide the level of details you want to
                  share with your peers, and we ensure the data is always
                  authentic. The intent is to build a Kamunity that supports
                  your growth, and gets you inspired by others.
                </p>
              </div>
            </li>
            <li>
              <Logo2 />
              <div className="text">
                <span>Ignite your curiosity</span>
                <p>
                  We take down the age old barrier of not being able to discuss
                  your finances with others. Learn newer ways to save and invest
                  money, not just based on recommendation from a platform, but
                  based on how real people in your own Kamunity are doing it.
                </p>
              </div>
            </li>
            <li>
              <Logo3 />
              <div className="text">
                <span>Real users, Real data</span>
                <p>
                  The only platform that lets you discuss your burning concerns,
                  and unanswered questions in a safe space of like- minded
                  peers. You get to decide the level of details you want to
                  share with your peers, and we ensure the data is always
                  authentic. The intent is to build a Kamunity that supports
                  your growth, and gets you inspired by others.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* for mobile -->  */}

      <div className="c"></div>
    </section>
  );
};

export default Learn;
