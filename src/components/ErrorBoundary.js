import React from 'react';

function ErrorBoundary({error}){
    return(
          <div
            style={{
              fontFamily: "courier",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            
            <h2>Something went wrong</h2>
            <details>
              {error && error.toString()}
              <br />
            </details>
          </div>
    );
}
export default ErrorBoundary;