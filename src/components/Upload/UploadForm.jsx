/* eslint-disable react/prop-types */
import { DeleteOutlined, InboxOutlined, LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';

const UploadForm = ({ handleChange, fileType }) => {
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState(null);

    // Simulate upload endpoints (no real API)
    const uploadEndpoints = {
        training: 'https://mockapi.io/uploadTraining',
        master: 'https://mockapi.io/uploadMaster',
    };

    // eslint-disable-next-line no-unused-vars
    const uploadEndpoint = uploadEndpoints[fileType] || uploadEndpoints.master;

    // Simulate file upload without a real API
    const simulateFileUpload = (files) => {
        setLoading(true);
        setTimeout(() => {
            setFileList((prev) => [
                ...prev,
                ...Array.from(files).map((file) => ({ name: file.name, file })),
            ]);
            setLoading(false);
            setUploadStatus({ success: true, message: 'File(s) Upload Successful.' });

            setTimeout(() => setUploadStatus(null), 2000);

            handleChange && handleChange(files);
        }, 1000); // Simulated upload delay (1 second)
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        simulateFileUpload(files);
    };

    const handleChangeFile = (event) => {
        const files = event.target.files;
        simulateFileUpload(files);
    };

    const handleDeleteFile = (fileName) => {
        setFileList((prev) => prev.filter((file) => file.name !== fileName));
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white-seashell rounded-lg shadow-md">
            <p className="text-gray-700 text-xs mb-2">Max file size: <strong>5MB </strong> | <em>Max 3 files</em></p>

            {/* Upload Area */}
            <div
                className="w-full h-28 border-dashed border-4 border-caramel-dark rounded-lg bg-white hover:bg-gray-100 transition-colors duration-200"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <InboxOutlined className="text-caramel-dark text-5xl mb-3" />
                    <p className="font-semibold text-caramel text-sm">
                        Click or Drag files to this area to upload
                    </p>
                    <input
                        type="file"
                        multiple
                        onChange={handleChangeFile}
                        className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
                    />
                </div>
            </div>

            {loading && (
                <div className="mt-4 text-green-600 text-sm">
                    <LoadingOutlined /> Uploading...
                </div>
            )}

            {uploadStatus && uploadStatus.success && (
                <div className="mt-4 text-xs text-green-500">
                    {uploadStatus.message}
                </div>
            )}

            {/* File List */}
            {fileList.length > 0 && (
                <div className="mt-4 w-full">
                    <h3 className="font-semibold text-caramel mb-2">Uploaded File(s)</h3>
                    <ol className="space-y-2">
                        {fileList.map((file, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <span className="text-sm text-gray-800 truncate">{file.name}</span>
                                <button
                                    onClick={() => handleDeleteFile(file.name)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <DeleteOutlined />
                                </button>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default UploadForm;
