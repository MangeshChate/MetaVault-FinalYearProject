import React, { useEffect, useState } from 'react';
import Leftbar_Dashboard from '../components/Leftbar_Dashboard';
import Main_Dashboard from '../components/Main_Dashboard';
import { ethers } from 'ethers';
import ABI from './ABI.json';
const Dashboard = ({ state }) => {
    const [selectedComponent, setSelectedComponent] = useState('');
    const [connected, setConnected] = useState(false);
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    const [userData , setUserData] = useState([]);

    const handleNavbarItemClick = (componentName) => {
        setSelectedComponent(componentName);
    };


    useEffect(() => {
        const connect = async () => {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAccount(address);
                localStorage.setItem('account', address);
                
                setConnected(true);
    
                const contractAddress = "0x63C7F8B054d51c9968549e86BaDcb43c0097ed81";
                const abi = ABI;
                const contract = new ethers.Contract(contractAddress, abi, signer);
                setContract(contract);
    
               
    
            } catch (error) {
                console.error('Error connecting with wallet:', error);
                setConnected(false);
            }
        };
    
        connect();
    }, []);
    
    useEffect(() => {
        const res = async () => {
            try {
                // Check if contract is set
                if (contract) {
                    const data = await contract.getUser(account);
                    console.log('Data from contract:', data);
                    setUserData(data); // Set user data in state
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        res();
    }, [contract]);


    return (
        <div className=''>
            <div className='bg-[#252525] p-3 text-white flex items-center justify-between'>
                <div>
                    <span className='logo-font text-3xl'>Metavault</span>
                </div>
                <div className='flex gap-5  items-center'>
                    <div className='border p-2 rounded-full font-mono border-pink-500'>
                        {account}
                    </div>

                    <div className='flex items-center gap-3 border  pe-3 border-blue-500 cursor-pointer  rounded-full'>
                        <img src={userData[1]} alt="" className='w-[50px] h-[50px] rounded-full' />
                        <span className='font-mono'>{userData[0]}</span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-12 h-full'>
                <div className='col-span-2 relative'>
                    <Leftbar_Dashboard onItemClick={handleNavbarItemClick} />
                </div>
                <div className='col-span-10 bg-dark '>
                    <Main_Dashboard selectedComponent={selectedComponent}  contract={contract} account={account}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
