import React from 'react';

const BookTripForm = () => {
  return (
    <>
      <div className="w-3/5 h-fit flex flex-col items-start bg-transparent">
        <div className="text-white mb-5">
          <a href="/" className="px-4 py-2.5 bg-white border text-[#FAB33F] rounded-3xl text-sm">
            One Way
          </a>
          <a
            href="/"
            className="px-4 py-2.5 bg-transparent border  ml-5 border-[#FAB33F] text-[#FAB33F] rounded-3xl text-sm"
          >
            Multi City
          </a>
        </div>
        <div className="w-full h-32 px-10 pb-7 flex justify-between items-end bg-white rounded-t-lg rounded-r-lg rounded-b-2xl rounded-bl-2xl">
          <div className="h-fit grid items-end">
            <span className="text-[#FAB33F] text-base mb-1">From:</span>
            <input
              type="text"
              name="fromLocation"
              placeholder="Kigali"
              id="fromLocation"
              className="py-2 px-2 w-full rounded-xl border border-color-black"
            />
          </div>
          <div className="h-fit grid items-end">
            <span className="text-[#FAB33F] text-base mb-1">To:</span>
            <input
              type="text"
              name="toLocation"
              placeholder="Gisenyi"
              id="fromLocation"
              className="py-2 px-2 w-full rounded-xl border border-color-black"
            />
          </div>
          <div className="h-fit grid items-end">
            <span className="text-[#FAB33F] text-base mb-1">Departure Date:</span>
            <input
              type="date"
              name="travelDate"
              id="travelDate"
              className="py-2 px-2 w-full rounded-xl border border-color-black"
            />
          </div>
          <div className="h-fit grid items-end">
            <span className="text-[#FAB33F] text-base mb-1">Return Date:</span>
            <input
              type="date"
              name="returnDate"
              id="returnDate"
              className="py-2 px-2 w-full rounded-xl border border-color-black"
            />
          </div>
          <div className="h-fit grid items-end">
            <a
              href="/"
              className="w-fit p-4 border border-[#FAB33F] text-white text-sm rounded-md bg-[#FAB33F] hover:text-[#FAB33F] hover:bg-transparent hover:transition-colors"
            >
              Book Trip
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTripForm;
