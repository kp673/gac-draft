
import './App.css';
import Parse from 'parse';
import Table from 'react-bootstrap/Table'

function App() {
  async function getData() {
    const Ratings = Parse.Object.extend('Ratings');
  const query = new Parse.Query(Ratings);
  try {
   const results = await query.find();
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const beer = object.get('beer')
      const hard = object.get('hard')
      const eat = object.get('eat')
      const smoking = object.get('smoking')
      const name = object.get('name')
      const avgRating = object.get('avgRating')
      const iq = object.get('iq')
      const wRating = object.get('wRating')
      console.log(name);
      console.log(beer);
      console.log(hard);
      console.log(smoking);
      console.log(eat);
      console.log(iq);
      console.log(avgRating);
      console.log(wRating);
    }
  } catch (error) {
    console.error('Error while fetching Ratings', error);
  }
}
  return (
    <div className="App">
      <header className="App-header">
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
      </header>
    </div>
  );
}

export default App;
