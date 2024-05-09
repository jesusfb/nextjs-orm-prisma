'use client';

import type { employee } from '@prisma/client';
import { useFormState } from 'react-dom';
import { updateEployee } from '@/lib/action';

const EditForm = ({ employee }: { employee: employee }) => {
  const updateEmployeeWithId = updateEployee.bind(null, employee.id);
  const [state, formAction] = useFormState(updateEmployeeWithId, null);
  return (
    <form action={formAction}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900"
        >
          Full Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          className="input input-bordered input-primary w-full"
          defaultValue={employee.name}
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="input input-bordered input-primary w-full"
          defaultValue={employee.email}
        />
        <div id="email-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-900"
        >
          Phone
        </label>
        <input
          name="phone"
          type="text"
          id="phone"
          className="input input-bordered input-primary w-full"
          defaultValue={employee.phone}
        />
        <div id="phone-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
        </div>
      </div>
      <button className="btn btn-primary">Save</button>
    </form>
  );
};

export default EditForm;
