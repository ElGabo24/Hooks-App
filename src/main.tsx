import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
import { ClienteInformation } from './08-use-suspense/ClienteInformation'
import { getUserAction } from './08-use-suspense/get-user.action'
// import { InstagromApp } from './07-useOptimistic/InstragamApp'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { MemoHook } from './06-memos/MemoHook'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'
// import { FocusScreen } from './04-uesRef/FocusScreen'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithEffectHook } from './02-useEffect/TrafficLightWithEffectHook'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-2xl'>Cargando</h1>
      </div>
    }>
      <ClienteInformation getUser={getUserAction(1001)} />
    </Suspense>
  </StrictMode>
)
