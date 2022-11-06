import React from 'react';
import {Link} from 'react-router-dom';
function NotFound(){
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
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "4px",
            marginTop: "200px",
            fontFamily: "courier",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          <img
            src="https://th.bing.com/th/id/OIP.fn6HCRvsYmGOIAVF8CaFXgHaEK?w=292&h=180&c=7&r=0&o=5&pid=1.7"
            alt="404"
          />
        </div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "4px",
            marginTop: "20px",
            fontFamily: "courier",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          404 page
        </div>
      </div>
    );
}
export default NotFound;