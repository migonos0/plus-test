import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArray(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Actual Interface</th>
          <th scope="col">Address</th>
          <th scope="col">Disabled</th>
          <th scope="col">Dynamic</th>
          <th scope="col">Interface</th>
          <th scope="col">Invalida</th>
          <th scope="col">Network</th>
        </tr>
      </thead>
      <tbody>
        {array.map((element, index) => (
          <tr key={index}>
            <td>{element[".id"]}</td>
            <td>{element["actual-interface"]}</td>
            <td>{element["address"]}</td>
            <td>{element["disabled"]}</td>
            <td>{element["dynamic"]}</td>
            <td>{element["actual-interface"]}</td>
            <td>{element["actual-interface"]}</td>
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
        <tr>
          <th scope="col">#</th>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
          <td scope="col">Total</td>
        </tr>
      </tfoot> */}
    </table>
  );
}

export default App;
