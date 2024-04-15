import { Delete } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const Table = ({ contract }) => {
  const account = localStorage.getItem('account');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await contract.getUserFiles(account);
        console.log("Received data:", data);
        // Filter out data entries where file_name or file_type is empty or null
        const filteredData = data.filter(item => item.file_name && item.file_type);
        setData(filteredData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [contract, account]);
  

  const deleteFileByAttributes = async (name, url) => {
    try {
      await contract.deleteFileByAttributes(name, url);
      Swal.fire({
        title: "File Deleted Successfully !",
        
        icon: "success"
      });
    } catch (error) {
      console.log(error)
    }
  }

  // Render table if data is available, otherwise render message
  return (
    <div className="flex flex-col">
      {data.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">No content uploaded</p>
      ) : (
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow dark:bg-gray-800 overflow-hidden border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 dark:text-gray-300 uppercase tracking-wider">
                      File Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 dark:text-gray-300 uppercase tracking-wider">
                      File Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 dark:text-gray-300 uppercase tracking-wider">
                      date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-800 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="white-blur-glass">
                  {data.map((item) => (
                    <tr className='' key={item.file_name}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-gray-300">{item.file_name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-gray-300">{item.file_type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-gray-300">{item.upload_timestamp && new Date(item.upload_timestamp * 1000).toLocaleDateString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <Delete className="text-red-500 hover:text-red-900" onClick={() => deleteFileByAttributes(item.file_name, item.file_url)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Table;
