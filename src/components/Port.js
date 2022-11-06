import React, { useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import Profile from './Profile';
import ErrorBoundary from './ErrorBoundary'
import Rest from './Rest'
function Port() {
  const [state, setState] = useState('');
  const [repos, setRepos] = useState([]);
  const[error,setError]=useState('');
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const handleClick = async () => {
    try {
      const result = await axios(`https://api.github.com/users/${state}/repos`);
      setRepos(result);
    } catch (err) {
      setError(err);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          columnGap: "15px",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "courier",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
        <Link
          to="Port"
          style={{
            marginRight: "150px",
            fontFamily: "courier",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Portfolio
        </Link>
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.EgSPriuEnAtlIWJV8R_E1QHaGs?w=183&h=180&c=7&r=0&o=5&pid=1.7"
            alt="github"
            style={{ width: "50px", height: "40px" }}
          />
        </div>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "60px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "10px",
            marginLeft: "400px",
          }}
        >
          <div>
            <input
              type="text"
              placeholder="search"
              value={state}
              onChange={handleChange}
              style={{
                borderRadius: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "15px",
              }}
            />
          </div>
          <div>
            <button
              onClick={handleClick}
              style={{
                border: "2px",
                backgroundColor: "blue",
                marginRight: "210px",
                borderRadius: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                color:'white'
              }}
            >
              Search
            </button>
          </div>
        </div>

        {error ? (
      <ErrorBoundary error={error}/>
        ) : repos ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
            {/* {repos.data.map((item) => (
                          <div className="pt-10">
        <h1 className="mb-10 font-bold text-2xl">
          Viewing {item.name}'s repositories
        </h1>
      
            <Profile key={item.id} {...item}/> */}
            <Rest repos={repos} />
          </div>
        ) : (
          <div>No repositories found</div>
        )}
      </div>
    </div>
  );
}
export default Port;
