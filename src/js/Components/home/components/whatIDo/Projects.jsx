import React, { useState } from 'react';
import projectFilters from "./allProjects";

const Projects = () => {
    const [ shownProjects, setShownProjects ] = useState(projectFilters.all.map(key => (
        <div key={key.id}>
            <img src={key.imgURL} alt=""/>
        </div>
    )));

    function handleFilterChange(event, filter) {
        document.getElementsByClassName("filter-active")[0].classList.toggle("filter-active");
        for (let key in projectFilters) {
            if (filter === key) {
                setShownProjects(projectFilters[key].map(key => (
                    <div key={key.id}>
                        <img src={key.imgURL} alt=""/>
                    </div>
                )));
            }
        }
        event.target.className = "filter-active";
    }


    return (
        <>
            <div className="projects-buttons">
                <p className="filter-active" onClick={event => handleFilterChange(event, 'all')}>All Projects</p>
                <p onClick={event => handleFilterChange(event, 'illustrations')}>Illustration</p>
                <p onClick={event => handleFilterChange(event, 'photography')}>Photography</p>
                <p onClick={event => handleFilterChange(event, 'website')}>Website</p>
            </div>
            <div className="all-projects">
                {shownProjects}
            </div>
        </>
    );
};

export default Projects;