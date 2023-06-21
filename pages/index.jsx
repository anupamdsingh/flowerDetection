// // import React, { useState } from "react";
// // import axios from "axios";
// // import classNames from "classnames";
// // import Modal from "react-modal";
// // import OnlineVideo from "@/src/components/onlinevideo";

// // function FlowerDetection() {
// //   const [imageFile, setImageFile] = useState(null);
// //   const [imageUrl, setImageUrl] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [result, setResult] = useState("");
// //   const [modalIsOpen, setModalIsOpen] = useState(false);

// //   const handleImageFileChange = (event) => {
// //     setImageFile(event.target.files[0]);
// //     setImageUrl(URL.createObjectURL(event.target.files[0]));
// //   };

// //   const handleSubmit = async () => {
// //     setLoading(true);
// //     setError("");
// //     setResult("");

// //     const formData = new FormData();
// //     formData.append("image", imageFile);
// //     const response = await axios.post(
// //       "https://api.plant.id/v2/identify",
// //       formData,
// //       {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //           "Api-Key": "n9glWnRaiC9KyIVJRhoGm0CFWQWENZDbXj1gJWy1S289LEjDTN",
// //         },
// //       }
// //     );
// //     console.log(response.data.suggestions[0])
// //     setResult(response.data.suggestions[0].plant_name);
// //     setModalIsOpen(true);
// //     setLoading(false);
// //   };

// //   const closeModal = () => {
// //     setModalIsOpen(false);
// //   };

// //   return (
// // <div>

// //     <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-100">

// //       <div className="sm:mx-auto sm:w-full sm:max-w-md">
// //         <img
// //           className="mx-auto h-12 w-auto"
// //           src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
// //           alt="Workflow"
// //         />
// //         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //           Flower Detection
// //         </h2>
// //       </div>

// //       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
// //         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
// //           <div>
// //             <label
// //               htmlFor="image-file"
// //               className="block text-lg font-medium text-gray-700"
// //             >
// //               Select Image
// //             </label>
// //             <div className="mt-1 flex justify-center">
// //               <input
// //                 type="file"
// //                 name="image-file"
// //                 id="image-file"
// //                 accept="image/*"
// //                 className="shadow-sm"
// //                 onChange={handleImageFileChange}
// //               />
// //             </div>
// //           </div>

// //           {imageUrl && (
// //             <div className="mt-6">
// //               <img src={imageUrl} alt="Selected Image" className="h-64 w-full object-contain" />
// //             </div>
// //           )}

// //           <div className="mt-6">
// //             <button
// //               type="button"
// //               className={classNames(
// //                 "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
// //                 { "opacity-50 cursor-wait": loading }
// //               )}
// //               onClick={handleSubmit}
// //               disabled={!imageFile || loading}
// //             >
// //               Detect Flower
// //             </button>
// //           </div>
// //         </div>

// //         <Modal
// //         isOpen={modalIsOpen}
// //         onRequestClose={closeModal}
// //         contentLabel="Result Modal"
// //         className="modal"

// //       >
// //         <div className="relative h-screen pb-8 bg-opacity-25 flex flex-col justify-center items-center bg-gray-700">
// //           {result && (
// //             <div className="mt-6">
// //               <p className="text-lg font-medium text-gray-900">{result}</p>
// //             </div>
// //           )}

// //           {error && (
// //             <div className="mt-6">
// //               <p className="text-lg font-medium text-red-500">{error}</p>
// //             </div>
// //           )}

// //           <button
// //             className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //             onClick={closeModal}
// //           >
// //             Close
// //           </button>
// //         </div>
// //       </Modal>

// //       </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FlowerDetection;

// import React from "react";
// import ReactDOM from "react-dom";
// // import "./globals.css";

// function ProjectCard({ title, description, imageSrc, link }) {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//       <div className="md:flex">
//         <div className="md:flex-shrink-0">
//           <img
//             className="h-48 w-full object-cover md:w-48"
//             src={imageSrc}
//             alt={title}
//           />
//         </div>
//         <div className="p-8">
//           <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//             {title}
//           </div>
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
//           >
//             {description}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="bg-gray-100">
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold leading-tight text-gray-900">
//             My Portfolio
//           </h1>
//         </div>
//       </header>
//       <main>
//         <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//           <div className="px-4 py-6 sm:px-0">
//             <h2 className="text-2xl font-bold leading-tight text-gray-900">
//               Recent Work
//             </h2>
//             <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//               <ProjectCard
//                 title="Project 1"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
//                 imageSrc="https://via.placeholder.com/300x200.png?text=Project+1"
//                 link="#"
//               />
//               <ProjectCard
//                 title="Project 2"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
//                 imageSrc="https://via.placeholder.com/300x200.png?text=Project+2"
//                 link="#"
//               />
//               <ProjectCard
//                 title="Project 3"
//                 description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae."
//                 imageSrc="https://via.placeholder.com/300x200.png?text=Project+3"
//                 link="#"
//               />
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
