import React, {useState, useEffect} from 'react';

function DisplayDataURL() {
  const [myData, setMyData] = useState([])
  useEffect(() => {
    // best tutorials - https://rahmanfadhil.com/fetch-data-with-react-hooks/
    fetch("https://api.github.com/users/hadley/orgs")
      .then(response => response.json())
      .then(data => {
        setMyData(data)
      })
  }, [])
  return(
    <div>
      <h6>JSON Data</h6>
      {myData.map(items => (
        <ul>
          <li>{items.login}</li>
          <li>{items.id}</li>
        </ul>
      ))}
    </div>
  )

}

export default DisplayDataURL;
