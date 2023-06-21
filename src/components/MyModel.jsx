import React from "react";

function MyModal(){
    return(
        <div 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Result Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="flex flex-col justify-center items-center bg-black">
          {result && (
            <div className="mt-6">
              <p className="text-lg font-medium text-gray-900">{result}</p>
            </div>
          )}

          {error && (
            <div className="mt-6">
              <p className="text-lg font-medium text-red-500">{error}</p>
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
    )
}
export default MyModal;