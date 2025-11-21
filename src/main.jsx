import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

function Fallback() {
  return (
    <div style={{minHeight:'100vh',background:'#000',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',padding:'24px'}}>
      <div style={{maxWidth:600,textAlign:'center'}}>
        <div style={{width:8,height:8,borderRadius:9999,background:'#fff',display:'inline-block',marginRight:8,verticalAlign:'middle'}} />
        <strong>ReConnect</strong>
        <p style={{marginTop:12,opacity:0.7}}>Loading… If this persists, please hard refresh.</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Fallback /> }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
