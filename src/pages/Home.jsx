import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/* Hero */}
      <section className="hero">
        <p className="section-label">IEEE PESU ECC / STUDENT BRANCH</p>

        <h1>
          BUILD<br />
          EXPLORE<br />
          CONNECT
        </h1>

        <p className="hero-text">
          A community of students exploring technology, building real-world
          solutions, and learning together.
        </p>

        <div className="hero-buttons">
          <a href="/projects">EXPLORE PROJECTS →</a>
          <a href="/about">ABOUT US →</a>
        </div>
      </section>


      {/* What we do */}
      <section className="home-section">
        <p className="section-label">01 / WHAT WE DO</p>

        <div className="activity-grid">
          <div className="activity">
            <span>01</span>
            <h2>BUILD</h2>
            <p>
              Work on practical projects that tackle real-world problems.
            </p>
          </div>

          <div className="activity">
            <span>02</span>
            <h2>LEARN</h2>
            <p>
              Workshops, seminars and technical sessions beyond the classroom.
            </p>
          </div>

          <div className="activity">
            <span>03</span>
            <h2>COMPETE</h2>
            <p>
              Hackathons, competitions and challenges that put ideas to work.
            </p>
          </div>

          <div className="activity">
            <span>04</span>
            <h2>CONNECT</h2>
            <p>
              Meet students, professionals and people working across domains.
            </p>
          </div>
        </div>
      </section>


      {/* Featured projects */}
      {/*Uncomment this part when there are actual projects to showcase, also dont firget to change the numbering*/}
      {/* <section className="home-section">
        <p className="section-label">02 / FEATURED PROJECTS</p>

        <div className="project-preview">
          <div>
            <span>PROJECT / 01</span>
            <h2>Project Name</h2>
            <p>
              A short description of the project and what problem it attempts
              to solve.
            </p>
          </div>

          <div className="project-image">
            IMAGE
          </div>
        </div>

        <div className="project-preview">
          <div>
            <span>PROJECT / 02</span>
            <h2>Project Name</h2>
            <p>
              Another short description highlighting the project and its
              purpose.
            </p>
          </div>

          <div className="project-image">
            IMAGE
          </div>
        </div>

        <a className="text-link" href="/projects">
          VIEW ALL PROJECTS →
        </a>
      </section> */}


      {/* Upcoming event */}
      <section className="home-section">
        <p className="section-label">02 / UP NEXT</p>

        <div className="event">
          <div>
            <span>EVENT / 01</span>
            <h2>
                {/* Upcoming Event Name */}
                BREAKTHROUGH
            </h2>
            <p>
                A hackathon where limits are broken.
              {/* A short description of the upcoming event, workshop or
              hackathon. */}
            </p>
          </div>

          <div className="event-date">
            <strong>26</strong>
            <span>SEP 2026</span>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="cta">
        <p className="section-label">03 / GET INVOLVED</p>

        <h2>INTERESTED IN BUILDING WITH US?</h2>

        <a href="/about">LEARN MORE →</a>
      </section>

    </main>
  );
}

export default Home;