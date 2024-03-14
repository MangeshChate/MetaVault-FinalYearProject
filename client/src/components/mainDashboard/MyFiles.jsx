import React, { useState } from 'react';
import sample from "../../assets/sample.pdf";
import { Add, Cancel, Close, PictureAsPdf, Remove, RemoveCircle } from '@mui/icons-material';

const pdfLogo = "https://upload.wikimedia.org/wikipedia/commons/4/42/Pdf-2127829.png";
const Card = ({ type, title }) => {
  let imageSrc = '';
  switch (type) {
    case 'pdf':
      imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/4/42/Pdf-2127829.png';
      break;
    default:
      imageSrc = 'default_placeholder_image';
  }

  return (
    <div className='w-[300px] h-[300px] white-blur-glass rounded-xl'>
      <div className='flex justify-center'>
        <img src={imageSrc} alt={`${type} document`} className='w-[250px]' />
      </div>
      <div className='flex justify-center'>
        <span className='' style={{ maxWidth: '100%' }}>{title}</span>
      </div>
    </div>
  );
};

const MyFiles = ({state}) => {
  const documents = [
    { type: 'pdf', title: 'Sample Document 1' },
    { type: 'pdf', title: 'Sample Document 2' },
    // Add more documents here
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setSelectedFile(null); // Clear selected file when closing modal
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className='relative h-[92vh] overflow-y-scroll'>
      <div className='grid grid-cols-5 p-5 gap-5'>
        {documents.map((document, index) => (
          <Card key={index} type={document.type} title={document.title} />
        ))}
      </div>
      <span className='absolute bottom-10 right-10 p-3 white-blur-glass rounded-full cursor-pointer' onClick={toggleModal}>
        <Add className='font-bold text-4xl' />
      </span>

      {modalVisible && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-25'>
          <div className='w-[800px] h-[600px] white-blur-glass rounded-lg'>
            <div className='p-5'>
              <div className='flex justify-end'>
                <button className='ml-3 bg-red-500 text-white px-4 py-2 rounded-md' onClick={toggleModal}>
                  <Close />
                </button>
              </div>
              <span className='flex justify-center font-bold   text-3xl w-full'>Upload File</span>
              <div className='p-5 mt-5'>
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-3'>
                    <span className=' font-bold '>Enter Title :</span>
                    <input type="text" placeholder='Document Name ...' className='form-control blue-blur-glass text-white border-0 p-4 text-lg' required />
                  </div>
                  <div className='flex flex-col gap-3 mt-4'>
                    <span className=' font-bold '>Choose file :</span>
                    <label htmlFor="file-upload" className="cursor-pointer flex items-center justify-center w-full px-4 py-20  blue-blur-glass rounded-xl border-2 border-white border-dashed">
                      <span className="leading-normal  border-none font-bold text-lg">
                        {selectedFile ? (
                          <div className='flex justify-center flex-col items-center'>
                            <img src={pdfLogo} alt="" className='w-[100px] ' /> 
                            <span>

                            {selectedFile.name}
                            </span>
                          </div>

                        ) : "Select File or Drop File"}

                      </span>
                      <input id="file-upload" type="file" className="hidden" accept="application/pdf" onChange={handleFileChange} />
                    </label>
                        <button type="submit" className='btn bg-blue-600 mt-5 rounded-full font-bold'>
                          Upload File
                        </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div >
  );
};

export default MyFiles;
