import { gql } from 'apollo-server-micro';
export const typeDefs = gql`
    type Employee {
        id: string;
        name: string;
        email: string;
        phone: string;
    }

    type Query {
        employees: [Employee]!
    }
`;
