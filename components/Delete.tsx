import { deleteEmployee } from '@/lib/action';

const DeleteButton = ({ id }: { id: string }) => {
  const deleteEmployeeWithId = deleteEmployee.bind(null, id);
  return (
    <form action={deleteEmployeeWithId}>
      <button className="btn btn-error">Delete</button>
    </form>
  );
};

export default DeleteButton;
