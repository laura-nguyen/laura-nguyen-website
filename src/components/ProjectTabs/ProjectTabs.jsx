import "./ProjectTabs.scss";
import { useEffect } from "react";
import pho from "./../../assets/images/pho.jpg";

const ProjectTabs = () => {
  useEffect(() => {
    const filterList = document.querySelector(".filter");
    const filterButtons = filterList.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    let projectIndex = 0;

    projects.forEach((project) => {
      project.style.viewTransitionName = `proj-${++projectIndex}`;
    });

    filterButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        let confCategory = e.target.getAttribute("data-filter");

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
      projects.forEach((project) => {
        let eventCategory = project.getAttribute("data-category");
        if (filter === "all" || filter === eventCategory) {
          project.removeAttribute("hidden");
        } else {
          project.setAttribute("hidden", "");
        }
      });
    }
  }, []);

  return (
    <div className="content-grid">
      <main className="content">
        <div className="flow">
          <div className="filter-container">
            <h1>Projects</h1>
            <div className="filter">
              <button className="filter-btn active" data-filter="all">
                All
              </button>
              <button className="filter-btn" data-filter="frontend">
                Web Development
              </button>
              <button className="filter-btn" data-filter="backend">
                Marketing
              </button>
            </div>
          </div>

          <ul className="project-list">
            <li className="project" data-category="backend">
              <div className="project-details">
                <img className="project-img" src={pho} alt="" />
                <h2 className="project-name">SQLBits</h2>
                <ul className="project-tags">
                  <li className="project-tag">HTML</li>
                  <li className="project-tag">CSS</li>
                  <li className="project-tag">Knex</li>
                  <li className="project-tag">HTML</li>
                </ul>
                <p className="project-date">
                  Lorm Ipsum for Brainstation Capstone
                </p>
              </div>
              <div className="project-links">
                <button>Live Demo</button>
                <button>View Repo</button>
              </div>
            </li>

            <li className="project" data-category="frontend">
              <div className="project-details">
                <img className="project-img" src={pho} alt="" />
                <h2 className="project-name">CSS Day</h2>
                <span className="project-date">June 6th - June 7th</span>
                <span className="project-category">Frontend</span>
              </div>
            </li>

            <li className="project" data-category="frontend">
              <div className="project-details">
                <img className="project-img" src={pho} alt="" />
                <h2 className="project-name">SmashingConf Freiburg</h2>
                <span className="project-date">
                  September 9th - September 11th
                </span>
                <span className="project-category">Frontend</span>
              </div>
            </li>
            <li className="project" data-category="frontend">
              <div className="project-details">
                <img className="project-img" src={pho} alt="" />
                <h2 className="project-name">SmashingConf Freiburg</h2>
                <span className="project-date">
                  September 9th - September 11th
                </span>
                <span className="project-category">Frontend</span>
              </div>
            </li>
            <li className="project" data-category="frontend">
              <div className="project-details">
                <img className="project-img" src={pho} alt="" />
                <h2 className="project-name">SmashingConf Freiburg</h2>
                <span className="project-date">
                  September 9th - September 11th
                </span>
                <span className="project-category">Frontend</span>
              </div>
            </li>
            <li className="project" data-category="frontend">
              <div className="project-details">
                <img className="project-img" src={pho} alt="" />
                <h2 className="project-name">SmashingConf Freiburg</h2>
                <span className="project-date">
                  September 9th - September 11th
                </span>
                <span className="project-category">Frontend</span>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ProjectTabs;
