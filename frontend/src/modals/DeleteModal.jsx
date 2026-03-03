import React from "react";

function DeleteModal({
  contact,
  onDelete,
  isDeleteModalOpen,
  onDeleteModalClose,
}) {
  if (!isDeleteModalOpen) return null;
  return (
    <>
      <div
        onClick={onDeleteModalClose}
        className="flex flex-col items-center justify-center w-screen h-screen fixed top-0 bg-black/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center bg-white p-4 gap-4 rounded border shadow-[4px_4px_0px_0px]"
        >
          <section className="flex flex-col items-center justify-center">
            <p>{`Are you sure you want to delete `}</p>
            <span className="text-red-500">{`${contact.first_name}?`}</span>
          </section>

          <section className="flex flex-row items-end justify-end w-full gap-2">
            <button
              onClick={() => onDelete(contact.contact_id)}
              className="px-2 border rounded shadow-[2px_2px_0px_0px]"
            >
              Delete
            </button>
            <button
              onClick={onDeleteModalClose}
              className="px-2 border rounded shadow-[2px_2px_0px_0px]"
            >
              Cancel
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
