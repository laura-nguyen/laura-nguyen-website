import "./HorizontalTabs.scss";
import { useEffect } from "react";

const HorizontalTabs = () => {
  useEffect(() => {
    const filterList = document.querySelector(".horizontal-filter");
    const filterButtons = filterList.querySelectorAll(".horizontal-filter-btn");
    const conferences = document.querySelectorAll(".conference");

    let conferenceIndex = 0;

    conferences.forEach((conference) => {
      conference.style.viewTransitionName = `conf-${++conferenceIndex}`;
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
      conferences.forEach((conference) => {
        let eventCategory = conference.getAttribute("skill-category");
        if (filter === "all" || filter === eventCategory) {
          conference.removeAttribute("hidden");
        } else {
          conference.setAttribute("hidden", "");
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
              Engineering
            </button>
            <button className="horizontal-filter-btn" skill-filter="growth">
              Marketing
            </button>
          </div>

          <ul className="conference-list">
            <li className="conference" skill-category="growth">
              <div className="conference-details">
                <span className="conference-date">March 19th - March 23rd</span>
                <span className="conference-category">growth</span>
              </div>
              <h2 className="conference-name">SQLBits</h2>
            </li>

            <li className="conference" skill-category="web-dev">
              <div className="conference-details">
                <span className="conference-date">June 6th - June 7th</span>
                <span className="conference-category">web-dev</span>
              </div>
              <h2 className="conference-name">CSS Day</h2>
            </li>

            <li className="conference" skill-category="web-dev">
              <div className="conference-details">
                <span className="conference-date">
                  September 9th - September 11th
                </span>
                <span className="conference-category">web-dev</span>
              </div>
              <h2 className="conference-name">SmashingConf Freiburg</h2>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HorizontalTabs;
