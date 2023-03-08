import { useState } from 'react';
import './App.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const openNumberOnWhatsapp = (phone) => {
  const whatsappUrl = `https://wa.me/${phone}`.trim().replace(/\s/g,'').replace(/-/g,'')
  window.open(whatsappUrl,"_blank")
  
  }

  return (
    <div className="pageContainer">
      <div className="card">
        <p>Enter Mobile Number With Country Code</p>
        <input 
          placeholder="eg : +91866XXXXXX" 
          value={phoneNumber} 
          onChange={(e)=>{setPhoneNumber(e.target.value)}}
        />
        <button onClick={()=>{openNumberOnWhatsapp(phoneNumber)}}>Open on WhatsApp</button>
      </div>
    </div>
  );
}

export default App;
