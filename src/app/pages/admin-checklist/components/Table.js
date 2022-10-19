import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;