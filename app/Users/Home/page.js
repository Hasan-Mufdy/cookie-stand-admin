"use client";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { data } from "../../../data/data";
//import Footer from "../../../components/Footer";

const Footer = ({ locationCount }) => {
  return (
    <footer className="bg-gray-200 text-center text-gray-950 p-4">
      <p>Total Locations: {locationCount}</p>
    </footer>
  );
};

const Page = () => {
  const [location, setLocation] = useState("");
  const [minCustomers, setMinCustomers] = useState(0);
  const [maxCustomers, setMaxCustomers] = useState(0);
  const [avgCookies, setAvgCookies] = useState(0);
  const [cookieStandData, setCookieStandData] = useState([]);
  const locationCount = parseInt(cookieStandData.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCookieStand = {
      location,
      minCustomers: parseInt(minCustomers),
      maxCustomers: parseInt(maxCustomers),
      avgCookies: parseFloat(avgCookies),
    };

    setCookieStandData([...cookieStandData, newCookieStand]);
  };

  const generateTable = () => {
    const fixedNumbers = [
      48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36,
    ];
    const hours = Array.from({ length: 14 }, (_, i) => i + 6);

    const calculateTotalForHour = (hour, fixedNumber) => {
      return cookieStandData.reduce((acc, cookieStand) => {
        return (
          acc +
          Math.floor(
            ((cookieStand.minCustomers + cookieStand.maxCustomers) / 2) *
              cookieStand.avgCookies *
              fixedNumber
          )
        );
      }, 0);
    };

    const calculateTotalForAllHours = (fixedNumber) => {
      return cookieStandData.reduce((acc, cookieStand) => {
        return (
          acc +
          Math.floor(
            ((cookieStand.minCustomers + cookieStand.maxCustomers) / 2) *
              cookieStand.avgCookies *
              fixedNumber
          )
        );
      }, 0);
    };

    // Calculate the total for each hour
    const hourTotals = fixedNumbers.map((num, idx) =>
      calculateTotalForHour(idx + 6, num)
    );

    // Calculate the total of totals
    const totalOfTotals = calculateTotalForAllHours(
      fixedNumbers.reduce((acc, num) => acc + num, 0)
    );

    return (
      <table className="border-collapse border border-gray-700 w-full">
        <thead>
          <tr>
            <th>Location</th>
            {hours.map((hour) => (
              <th key={hour}>{`${hour}:00`}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cookieStandData.map((cookieStand, index) => (
            <tr key={index}>
              <td>{cookieStand.location}</td>
              {fixedNumbers.map((num, idx) => (
                <td key={`${cookieStand.location}-${hours[idx]}`}>{num}</td>
              ))}
              <td>{fixedNumbers.reduce((acc, num) => acc + num, 0)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
  <tr>
    <td>Total</td>
    {fixedNumbers.map((num, idx) => {
      const totalForHour = num * locationCount; // Calculate total for each hour
      return <td key={`total-${idx}`}>{totalForHour}</td>;
    })}
    <td>{fixedNumbers.reduce((acc, num) => acc + num * locationCount, 0)}</td>
  </tr>
</tfoot>

      </table>
    );
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Add a Cookie Stand</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-700 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="minCustomers"
                className="block text-gray-700 font-bold mb-2"
              >
                Minimum Customers per Hour
              </label>
              <input
                type="number"
                id="minCustomers"
                name="minCustomers"
                placeholder="Enter minimum customers"
                value={minCustomers}
                onChange={(e) => setMinCustomers(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="maxCustomers"
                className="block text-gray-700 font-bold mb-2"
              >
                Maximum Customers per Hour
              </label>
              <input
                type="number"
                id="maxCustomers"
                name="maxCustomers"
                placeholder="Enter maximum customers"
                value={maxCustomers}
                onChange={(e) => setMaxCustomers(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="avgCookies"
                className="block text-gray-700 font-bold mb-2"
              >
                Average Cookies per Sale
              </label>
              <input
                type="number"
                id="avgCookies"
                name="avgCookies"
                placeholder="Enter average cookies per sale"
                value={avgCookies}
                onChange={(e) => setAvgCookies(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Cookie Stand
            </button>
          </form>
        </div>
      </main>

      <div className="flex justify-center items-center pt-6">
        <p className="text-center">Report table:</p>
      </div>

      <div className="flex justify-center items-center pb-6">
        {cookieStandData.length > 0 ? (
          generateTable()
        ) : (
          <p>No cookie stand data available.</p>
        )}
      </div>

      <Footer locationCount={locationCount} />
    </div>
  );
};

export default Page;

// old tsx code:

// import Header from "../../../components/Header";
// // import Main from '../components/Main';
// import Footer from "../../../components/Footer";
// import React, { useState, ChangeEvent, FormEvent } from "react";

// const page = () => {
//   return (
//     <div>
//       <Header />

//       <main className="p-4">
//         <div className="bg-white p-6 rounded shadow">
//           <h2 className="text-xl font-bold mb-4">Add a Cookie Stand</h2>

//           <form>
//             <div className="mb-4">
//               <label
//                 htmlFor="location"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 placeholder="Enter location"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="minCustomers"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Minimum Customers per Hour
//               </label>
//               <input
//                 type="number"
//                 id="minCustomers"
//                 name="minCustomers"
//                 placeholder="Enter minimum customers"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="maxCustomers"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Maximum Customers per Hour
//               </label>
//               <input
//                 type="number"
//                 id="maxCustomers"
//                 name="maxCustomers"
//                 placeholder="Enter maximum customers"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <div className="mb-6">
//               <label
//                 htmlFor="avgCookies"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Average Cookies per Sale
//               </label>
//               <input
//                 type="number"
//                 id="avgCookies"
//                 name="avgCookies"
//                 placeholder="Enter average cookies per sale"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Create Cookie Stand
//             </button>
//           </form>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default page;
