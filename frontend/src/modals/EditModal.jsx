function EditModal({ contact, onUpdate, isEditModalOpen, onEditModalClose }) {
  if (!isEditModalOpen) return null;

  const handleSubmit = () => {
    try {
    } catch (error) {}
  };
  return (
    <>
      <div
        onClick={onEditModalClose}
        className="w-screen h-screen bg-black/50 flex flex-col items-center justify-center fixed top-0"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-4 rounded border shadow-[4px_4px_0px_0px] "
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <section className="flex flex-col items-center justify-center gap-2">
              <div className="w-full flex flex-col">
                <label>Edit first name:</label>
                <input
                  type="text"
                  placeholder={contact.first_name}
                  className="px-2 border rounded"
                />
              </div>
              <div className="w-full flex flex-col">
                <label>Edit last name:</label>
                <input
                  type="text"
                  placeholder={contact.last_name}
                  className="px-2 border rounded"
                />
              </div>
              <div className="w-full flex flex-col">
                <label>Edit contact number:</label>
                <input
                  type="text"
                  placeholder={contact.contact_number}
                  className="px-2 border rounded"
                />
              </div>
              <div className="w-full flex flex-col">
                <label>Edit email address:</label>
                <input
                  type="text"
                  placeholder={contact.email_address}
                  className="px-2 border rounded"
                />
              </div>
            </section>

            <section className="flex w-full flex-row items-end justify-end gap-2">
              <button className="px-2 border rounded shadow-[2px_2px_0px_0px]">
                Update
              </button>
              <button
                type="button"
                onClick={onEditModalClose}
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

export default EditModal;
