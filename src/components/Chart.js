// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import axios from "axios";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const options = {
//   indexAxis: "y",
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "right",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Horizontal Bar Chart",
//     },
//   },
// };
// const Chart = () => {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     const fetchData = async () => {
//       const url = "http://localhost:5000/datas";
//       let empSal = [];
//       let empAge = [];
//       await fetch(url)
//         .then((data) => {
//           console.log("Api data", data);
//           const res = data.json();
//           return res;
//         })
//         .then((res) => {
//           console.log("ressss", res);
//           for (const val of res) {
//             empSal.push(val.employee_salary);
//             empAge.push(val.employee_age);
//             // labelSet.push(val.name)
//           }
//           setData({
//             labels: [
//               "Sunday",
//               "Monday",
//               "Tuesday",
//               "Wednesday",
//               "Thursday",
//               "Friday",
//               "Saturday",
//             ],
//             datasets: [
//               {
//                 label: "Dataset ID",
//                 data: empSal,
//                 borderColor: "rgb(255, 99, 132)",
//                 backgroundColor: "rgba(99, 132, 0.5)",
//               },
//               {
//                 label: "Dataset ID2",
//                 data: empAge,
//                 borderColor: "rgb(53, 162, 235)",
//                 backgroundColor: "rgba(53, 235, 0.5)",
//               },
//             ],
//           });
//           console.log("arrData", empSal, empAge);
//         })
//         .catch((e) => {
//           console.log("error", e);
//         });
//     };

//     fetchData();
//   }, []);
//   return (
//     <div style={{ width: "50%", height: "20%", margin: "0 auto" }}>
//       <Bar data={data} />
//     </div>
//   );
// };

// export default Chart;
