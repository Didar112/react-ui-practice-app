
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricinfOptions from './PricingOptions/PricinfOptions'


const pricingPromise = fetch('pricingdata.json').then(res=>res.json())

function App() {


  return (
    <>
    <header>
      <NavBar></NavBar>

    </header>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <PricinfOptions pricingPromise={pricingPromise}></PricinfOptions>
      </Suspense>
    </main>
    </>
  )
}

export default App
