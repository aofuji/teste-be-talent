"use client";

import { Employee } from "@/interfaces/employees";

const List = ({ data }: { data: Array<Employee> }) => {
  return (
    <div>
      <h1>List</h1>
      {data.map((employee) => (
        <div key={employee.id}>
          <p> Nome: {employee.name}</p>
          <p> Cargo: {employee.position}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
