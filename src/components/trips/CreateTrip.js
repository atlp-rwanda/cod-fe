import React from 'react';

function CreateTrip() {
  return (
    <section className="fixed w-full h-screen bg-black bg-opacity-20 left-0 top-0 grid place-items-center z-[100]">
      <section className="w-4/5 h-max bg-white rounded py-10 px-5 grid place-items-center">
        <span className="text-lg text-[#fab33f] font-medium capitalize mb-5">
          create trip request
        </span>
        <section>
          <span className="text-sm text-gray-400 font-light capitalize">
            enter trip your details below
          </span>
          <section className="mt-5 border grid grid-cols-1 border-[#fab33f] border-opacity-25 p-1">
            <span className="w-full capitalize text-xs text-[#fab33f] font-light">departure</span>
            <input
              className="w-full border-0 active:border-0 focus:border-0 text-sm"
              type="text"
              name="departure place"
              value=""
              placeholder="Place of departure"
            />
          </section>
          <section className="mt-5 border grid grid-cols-1 border-[#fab33f] border-opacity-25 p-1">
            <span className="w-full capitalize text-xs text-[#fab33f] font-light">destination</span>
            <input
              className="w-full border-0 active:border-0 focus:border-0 text-sm"
              type="text"
              name="departure place"
              value=""
              placeholder="Place of arrival"
            />
          </section>
          <section className="mt-5 border grid grid-cols-1 border-[#fab33f] border-opacity-25 p-1">
            <span className="w-full capitalize text-xs text-[#fab33f] font-light">travel date</span>
            <input
              className="w-full border-0 active:border-0 focus:border-0 text-sm"
              type="date"
              name="departure place"
              value=""
              placeholder="Place of departure"
            />
          </section>
          <section className="mt-5 border grid grid-cols-1 border-[#fab33f] border-opacity-25 p-1">
            <span className="w-full capitalize text-xs text-[#fab33f] font-light">return date</span>
            <input
              className="w-full border-0 active:border-0 focus:border-0 text-sm"
              type="date"
              name="departure place"
              value=""
              placeholder="Place of arrival"
            />
          </section>
          <section className="mt-5 border grid grid-cols-1 border-[#fab33f] border-opacity-25 p-1">
            <span className="w-full capitalize text-xs text-[#fab33f] font-light">
              accommodation
            </span>
            <input
              className="w-full border-0 active:border-0 focus:border-0 text-sm"
              type="text"
              name="departure place"
              value=""
              placeholder="Place of arrival"
            />
          </section>
          <section className="mt-5 border grid grid-cols-1 border-[#fab33f] border-opacity-25 p-1">
            <span className="w-full capitalize text-xs text-[#fab33f] font-light">
              travel reason
            </span>
            <input
              className="w-full border-0 active:border-0 focus:border-0 text-sm"
              type="text"
              name="departure place"
              value=""
              placeholder="Place of arrival"
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default CreateTrip;
