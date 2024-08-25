import React, { useState } from "react";
import Modal from "react-modal";

const ProjectCard = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="transition ease-in-out delay-150 cursor-pointer bg-white shadow-md  overflow-hidden hover:-translate-y-1 hover:scale-110"
      >
        <div className="bg-white shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-6">
            <h2 className="text-white text-2xl font-bold my-5">
              {project.title}
            </h2>
            <p className="text-blue-200 mt-2 overflow-hidden text-ellipsis">
              {project.subtitle}
            </p>
            <div className="mt-4 flex justify-between items-center text-yellow-400">
              <div>
                <span className="block text-sm font-medium">Client</span>
                <span className="block text-sm font-semibold text-white">
                  {project.clients}
                </span>
              </div>
              <div>
                <span className="block text-sm font-medium">Time Duration</span>
                <span className="block text-sm font-semibold text-white">
                  {project.start_date} - {project.end_date}
                </span>
              </div>
            </div>
          </div>
          <img
            src={project.photo}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full max-h-screen overflow-y-auto">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          <img
            src={project.photo || "/default-image-path.jpg"}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="mt-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-gray-700 mt-4">{project.description}</p>
            <p className="text-gray-700 mt-4">
              <span className="font-bold">Client:</span> {project.clients}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Time Duration:</span>{" "}
              {project.start_date} - {project.end_date}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-bold">Focus Area:</span>{" "}
              {project.focus_area || "N/A"}
            </p>
            <p className="text-gray-700 mt-4">
              {project.long_description ||
                "Detailed description not available."}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
