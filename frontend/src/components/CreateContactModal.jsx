import React, { useState } from "react";

function CreateContactModal({
  isCreateContactModalOpen,
  onCreateContactModalClose,
  onAdd,
}) {
  if (!isCreateContactModalOpen) return true;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      onAdd(firstName, lastName, contactNumber, emailAddress);
    } catch (err) {
      console.error("Error creating new error:", err.message);
    }
  };

  return (
    <>
      <div
        onClick={onCreateContactModalClose}
        className="flex flex-col items-center justify-center w-screen h-screen bg-black/50 fixed top-0"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-4 rounded border shadow-[4px_4px_0px_0px] gap-8 text-sm"
        >
          <h1 className="text-xl font-bold">Create new contact</h1>
          <form
            onClick={handleSubmit}
            className="flex flex-col items-center gap-2"
          >
            <div className="flex flex-col">
              <label>First name:</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Enter first name..."
                className="border rounded px-2"
              />
            </div>
            <div className="flex flex-col">
              <label>Last name:</label>
              <input
                type="text"
                placeholder="Enter last name..."
                className="border rounded px-2"
              />
            </div>
            <div className="flex flex-col">
              <label>Contact number:</label>
              <input
                type="text"
                placeholder="Enter contact number..."
                className="border rounded px-2"
              />
            </div>
            <div className="flex flex-col">
              <label>E-mail address:</label>
              <input
                type="text"
                placeholder="Enter email address..."
                className="border rounded px-2"
              />
            </div>

            <section className="w-full justify-end flex flex-row gap-2 pt-4">
              <button
                type="submit"
                className="px-2 border rounded shadow-[2px_2px_0px_0px]"
              >
                Add
              </button>
              <button
                type="button"
                className="px-2 border rounded shadow-[2px_2px_0px_0px]"
              >
                Cancel
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateContactModal;
