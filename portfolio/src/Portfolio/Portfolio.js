import React, { Component } from 'react';

const projectsData = [
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png", category: "Flayers" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg", category: "Business Cards" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg", category: "Websites" },
  { img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png", category: "Flayers" }
];

const ProjectList = ({ projects }) => (
  <div className="project-list">
    {projects.map((project, index) => (
      <div key={index} className="project-item">
        <img src={project.img} alt={`Project ${index}`} />
      </div>
    ))}
  </div>
);

const Toolbar = ({ filters, selected, onSelectFilter }) => (
  <div className="toolbar">
    {filters.map((filter, index) => (
      <button
        key={index}
        onClick={() => onSelectFilter(filter)}
        className={selected === filter ? 'active' : ''}
      >
        {filter}
      </button>
    ))}
  </div>
);

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All'
    };
    this.handleSelectFilter = this.handleSelectFilter.bind(this);
  }

  handleSelectFilter(filter) {
    this.setState({ selectedFilter: filter });
  }

  render() {
    const { selectedFilter } = this.state;
    const filteredProjects = selectedFilter === 'All'
      ? projectsData
      : projectsData.filter(project => project.category === selectedFilter);

    return (
      <div className="portfolio">
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;