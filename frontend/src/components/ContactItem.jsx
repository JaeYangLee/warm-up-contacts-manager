import { BsFillPersonFill } from "react-icons/bs";
import DeleteModal from "../modals/DeleteModal";
import { useState } from "react";
import EditModal from "../modals/EditModal";

function ContactItem({ contact, onUpdate, onDelete }) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  return (
    <>
      <li className="flex flex-row items-center justify-between px-2 text-sm gap-2 py-2 border-b border-t">
        <section className="flex flex-row items-center justify-center">
          <BsFillPersonFill className="size-12 border rounded-full p-1" />
        </section>
        <section className="w-full flex flex-col">
          <p>{`${contact.first_name} ${contact.last_name}`}</p>
          <p>{contact.contact_number}</p>
          <p>{contact.email_address}</p>
        </section>
        <section className="flex flex-col gap-2">
          <button
            onClick={() => setEditModalOpen(true)}
            className="border rounded px-2 shadow-[2px_2px_0px_0px]"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteModalOpen(true)}
            className="border rounded px-2 shadow-[2px_2px_0px_0px]"
          >
            Delete
          </button>
        </section>
      </li>

      <DeleteModal
        key={contact.contact_id}
        contact={contact}
        onDelete={onDelete}
        isDeleteModalOpen={isDeleteModalOpen}
        onDeleteModalClose={() => setDeleteModalOpen(false)}
      />

      <EditModal
        value={contact}
        contact={contact}
        isEditModalOpen={isEditModalOpen}
        onEditModalClose={() => setEditModalOpen(false)}
      />
    </>
  );
}

export default ContactItem;
