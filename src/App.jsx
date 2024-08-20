import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const App = () => {
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
    <div>
      <h1>Job Search</h1>
      <div>
        <input
          type="text"
          placeholder="Search jobs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="">All Types</option>
          <option value="fulltime">Full-time</option>
          <option value="parttime">Part-time</option>
        </select>
        <button onClick={searchJobs}>Search</button>
      </div>

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
              <p>{job.location.display_name}</p>
              <a
                href={job.redirect_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
              <a href="#"> Apply</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
