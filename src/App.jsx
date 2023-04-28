import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Homepage from './pages/Homepage'
import CustomModal from './components/modal/CustomModal'
import ModalHolder from './components/modal/ModalHolder'


function App() {
  const [openModal, setOpenModal] = useState(true)

  return (
    <div className="App">
      {/* <Homepage /> */}
      <ModalHolder />
    </div>
  )
}

export default App
