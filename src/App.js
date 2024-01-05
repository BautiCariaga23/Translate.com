import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [fromL, setFromL] = useState("en")
  const [toL, setToL] = useState("es")
  const [translation, setTranslation] = useState("")
  const [from, setFrom] = useState("")
  const handleChange = ()=>{
    fetch(`https://api.mymemory.translated.net/get?q=${from}&langpair=${fromL}|${toL}`)
    .then((response) => response.json())
    .then((data) => setTranslation(data.matches[0].translation))
    .catch((err) => console.log(err))
  }
  return (
    <main>
      <div className='container'>
        <h1>Translate.com</h1>
        <div className='flex'>
          <div className='textBox'>
            <div className='flex language'>
              <button className={`${fromL == "es" ? 'selected' : 'unselected'}`} onClick={()=>{
                setFromL("es")
              }}>Spanish</button>
              <button className={`${fromL == "en" ? 'selected' : 'unselected'}`} onClick={()=>{
                setFromL("en")
              }}>English</button>
              <button className={`${fromL == "fr" ? 'selected' : 'unselected'}`} onClick={()=>{
                setFromL("fr")
              }}>French</button>
            </div>
            <hr></hr>
            <textarea onChange={(e)=>{
              setFrom(e.target.value)
            }} spellcheck="false"></textarea>
            <div className='buttons'>
            <div>
              <button onClick={() => {navigator.clipboard.writeText(from)}} className='items'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M1.424.27A.75.75 0 0 1 2 0h5a.75.75 0 0 1 .738.884l-.024.131A1.5 1.5 0 0 1 9 2.5v.75H7.25a3 3 0 0 0-3 3V11H1.5A1.5 1.5 0 0 1 0 9.5v-7a1.5 1.5 0 0 1 1.286-1.485l-.024-.13a.75.75 0 0 1 .162-.616ZM2.9 1.5l.115.634a.75.75 0 0 0 .738.616h1.496a.75.75 0 0 0 .738-.616l.115-.634z"/><path d="M7.25 4.5A1.75 1.75 0 0 0 5.5 6.25v6c0 .966.784 1.75 1.75 1.75h5A1.75 1.75 0 0 0 14 12.25v-6a1.75 1.75 0 0 0-1.75-1.75zM7.875 8c0-.345.28-.625.625-.625H11a.625.625 0 1 1 0 1.25H8.5A.625.625 0 0 1 7.875 8M8.5 9.875a.625.625 0 1 0 0 1.25H11a.625.625 0 1 0 0-1.25z"/></g></svg></button>
            </div>
            <button onClick={handleChange} className='translatebutton'>Translate</button>
            </div>
          </div>

          <div className='textBox'>
            <div className='flex language'>
              <button className={`${toL == "es" ? 'selected' : 'unselected'}`} onClick={()=>{
                setToL("es")
              }}>Spanish</button>
              <button className={`${toL == "en" ? 'selected' : 'unselected'}`} onClick={()=>{
                setToL("en")
              }}>English</button>
              <button className={`${toL == "fr" ? 'selected' : 'unselected'}`} onClick={()=>{
                setToL("fr")
              }}>French</button>
            </div>
            <hr></hr>
            <textarea value={translation} readonly="yes" spellcheck="false"></textarea>
            <div className='buttons'>
            <div>
              <button onClick={() => {navigator.clipboard.writeText(translation)}} className='items'><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M1.424.27A.75.75 0 0 1 2 0h5a.75.75 0 0 1 .738.884l-.024.131A1.5 1.5 0 0 1 9 2.5v.75H7.25a3 3 0 0 0-3 3V11H1.5A1.5 1.5 0 0 1 0 9.5v-7a1.5 1.5 0 0 1 1.286-1.485l-.024-.13a.75.75 0 0 1 .162-.616ZM2.9 1.5l.115.634a.75.75 0 0 0 .738.616h1.496a.75.75 0 0 0 .738-.616l.115-.634z"/><path d="M7.25 4.5A1.75 1.75 0 0 0 5.5 6.25v6c0 .966.784 1.75 1.75 1.75h5A1.75 1.75 0 0 0 14 12.25v-6a1.75 1.75 0 0 0-1.75-1.75zM7.875 8c0-.345.28-.625.625-.625H11a.625.625 0 1 1 0 1.25H8.5A.625.625 0 0 1 7.875 8M8.5 9.875a.625.625 0 1 0 0 1.25H11a.625.625 0 1 0 0-1.25z"/></g></svg></button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
