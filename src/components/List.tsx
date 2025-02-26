"use client";

import { Employee } from "@/interfaces/employees";
import formatDate from "@/utils/formatDate";
import formatPhone from "@/utils/formatPhone";
import Image from "next/image";

const List = ({ data }: { data: Array<Employee>}) => {
  return (
    <div className="pr-5 pl-5">
      <table className="min-w-full">
        <thead>
          <tr className="bg-blue_primary text-white uppercase">
            <th className="pl-6 p-2 text-left rounded-tl-xl">foto</th>
            <th className="p-2 text-left">nome</th>
            <th className="p-2 text-left">cargo</th>
            <th className="p-2 text-left">data de admissão</th>
            <th className="p-2 text-left rounded-tr-xl">telefone</th>
          </tr>
        </thead>
        <tbody className="border bg-white">
          { data.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-2">Nenhum funcionário encontrado.</td>
            </tr>
          ) : (
            data.map((employee, index) => (
              <tr key={index} className="border-b border-gray_10">
                <td className="pl-6 p-2">
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    width={40}
                    height={40}
                    className="rounded-full h-10 object-cover"
                  />
                </td>
                <td className="p-2">{employee.name}</td>
                <td className="p-2">{employee.job}</td>
                <td className="p-2">{formatDate(employee.admission_date)}</td>
                <td className="p-2">{formatPhone(employee.phone)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;