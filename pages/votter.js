export default function votter(){
  const users = [
    {
      id: 1,
      Name: "Nizam",
      sem: "1st",
    }

  ]
  return(
    <div>
      <h1>Votters</h1>
<p>who votted</p>
    {
      users.map(user => (
        <table>
          <tr>
            <td>{user.id}</td>
            <td>{user.Name}</td>
            <td>{user.sem}</td>
          </tr>
           
        </table>
      ))
    }
  
      </div>

  );
}