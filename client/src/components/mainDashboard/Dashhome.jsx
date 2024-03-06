import React, { useEffect, useState } from 'react';
import MyLineChart from '../charts/MyLineChart';
import FileTypeDistributionPieChart from '../charts/FileTypeDistributionPieChart';
import { Download, KeyboardArrowDown, KeyboardArrowUp, Upload } from '@mui/icons-material';

const Dashhome = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [fileHistory, setFileHistory] = useState([
        { id: 1, fileName: 'Document.pdf', size: '2.5 MB', action: 'Uploaded', date: new Date() },
        { id: 2, fileName: 'Image.jpg', size: '1.1 MB', action: 'Downloaded', date: new Date() },
        { id: 3, fileName: 'Video.mp4', size: '5.3 MB', action: 'Uploaded', date: new Date() }
    ]);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const formattedTime = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div>
            <div className='m-5'>
                <span className='text-3xl font-bold'>Welcome Username</span>
            </div>
            <div>
                <div className='lg:grid lg:grid-cols-2 lg:p-4 lg:gap-5'>
                    <div className='shadow-2xl rounded-xl flex justify-center items-center'>
                        <MyLineChart />
                    </div>
                    <div className='shadow-2xl rounded-xl justify-center items-center flex'>
                        <FileTypeDistributionPieChart />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 h-[250px] p-4 mt-5 gap-4'>
                    <div className="shadow-2xl rounded-xl border p-6 flex flex-col items-center justify-center lg:col-span-4">
                        <div className="text-center">
                            <div className="text-7xl font-bold text-white">{formattedTime}</div>
                            <div className="text-lg text-gray-400">{dateTime.toLocaleDateString()}</div>
                        </div>
                    </div>
                    <div className='shadow-2xl flex flex-col  justify-center rounded-xl border p-6 col-span-4'>
                        <h2 className="text-2xl font-bold mb-4">File  History</h2>
                        <div>
                            {fileHistory.map(file => (
                                <div key={file.id} className="flex justify-between">
                                    <div>
                                        <span>{file.fileName}</span>
                                        <span className="text-gray-500 ml-2">{file.size}</span>
                                    </div>
                                    <div>
                                        <span>{file.action == "Uploaded" ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}</span>
                                        <span className="text-gray-500 ml-2">{file.date.toLocaleString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="shadow-2xl rounded-xl border p-6 flex flex-col   lg:col-span-4 bg-random-grad justify-between ">
                      
                          <div className='flex justify-start items-center gap-3'>
                            <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" className='w-[50px] ' alt="" />
                            <span className='font-bold logo-font '>
                                Ethreum Card
                            </span>
                          </div>
                          <div className='flex flex-col gap-3 p-4'>
                            <div className='logo-font'>Total Bal: <span className=''>20 ETH</span></div>
                            <div className='font-mono text-xl'>
                                0x78689344350829345
                            </div>
                          </div>
                        
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Dashhome;
