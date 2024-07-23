import "./HorizontalTabs.scss";
import { useEffect } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiSqlite,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiAxios,
  SiTensorflow,
  SiMysql,
  SiMongodb,
  SiGit,
  SiVisualstudiocode,
  SiFigma,
  SiPostman,
  SiJira,
  SiHeroku,
  SiKnexdotjs,
  SiGoogleanalytics,
  SiSalesforce,
  SiGoogleads,
} from "react-icons/si";

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

    filterEvents("all");
  }, []);

  return (
    <div className="content-grid">
      <main className="main-with-aside">
        <div className="flow">
          <div className="filter-container">
            <h2>Skills</h2>
            <div className="horizontal-filter">
              {/* Filter by: */}
              <div className="button-container">
                <button
                  className="horizontal-filter-btn active"
                  skill-filter="all"
                >
                  All
                </button>
                <button
                  className="horizontal-filter-btn"
                  skill-filter="web-dev"
                >
                  Web Development
                </button>
                <button className="horizontal-filter-btn" skill-filter="growth">
                  Marketing
                </button>
              </div>
            </div>
          </div>

          <ul className="skill-list">
            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h3 className="skill-name">Languages</h3>
                <ul className="skill-details-list">
                  <li className="skill-detail-list__tag">
                    <SiPython /> Python
                  </li>
                  <li className="skill-detail-list__tag">
                    <FaJava />
                    Java
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiHtml5 /> HTML
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiCss3 /> CSS
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiJavascript /> JavaScript
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiSass /> Sass
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiSqlite /> SQL
                  </li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h3 className="skill-name">Frameworks & Libraries</h3>
                <ul className="skill-details-list">
                  <li className="skill-detail-list__tag">
                    <SiReact /> React.js
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiNodedotjs /> Node.js
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiExpress /> Express
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiKnexdotjs /> Knex.js
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiAxios /> Axios
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiTensorflow /> TensorFlow
                  </li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h3 className="skill-name">Databases</h3>
                <ul className="skill-details-list">
                  <li className="skill-detail-list__tag">
                    <SiMysql /> MySQL
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiMongodb /> MongoDB
                  </li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="web-dev">
              <h3 className="skill-name">Other Tools</h3>
              <div className="skill-details">
                <ul className="skill-details-list">
                  <li className="skill-detail-list__tag">
                    <SiGit /> Git
                  </li>

                  <li className="skill-detail-list__tag">
                    <SiFigma /> Figma
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiPostman /> Postman
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiJira /> Jira
                  </li>
                  <li className="skill-detail-list__tag">
                    <SiHeroku /> Heroku
                  </li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h3 className="skill-name">Websie Optimization</h3>
                <p>
                  Expert in strategizing and implementing web design best
                  practices. Adept at full funnel optimization and conducting
                  A/B tests to enhance user experience and performance.
                </p>
                <ul className="skill-details-list">
                  <li className="skill-detail-list__tag">Google Analytics</li>

                  <li className="skill-detail-list__tag">Figma</li>
                  <li className="skill-detail-list__tag">Hotjar</li>
                  <li className="skill-detail-list__tag">VWO</li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h3 className="skill-name">Email Marketing & CRM</h3>
                <p>
                  Proven track record in managing and executing personalized
                  email and SMS campaigns. Skilled in campaign analytics and
                  advanced segmentation to boost engagement and conversion
                  rates.
                </p>
                <ul className="skill-details-list">
                  <li className="skill-detail-list__tag">Salesforce</li>
                  <li className="skill-detail-list__tag">Klaviyo</li>
                  <li className="skill-detail-list__tag">Customer.io</li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h3 className="skill-name">Marketing Analytics</h3>
                <p>
                  Proficient in providing comprehensive funnel analytics for
                  marketing and drawing insights and recommendations.
                  Experienced in seamless integration with e-commerce platforms
                  and creating insightful dashboards.
                </p>
                <ul className="skill-details-list">
                  <li className="skill-detail-list__tag">Google Analytics</li>
                  <li className="skill-detail-list__tag">Tableau</li>

                  <li className="skill-detail-list__tag">Looker</li>
                  <li className="skill-detail-list__tag">Google Tag Manager</li>
                  <li className="skill-detail-list__tag">Looker Studio</li>
                  <li className="skill-detail-list__tag">Mixpanel</li>
                </ul>
              </div>
            </li>

            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h3 className="skill-name">SEO & Paid Ads</h3>
                <p>
                  Specialist in conducting thorough keyword research and
                  optimizing campaigns for Facebook and Google Ads. Expertise in
                  creating custom audiences and implementing retargeting tactics
                  to maximize ROI and ad performance.
                </p>
                <ul className="skill-details-list">
                  <li className="skill-detail-list__tag">Google Ads</li>
                  <li className="skill-detail-list__tag">Facebook Ads</li>
                  <li className="skill-detail-list__tag">SEMRush</li>
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
