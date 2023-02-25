import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);


  const fetchData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <button onClick={()=>fetchData("http://localhost:8080/api/v1/WSSS?sidsOrStars=sids")}>Fetch sids Data</button>
      <button onClick={()=>fetchData("http://localhost:8080/api/v1/WSSS?sidsOrStars=stars")}>Fetch stars Data</button>
      {data && (
        <div>
          <p>ICAO: {data.icao}</p>
          <ul>
            {data.topWaypoints.map((waypoint, index) => (
              <li key={index}>
                {Object.keys(waypoint)[0]}: {Object.values(waypoint)[0]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyComponent;