import Link from 'next/link';
// import { getEmployeelist } from '@/lib/action';
// import { formatDate } from '@/lib/utils';
// import { DeleteButton } from '@/components/delete';

//const Employee = async () => {
const Employee = async ({ query }: { query: string }) => {
  //   const employees = await getEmployeelist(query);
  return (
    <div
      className="w-screen py-20 flex justify-center flex-col items-center"
      data-theme="light"
    >
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">
          Next.js 14 CRUD Create, Read, Update and Delete <br />
          Prisma PostgreSQL | TailwindCSS DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/employee/create" className="btn btn-primary">
            Create
          </Link>
        </div>
        <table className="table table-zebra">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone Number</th>
              <th className="py-3 px-6">Created At</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-black border-b">
              <td className="py-3 px-6">1</td>
              <td className="py-3 px-6">John</td>
              <td className="py-3 px-6">john@email.com</td>
              <td className="py-3 px-6">090078601</td>
              <td className="py-3 px-6">08/05/24 </td>
              <td className="flex justify-center gap-1 py-3">
                <Link href={`/employee/edit`} className="btn btn-info">
                  Edit
                </Link>
                Delete
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
