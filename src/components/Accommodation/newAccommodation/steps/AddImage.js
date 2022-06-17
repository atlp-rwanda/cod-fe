import React from 'react';
import { useStepperContext } from '../../../../contexts/StepperContext';

export default function Payment() {
  const { facilityData, setFacilityData } = useStepperContext();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    const { name } = event.target;
    setFacilityData({ ...facilityData, [name]: base64 });
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div className="m-2">
          <label className="inline-block mb-2 text-gray-500">File Upload</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                {!facilityData.images && (
                  <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                    Attach a file
                  </p>
                )}
                <img src={facilityData.images} alt="accommodation" className="max-w-32 h-28" />
              </div>
              <input
                type="file"
                className="opacity-0"
                name="images"
                onChange={handleFileRead}
                data-testid="addImage"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
