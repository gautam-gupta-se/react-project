import React from "react";

import {Link} from "react-router-dom";

const Home = () => {
    return(
<div className="container">
    <div className="py-4">
     <h1>Listed Task</h1>
     <Link to="/AddTask">
     <button type="button"   className="btn btn-primary btn-lg float-end ">Assigne Task</button>
     </Link>
     
     {/* <Link to="/dashboard">
     <Button style={myStyle}>
        <p>Click Me!</p>
     </Button>
 </Link> */}

       <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


    </div>
</div>

    );
};


export default Home;