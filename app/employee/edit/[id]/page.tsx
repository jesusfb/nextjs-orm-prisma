import EditForm from '@/components/EditForm';
import { getEmployeeById } from '@/lib/action';
import { notFound } from 'next/navigation';

const updateEmployeePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  console.log(id);

  const employee = await getEmployeeById(id);

  if (!employee) {
    notFound();
  }

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-4xl font-bold text-center mb-10">Update Employee</h1>
      <EditForm employee={employee} />
    </div>
  );
};

export default updateEmployeePage;
