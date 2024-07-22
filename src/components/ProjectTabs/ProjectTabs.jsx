import "./ProjectTabs.scss";
import { useEffect } from "react";
import pho from "./../../assets/images/pho.jpg";
import yogainstructCover from "./../../assets/gifs/yogainstruct.gif";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import bandsite from "./../../assets/images/bandsite.png";
import brainflix from "./../../assets/gifs/brainflix.gif";
import instock from "./../../assets/gifs/instock.gif";

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
                <Link to="https://yoga-ai.pages.dev/" target="_blank">
                  <div className="project__img-wrapper">
                    <img
                      className="project-img"
                      src={yogainstructCover}
                      alt=""
                    />
                  </div>
                </Link>
                <div className="project__header">
                  <h3 className="project-name">YogAInstruct</h3>
                  <div className="project-links">
                    <Link
                      to="https://yoga-ai.pages.dev/"
                      target="_blank"
                      className="project-link-wrapper"
                    >
                      <button className="project-link">
                        Site <HiOutlineExternalLink />
                      </button>
                    </Link>
                    <Link
                      to="https://yoga-ai.pages.dev/"
                      target="_blank"
                      className="project-link-wrapper"
                    >
                      <button className="project-link">
                        Code <HiOutlineCodeBracket />
                      </button>
                    </Link>
                  </div>
                </div>
                <ul className="project-tags">
                  <li className="project-tag">React</li>
                  <li className="project-tag">Javascript</li>
                  <li className="project-tag">Sass</li>
                  <li className="project-tag">TensorFlow</li>
                  <li className="project-tag">ml5</li>
                  <li className="project-tag">p5</li>
                </ul>
                <p className="project-date">
                  Leveraging machine learning to provide real-time feedback and
                  pose estimation to improve yoga practice.
                </p>
              </div>
            </li>

            <li className="project" data-category="web-dev">
              <div className="project-details">
                <Link
                  to="https://laura-nguyen-bandsite.pages.dev/"
                  target="_blank"
                >
                  <div className="project__img-wrapper">
                    <img className="project-img" src={bandsite} alt="" />
                  </div>
                </Link>
                <div className="project__header">
                  <h3 className="project-name">Bandsite</h3>
                  <div className="project-links">
                    <Link
                      to="https://laura-nguyen-bandsite.pages.dev/"
                      target="_blank"
                      className="project-link-wrapper"
                    >
                      <button className="project-link">
                        Site <HiOutlineExternalLink />
                      </button>
                    </Link>
                    <Link
                      to="https://github.com/laura-nguyen/laura-nguyen-bandsite"
                      target="_blank"
                      className="project-link-wrapper"
                    >
                      <button className="project-link">
                        Code <HiOutlineCodeBracket />
                      </button>
                    </Link>
                  </div>
                </div>
                <ul className="project-tags">
                  <li className="project-tag">Axios</li>
                  <li className="project-tag">Javascript</li>
                  <li className="project-tag">Sass</li>
                  <li className="project-tag">React</li>
                </ul>
                <p className="project-date">
                  A fully responsive front-end application for the fictional
                  band 'The Bees Knees' with dynamic tour data and the ability
                  to post comments.
                </p>
              </div>
            </li>

            <li className="project" data-category="web-dev">
              <div className="project-details">
                <Link
                  to="https://github.com/laura-nguyen/laura-nguyen-brainflix/"
                  target="_blank"
                >
                  <div className="project__img-wrapper">
                    <img className="project-img" src={brainflix} alt="" />
                  </div>
                </Link>
                <div className="project__header">
                  <h3 className="project-name">Brainflix</h3>
                  <div className="project-links">
                    {/* <Link
                      to="https://laura-nguyen-bandsite.pages.dev/"
                      target="_blank"
                      className="project-link-wrapper"
                    >
                      <button className="project-link">
                        Site <HiOutlineExternalLink />
                      </button>
                    </Link> */}
                    <Link
                      to="https://github.com/laura-nguyen/laura-nguyen-brainflix"
                      target="_blank"
                      className="project-link-wrapper"
                    >
                      <button className="project-link">
                        Code <HiOutlineCodeBracket />
                      </button>
                    </Link>
                  </div>
                </div>
                <ul className="project-tags">
                  <li className="project-tag">React</li>
                  <li className="project-tag">Axios</li>
                  <li className="project-tag">Express</li>
                  <li className="project-tag">Javascript</li>
                  <li className="project-tag">Sass</li>
                </ul>
                <p className="project-date">
                  A mock YouTube single-page application (SPA) for streaming and
                  uploading videos, built as a responsive app prototype using
                  static function components and integrating with a backend API
                  under development.
                </p>
              </div>
            </li>

            <li className="project" data-category="web-dev">
              <div className="project-details">
                <Link
                  to="https://github.com/laura-nguyen/red-eyed-tree-frog-instock-client"
                  target="_blank"
                >
                  <div className="project__img-wrapper">
                    <img className="project-img" src={instock} alt="" />
                  </div>
                </Link>
                <div className="project__header">
                  <h3 className="project-name">InStock</h3>
                  <div className="project-links">
                    {/* <Link
                      to="https://laura-nguyen-bandsite.pages.dev/"
                      target="_blank"
                      className="project-link-wrapper"
                    >
                      <button className="project-link">
                        Site <HiOutlineExternalLink />
                      </button>
                    </Link> */}
                    <Link
                      to="https://github.com/laura-nguyen/red-eyed-tree-frog-instock-client"
                      target="_blank"
                      className="project-link-wrapper"
                    >
                      <button className="project-link">
                        Code <HiOutlineCodeBracket />
                      </button>
                    </Link>
                  </div>
                </div>
                <ul className="project-tags">
                  <li className="project-tag">React</li>
                  <li className="project-tag">Knex.js</li>
                  <li className="project-tag">Express</li>
                  <li className="project-tag">Jira</li>
                  <li className="project-tag">Sass</li>
                </ul>
                <p className="project-date">
                  A mock YouTube single-page application (SPA) for streaming and
                  uploading videos, built as a responsive app prototype using
                  static function components and integrating with a backend API
                  under development.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ProjectTabs;
