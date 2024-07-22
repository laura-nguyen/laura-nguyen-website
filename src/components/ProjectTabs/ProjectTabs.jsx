import "./ProjectTabs.scss";
import { useEffect } from "react";
import pho from "./../../assets/images/pho.jpg";
import yogainstructCover from "./../../assets/gifs/yogainstruct.gif";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";

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
            <h2>Projects</h2>
            <div className="filter">
              <button className="filter-btn active" data-filter="all">
                All
              </button>
              <button className="filter-btn" data-filter="web-dev">
                Web Development
              </button>
              <button className="filter-btn" data-filter="growth">
                Marketing
              </button>
            </div>
          </div>

          <ul className="project-list">
            <li className="project" data-category="web-dev">
              <div className="project-details">
                <div className="project__img-wrapper">
                  <img className="project-img" src={yogainstructCover} alt="" />
                </div>
                <div className="project__header">
                  <h3 className="project-name">YogAInstruct</h3>
                  <div className="project-links">
                    <button className="project-link">
                      Site <HiOutlineExternalLink />
                    </button>
                    <button className="project-link">
                      Code <HiOutlineCodeBracket />
                    </button>
                  </div>
                </div>
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
            </li>

            <li className="project" data-category="frontend">
              <div className="project-details">
                <div className="project__img-wrapper">
                  <img className="project-img" src={pho} alt="" />
                </div>
                <h3 className="project-name">CSS Day</h3>
                <span className="project-date">June 6th - June 7th</span>
                <span className="project-category">Frontend</span>
              </div>
            </li>

            <li className="project" data-category="frontend">
              <div className="project-details">
                <div className="project__img-wrapper">
                  <img className="project-img" src={pho} alt="" />
                </div>
                <h3 className="project-name">SmashingConf Freiburg</h3>
                <span className="project-date">
                  September 9th - September 11th
                </span>
                <span className="project-category">Frontend</span>
              </div>
            </li>
            <li className="project" data-category="frontend">
              <div className="project-details">
                <div className="project__img-wrapper">
                  <img className="project-img" src={pho} alt="" />
                </div>
                <h3 className="project-name">SmashingConf Freiburg</h3>
                <span className="project-date">
                  September 9th - September 11th
                </span>
                <span className="project-category">Frontend</span>
              </div>
            </li>
            <li className="project" data-category="frontend">
              <div className="project-details">
                <img className="project-img" src={pho} alt="" />
                <h3 className="project-name">SmashingConf Freiburg</h3>
                <span className="project-date">
                  September 9th - September 11th
                </span>
                <span className="project-category">Frontend</span>
              </div>
            </li>
            <li className="project" data-category="frontend">
              <div className="project-details">
                <img className="project-img" src={pho} alt="" />
                <h3 className="project-name">SmashingConf Freiburg</h3>
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
