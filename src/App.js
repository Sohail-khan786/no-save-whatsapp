import './App.css';

function App() {
  return (
    <div className="pageContainer">
      {/* <div className="card"></div> */}
      <div className="card">
        <p>Enter Mobile Number With Country Code</p>
        <input placeholder="eg : +91866XXXXXX"/>
        <button>Open</button>
      </div>
    </div>
  );
}

export default App;
