import React from 'react'
import Alertmsg from '../../components/Alertmsg'

export default function Alertapp() {
  return (
    <div className='container mx-auto'>
       <Alertmsg type={"success"} message={"Successful login"}/>
       <Alertmsg type={"info"} message={"Time triggered 3 Sec"} delay={true}/>
    </div>
  )
}
