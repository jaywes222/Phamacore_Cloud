import React from 'react';

const PackageInfo = ({ companyName, packageInfo }) => (
    <>
        <div className="w-full border p-3 rounded-lg shadow-lg bg-gray-100 mb-2">
            <h2 className="text-caramel font-semibold text-lg text-center">{packageInfo.name}</h2>

            <div className="flex justify-around mt-2">
                <div className="text-center">
                    <p><strong>Branches:</strong> {packageInfo.branches}</p>
                </div>
                <div className="text-center">
                    <p><strong>Users:</strong> {packageInfo.users}</p>
                </div>
            </div>
        </div>
    </>
);

export default PackageInfo;
