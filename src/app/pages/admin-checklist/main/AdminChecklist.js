import { useEffect, useState } from "react";

import admin from '../../admin-checklist/admin.css'
import Table from "../components/Table";
import axios from "axios";
import Footer from '../../template-components/Footer.js';
import "../../../App.css";
import Header from '../../template-components/Header.js';

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [query, setQuery] = useState("");
//   const keys = ["first_name", "last_name", "email"];
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   };
// return (
//   <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//     {<Table data={Search(Users)} />}
//   </div>
// );
// }


////////////////////// API SEARCH

 export const AdminChecklist = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };

  /*useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);
  */
  return (
    <div className="page-container">
      <Header />
      <div className="app">
        <h1 className="naslovAdmin">Pregled zaposlenika</h1>
        <section className="app2">
          <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          <button type="submit" className="btn btn-primary btn-lg">
            Enter
          </button>
        </section>
        {<Table />}
      </div>
      <Footer />
    </div>
  );
}

export default AdminChecklist;