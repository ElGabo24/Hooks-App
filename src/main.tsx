import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FocusScreen } from './04-uesRef/FocusScreen'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithEffectHook } from './02-useEffect/TrafficLightWithEffectHook'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>
)
