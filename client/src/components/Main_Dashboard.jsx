import { Add } from '@mui/icons-material'
import React from 'react'
import MyLineChart from './charts/MyLineChart'
import FileTypeDistributionPieChart from './charts/FileTypeDistributionPieChart'
import Dashhome from './mainDashboard/Dashhome'
import MyFiles from './mainDashboard/MyFiles'
import ChatAi from './mainDashboard/ChatAi'


const Main_Dashboard = ({selectedComponent}) => {



  return (
    <div className="text-white">
    {selectedComponent ===  '' && <Dashhome />}
    {selectedComponent === 'MyFiles' && <MyFiles />}
    {selectedComponent === 'TalkWithAI' && <ChatAi />}

    </div>
  )
}

export default Main_Dashboard
