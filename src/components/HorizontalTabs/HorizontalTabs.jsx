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
            <li className="skill" skill-category="growth">
              <div className="skill-details">
                <h2 className="skill-name">SQLBits</h2>
                <span className="skill-details-list">
                  March 19th - March 23rd
                </span>
              </div>
            </li>

            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h2 className="skill-name">Languages</h2>
                <span className="skill-details-list">June 6th - June 7th</span>
              </div>
            </li>

            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h2 className="skill-name">Frameworks</h2>
                <ul className="skill-details-list">
                  <li>React</li>
                </ul>
              </div>
            </li>
            <li className="skill" skill-category="web-dev">
              <div className="skill-details">
                <h2 className="skill-name">Databases</h2>
                <span className="skill-details-list">
                  September 9th - September 11th
                </span>
              </div>
            </li>
            <li className="skill" skill-category="web-dev">
              <h2 className="skill-name">Other Tools</h2>
              <div className="skill-details">
                <span className="skill-details-list">
                  September 9th - September 11th
                </span>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HorizontalTabs;
