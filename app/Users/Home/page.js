"use client";
import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
//import Footer from "../../../components/Footer";

const Page = () => {
  const [location, setLocation] = useState("Barcelona");
  const [minCustomers, setMinCustomers] = useState(0);
  const [maxCustomers, setMaxCustomers] = useState(0);
  const [avgCookies, setAvgCookies] = useState(0);
  const [cookieStandData, setCookieStandData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCookieStand = {
      Location: location,
      Min: parseInt(minCustomers),
      Max: parseInt(maxCustomers),
      Avg: parseFloat(avgCookies),
    };

    setCookieStandData([...cookieStandData, newCookieStand]);
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

      <Footer />

      <div className="flex justify-center items-center pt-6">
        <p className="text-center">Report table coming soon...</p>
      </div>

      <div className="flex justify-center items-center pb-6">
        <pre>
          {JSON.stringify(cookieStandData[cookieStandData.length - 1], null, 2)}
        </pre>
      </div>
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
