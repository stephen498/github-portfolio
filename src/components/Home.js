import React from "react";
import {Link} from 'react-router-dom'
function Home(){
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumn: "30% 70%",
        width: "100%",
        height: "100%",
        border: "5px",
        borderColor: "Red",
      }}
    >
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
        style={{
          display: "grid",
          gridTemplateColumns: "600px 70px",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "4px",
          marginTop: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "courier",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Welcome,this page helps you to navigate to the github portfolio of
            any user using their usernames through fetching of data from the
            github API.
          </div>
          <button
            style={{
              border: "2px",
              backgroundColor: "#046307",
              marginRight: "310px",
              borderRadius: "20px",
              paddingLeft: "10px",
            }}
          >
            <Link
              to="Port"
              style={{
                float: "left",
                fontFamily: "courier",
                fontSize: "25px",
                fontWeight: "bold",
                color:'white',
                hover:'lightBlue'
              }}
            >
              Github portfolio
            </Link>
          </button>
        </div>
        {/* <div>
          <img
            src="https://th.bing.com/th/id/OIP.EgSPriuEnAtlIWJV8R_E1QHaGs?w=183&h=180&c=7&r=0&o=5&pid=1.7"
            alt="github"
            style={{ width: "270px", height: "70px" }}
          />
        </div> */}
      </div>
    </div>
  );
}
export default Home;
