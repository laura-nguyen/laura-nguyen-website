import "./HorizontalTabs.scss";
import { useEffect } from "react";

const HorizontalTabs = () => {
  useEffect(() => {
    const filterList = document.querySelector(".horizontal-filter");
    const filterButtons = filterList.querySelectorAll(".horizontal-filter-btn");
    const skills = document.querySelectorAll(".skill");

    let skillIndex = 0;

    skills.forEach((skill) => {
      skill.style.viewTransitionName = `conf-${++skillIndex}`;
    });

    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        let confCategory = e.target.getAttribute("skill-filter");

        if (!document.startViewTransition) {
          updateActiveButton(e.target);
          filterEvents(confCategory);
        }

        document.startViewTransition(() => {
          updateActiveButton(e.target);
          filterEvents(confCategory);
        });
      });
    });

    function updateActiveButton(newButton) {
      filterList.querySelector(".active").classList.remove("active");
      newButton.classList.add("active");
    }

    function filterEvents(filter) {
      skills.forEach((skill) => {
        let skillCategory = skill.getAttribute("skill-category");
        if (filter === "all" || filter === skillCategory) {
          skill.removeAttribute("hidden");
        } else {
          skill.setAttribute("hidden", "");
        }
      });
    }

    filterEvents("web-dev");
  }, []);

  return (
    <div className="content-grid">
      <main className="main-with-aside">
        <div className="flow">
          <div className="horizontal-filter">
            <button
              className="horizontal-filter-btn active"
              skill-filter="web-dev"
            >
              Web development
            </button>
            <button className="horizontal-filter-btn" skill-filter="growth">
              Marketing
            </button>
          </div>

          <ul className="skill-list">
            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h2 className="skill-name">Languages</h2>
                <ul className="skill-details-list">
                  <li>Python</li>
                  <li>Java</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Sass</li>
                  <li>SQL</li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h2 className="skill-name">Frameworks & Libraries</h2>
                <ul className="skill-details-list">
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Knex.js</li>
                  <li>Axios</li>
                  <li>Tensorflow</li>
                </ul>
              </div>
            </li>
            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h2 className="skill-name">Databases</h2>
                <ul className="skill-details-list">
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </li>
            <li className="skill" skill-category="web-dev">
              <h2 className="skill-name">Other Tools</h2>
              <div className="skill-details">
                <ul className="skill-details-list">
                  <li>Git</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Postman</li>
                  <li>Jira</li>
                  <li>Heroku</li>
                  <li>Jest</li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h2 className="skill-name">Web Design & Development</h2>
                <ul className="skill-details-list">
                  <li>
                    Design and develop landing pages using HTML, CSS, and
                    JavaScript to maximize conversions and sign-ups.
                  </li>
                  <li>
                    Analyze the full funnel to optimize the entire website
                    journey for higher conversions.
                  </li>
                  <li>
                    Generate and implement A/B test ideas to continuously
                    improve performance.
                  </li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h2 className="skill-name">Email Marketing & SMS</h2>
                <ul className="skill-details-list">
                  <li>
                    Create and manage effective, personalized email and SMS
                    campaigns to enhance the customer lifecycle journey.
                  </li>
                  <li>
                    Analyze campaign metrics to generate actionable insights and
                    ideas for improvement.
                  </li>

                  <li>
                    Implement advanced segmentation and targeting strategies to
                    ensure messages reach the right audience at the right time.
                  </li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h2 className="skill-name">
                  Marketing Analytics & Integration
                </h2>
                <ul className="skill-details-list">
                  <li>
                    Provide comprehensive funnel analytics and actionable
                    recommendations to inform strategic decisions.
                  </li>
                  <li>
                    Utilize tools like Google Analytics 4, Hotjar, and SEMRush
                    to deliver in-depth insights into marketing performance.
                  </li>
                  <li>
                    Handle pixel and tag installation via Google Tag Manager for
                    accurate tracking and data collection.
                  </li>
                  <li>
                    Seamlessly integrate marketing efforts with e-commerce
                    platforms.
                  </li>
                  <li>
                    Develop dashboards in Tableau, Looker, Sigma, and Mixpanel
                    to visualize data and support data-driven decision-making.
                  </li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h2 className="skill-name">SEO & Paid Ads</h2>
                <ul className="skill-details-list">
                  <li>
                    Conduct thorough keyword research to improve organic search
                    visibility and SEO performance.
                  </li>
                  <li>
                    Manage and optimize daily campaigns for Facebook, Instagram,
                    LinkedIn, and Google Ads to maximize ROI.
                  </li>
                  <li>
                    Create custom audiences and implement retargeting tactics to
                    enhance ad performance and drive conversions.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HorizontalTabs;
