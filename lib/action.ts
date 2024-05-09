'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

const EmployeeSchema = z.object({
  name: z.string().min(6),
  email: z.string().min(6),
  phone: z.string().min(11),
});

export const saveEmployee = async (prevState: any, formData: FormData) => {
  const validateFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      Error: validateFields.error.flatten().fieldErrors,
    };
  }
  try {
    await prisma.employee.create({
      data: {
        name: validateFields.data.name,
        email: validateFields.data.email,
        phone: validateFields.data.phone,
      },
    });
  } catch (e) {
    return { message: 'Failed to create new employee' };
  }
  revalidatePath('/employee');
  redirect('/employee');
};

interface Employee {
  id: string;
  email: string;
  name: string;
  phone: string;
  createdAt: Date;
}

export const getEmployeelist = async (query: string) => {
  try {
    const employees = await prisma.employee.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return employees;
  } catch (e) {
    return [];
  }
};

export const getEmployeeById = async (id: string) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        id: id,
      },
    });
    return employee;
  } catch (e) {
    return null;
  }
};

export const updateEployee = async (
  id: string,
  prevState: any,
  formData: FormData
) => {
  const validateFields = EmployeeSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return {
      Error: validateFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.employee.update({
      data: {
        name: validateFields.data.name,
        email: validateFields.data.email,
        phone: validateFields.data.phone,
      },
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.error(err);
    return { message: 'Failed to update Employee' };
  }
  revalidatePath('/employee');
  redirect('/employee');
};

export const deleteEmployee = async (id: string) => {
  try {
    await prisma.employee.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {
    return { message: 'Failed to delete Employee' };
  }

  revalidatePath('/employee');
};
