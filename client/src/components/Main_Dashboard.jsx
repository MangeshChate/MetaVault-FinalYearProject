import { Add } from '@mui/icons-material'
import React from 'react'
import MyLineChart from './charts/MyLineChart'
import FileTypeDistributionPieChart from './charts/FileTypeDistributionPieChart'
import Dashhome from './mainDashboard/Dashhome'
import MyFiles from './mainDashboard/MyFiles'
import ChatAi from './mainDashboard/ChatAi'
import Images from './mainDashboard/Images'
import Videos from './mainDashboard/Videos'


const Main_Dashboard = ({selectedComponent  , contract }) => {



  return (
    <div className="text-white">
    {selectedComponent ===  '' && <Dashhome  contract={contract} />}
    {selectedComponent === 'MyFiles' && <MyFiles />}
    {selectedComponent === 'Images' && <Images />}
    {selectedComponent === 'Videos' && <Videos />}
    {selectedComponent === 'TalkWithAI' && <ChatAi />}


    </div>
  )
}

export default Main_Dashboard
