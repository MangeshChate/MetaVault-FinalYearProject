import React, { useEffect, useState } from 'react';
import MyLineChart from '../charts/MyLineChart';
import { ethers } from "ethers";
import FileTypeDistributionPieChart from '../charts/FileTypeDistributionPieChart';
import { Download, KeyboardArrowDown, KeyboardArrowUp, Upload } from '@mui/icons-material';

const Dashhome = ({ contract }) => {
    const [dateTime, setDateTime] = useState(new Date());
    const [userData, setUserData] = useState([]);
    const [balance, setBalance] = useState('?');
    const [video, setVideo] = useState('');
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');


    const account = localStorage.getItem('account');


    // console.log(userData)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    useEffect(() => {
        const res = async () => {
            try {
                // Check if contract is set
                if (contract) {
                    const data = await contract.getUser(account);
                    // console.log('Data from contract:', data);
                    setUserData(data); // Set user data in state
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }



        };

        res();
    }, [contract]);

    useEffect(() => {
        const res = async () => {
            try {
                if (contract) {
                    const data = await contract.getUserFiles(account);
                    // console.log("Received data:", data);
                    const image = data.filter(document => document.file_type === 'image');
                    const pdf = data.filter(document => document.file_type === 'pdf');
                    const video = data.filter(document => document.file_type === 'video');

                    setImage(image.length)
                    setFile(pdf.length)
                    setVideo(video.length)

                }
            } catch {
                console.error('Error fetching data:', error);
            }
        }
        res()
    }, [contract])


    const formattedTime = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        const getAccountBalance = async (accountAddress) => {
            try {
                // Create a provider instance
                const provider = new ethers.providers.Web3Provider(window.ethereum);

                // Fetch balance
                const balance = await provider.getBalance(accountAddress);

                // Convert balance from Wei to Ether
                const balanceInEther = ethers.utils.formatEther(balance);

                // Update state with the balance
                setBalance(balanceInEther);

                return balanceInEther;
            } catch (error) {
                console.error('Error fetching account balance:', error);
                return null;
            }
        };

        getAccountBalance(account);
    }, [account]);

    return (
        <div>
            <div className='m-5'>
                <span className='text-3xl font-bold'>Welcome {userData[0]}</span>
            </div>
            <div>
                <div className='lg:grid lg:grid-cols-2 lg:p-4 lg:gap-5'>
                    <div className='shadow-2xl rounded-xl flex justify-center items-center'>
                        <MyLineChart />
                    </div>
                    <div className='shadow-2xl rounded-xl justify-center items-center flex'>
                        <FileTypeDistributionPieChart i={image} f={file} v={video} />
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 h-[250px] p-4 mt-5 gap-4'>
                    <div className="shadow-2xl rounded-xl border p-6 flex flex-col items-center justify-center lg:col-span-4">
                        <div className="text-center">
                            <div className="text-7xl font-bold text-white">{formattedTime}</div>
                            <div className="text-lg text-gray-400">{dateTime.toLocaleDateString()}</div>
                        </div>
                    </div>

                    <div className="shadow-2xl rounded-xl border p-6 flex flex-col lg:col-span-4 gradient-bg">
                        <div className="flex justify-start items-center gap-5">
                            <img src="https://preview.redd.it/i-made-a-custom-op-discord-icon-v0-oby6d0ersbs81.png?auto=webp&s=0101218530a2068771a744d6523f09c29df76e90" className="w-[50px] rounded-full" alt="" />
                            <span className="font-bold logo-font text-white">
                                MapCoin Card
                            </span>
                        </div>
                        <div className="flex flex-col gap-3 p-4 mt-10 ">
                            <div className="text-white font-semibold ">
                                Total Bal: <span className="text-xl logo-font">{userData.tokenBalance?.toString()} MAP</span>
                            </div>
                            <div className="text-white font-mono">
                                {account}
                            </div>
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
                            <div className='logo-font'>Total Bal: <span className=''>{balance} ETH</span></div>
                            <div className='font-mono '>
                                {account}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashhome;
