import { Employee } from "@/interfaces/employees";

const MobileList = ({ data }: { data: Array<Employee> }) => {
  return (
    <div>
      <h1>Mobile List</h1>
      {data.map((employee) => (
        <div key={employee.id}>
          <p> Nome: {employee.name}</p>
          <p> Cargo: {employee.position}</p>
        </div>
      ))}
    </div>
  );
};

export default MobileList;
