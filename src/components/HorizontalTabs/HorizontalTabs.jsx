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

    filterEvents("web-dev");
  }, []);

  return (
    <div className="content-grid">
      <main className="main-with-aside">
        <div className="flow">
          <div className="filter-container">
            <h2>Skills</h2>
            <div className="horizontal-filter">
              Filter by:
              <div className="button-container">
                <button
                  className="horizontal-filter-btn active"
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
                    <SiVisualstudiocode /> VS Code
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
                <h3 className="skill-name">Web Design & Development</h3>
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
                <h3 className="skill-name">Email Marketing & SMS</h3>
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
                <h3 className="skill-name">
                  Marketing Analytics & Integration
                </h3>
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
                <h3 className="skill-name">SEO & Paid Ads</h3>
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
