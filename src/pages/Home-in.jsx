import Image from "../assets/logo.jpeg";
import React, { useState, useEffect } from "react";
import axios from "axios";
function HomeIn() {
  const nav = ["Jobs", "Resume", "Company", "Profile"];
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState(""); // State for job type
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch jobs
  const fetchJobs = async (searchQuery, searchLocation, searchJobType) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/us/search/1`,
        {
          params: {
            app_id: "75224839", // Replace with your Adzuna app ID
            app_key: "f3248e47d69caa4007f4f0756d9696dc", // Your API key
            results_per_page: 8, // Number of results per page
            what: searchQuery, // Job title or keyword
            where: searchLocation, // Job location
            full_time: searchJobType === "fulltime" ? 1 : undefined, // Full-time filter
            part_time: searchJobType === "parttime" ? 1 : undefined, // Part-time filter
          },
        }
      );
      setJobs(response.data.results || []);
    } catch (err) {
      console.error("API request failed:", err.response || err.message);
      setError("Failed to fetch jobs.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch default jobs on component mount
  useEffect(() => {
    // Fetch jobs with some default criteria
    fetchJobs("developer", "New York", ""); // Example default criteria
  }, []);

  // Function to handle job search
  const searchJobs = () => {
    fetchJobs(query, location, jobType);
  };
  return (
    <>
      <section className="header">
        <div className="head">
          <div>
            <p>
              <a href="#">
                <i class="fa-solid fa-envelope"></i> info@jobnevus.com
              </a>
            </p>
            <p>
              <a href="#">
                <i class="fa-solid fa-phone"></i> +237676026603
              </a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">Help Center</a>
            </p>
            <p>
              <a href="#">My account</a>
            </p>
            <p>
              <i class="fa-solid fa-chalkboard-user"></i>
            </p>
          </div>
        </div>
        <header className="Home1">
          <p>
            <img src={Image} alt="" className="logo" />
            <h2>
              Job<span>Seeker</span>
            </h2>
          </p>
          <nav>
            <ul>
              {nav.map((item) => (
                <li key={item}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
            <div className="Sign">
              <button className="but">Log Out</button>
            </div>
          </nav>
        </header>
        <div className="Job">
          <div className="JOB">
            <h1>JOBSEEKER</h1>
            <p>Search millions of jobs for free</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              eum?
            </p>
            <div className="form">
              <input
                placeholder="Search jobs"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                id="job"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
              </select>
              <button onClick={searchJobs} className="btn1">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="body">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul className="job">
          {jobs.map((job) => (
            <li key={job.id}>
              <div>
                {job.company && job.company.logo && (
                  <img
                    src={job.company.logo} // Use the company logo URL
                    alt={`${job.company.display_name} logo`} // Alt text for accessibility
                    style={{ width: "100px", height: "auto" }} // Styling for the logo
                  />
                )}
              </div>
              <div>
                <h3>{job.title}</h3>
                <p>{job.company.display_name}</p>
                <p>Location: {job.location.display_name}</p>
                <p>Salary: {job.salary_max}$</p>
                <a
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
                <a href="pages/Applly"> Apply</a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default HomeIn;
