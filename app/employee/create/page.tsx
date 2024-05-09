'use client';

import { useFormState } from 'react-dom';
import { saveEmployee } from '@/lib/action';

const CreateEmplyeePage = () => {
  const [state, formAction] = useFormState(saveEmployee, null);

  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-center text-4xl font-bold mb-10">Add New Employee</h1>
      <div>
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
            />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
            </div>
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmplyeePage;
