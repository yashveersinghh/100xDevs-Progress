import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './atoms'

const App = () => {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp(){
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  return (
    <>
      <button>Home</button>
      <button>My Network({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs({jobsCount})</button>
      <button>Messaging({messagingCount})</button>
      <button>Notifications({notificationsCount})</button>  
      <button>Me</button>
    </>
  )
}

export default App