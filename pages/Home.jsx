import React, { useRef, useState } from "react";
import classNames from "classnames";
import axios from "axios";
import Modal from "react-modal";
// import bg from "../public/bg.mp4";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [resultActive, setResultActive] = useState(false);

  const btnRef = useRef("");

  const handleImageFileChange = (event) => {
    setImageFile(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };
  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult("");
    setResultActive(true);

    const formData = new FormData();
    formData.append("image", imageFile);
    const response = await axios.post(
      "https://api.plant.id/v2/identify",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Api-Key": "n9glWnRaiC9KyIVJRhoGm0CFWQWENZDbXj1gJWy1S289LEjDTN",
        },
      }
    );
    console.log(response.data.suggestions[0]);
    setResult(response.data.suggestions[0].plant_name);
    setModalIsOpen(true);
    setLoading(false);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col py-12 sm:px-6 lg:px-8 relative bg-gray-200">
      {/* <video autoPlay muted loop className="">
        <source
          src="/home/anupamsingh/Documents/flower/public/ink_-_67358(1080p).mp4"
          type="video/quicktime"
        />
      </video> */}
      <div className="mt-6 flex items-center justify-center relative z-10">
        <button
          type="button"
          className="w-1/4 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={setModalIsOpen}
        >
          Detect Flower
        </button>
        {/* </div> */}
        {/* </div> */}
        <Modal
          isOpen={modalIsOpen}
          // onRequestClose={closeModal}
          contentLabel="Result Modal"
          className="modal"
        >
          <div className="flex justify-center items-center h-screen">
            <div className=" w-1/3 flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-100 opacity-60">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                  className="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Flower Detection
                </h2>
              </div>

              <div className="mt-8 w-full h-full flex justify-center">
                <div className="bg-white w-4/5 py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
                  <div>
                    <label
                      htmlFor="image-file"
                      className="block text-lg font-medium text-gray-700"
                    >
                      Select Image
                    </label>
                    <div className="mt-1 flex justify-center">
                      <input
                        type="file"
                        name="image-file"
                        id="image-file"
                        accept="image/*"
                        className="shadow-sm"
                        onChange={handleImageFileChange}
                      />
                    </div>
                  </div>

                  {imageUrl && (
                    <div className="mt-6">
                      <img
                        src={imageUrl}
                        alt="Selected Image"
                        className="h-64 w-full object-contain"
                      />
                    </div>
                  )}

                  <div className="mt-6 flex flex-col items-center">
                    <button
                      type="button"
                      className={classNames(
                        "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
                          (resultActive ? "hidden" : ""),
                        { "opacity-50 cursor-wait": loading }
                      )}
                      onClick={handleSubmit}
                      disabled={!imageFile || loading}
                      ref={btnRef}
                    >
                      Detect Flower
                    </button>
                    {result && (
                      <div className="mt-6">
                        <p className="text-lg font-medium text-gray-900">
                          {result}
                        </p>
                      </div>
                    )}

                    {error && (
                      <div className="mt-6">
                        <p className="text-lg font-medium text-red-500">
                          {error}
                        </p>
                      </div>
                    )}

                    <button
                      className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* <div className="relative pb-8 bg-opacity-25 flex flex-col justify-center items-center bg-gray-700"> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Home;
