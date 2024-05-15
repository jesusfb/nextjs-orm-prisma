import { extendType, objectType } from 'nexus';

export const Employees = objectType({
  name: 'employees',
  definition(t) {
    t.string('id');
    t.string('name');
    t.string('email');
    t.string('phone');
  },
});

export const EmployeesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('employees', { type: 'employee', resolve(parent, _args, ctx) {
        return ctx.prisma.employee.findMany()
    } });
  },
});
