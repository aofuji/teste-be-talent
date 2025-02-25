"use client";

import { useState } from "react";
import { Employee } from "@/interfaces/employees";
import Image from "next/image";
import React from "react";
import formatDate from "@/utils/formatDate";
import formatPhone from "@/utils/formatPhone";

const MobileList = ({ data }: { data: Array<Employee> }) => {
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>({});

  const handleRowClick = (index: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="pr-5 pl-5">
      <table className="w-full">
        <thead>
          <tr className="bg-blue_primary text-white uppercase">
            <th className="pl-6 p-2 text-left rounded-tl-xl">foto</th>
            <th className="p-2 text-left">nome</th>
            <th className="p-2 text-center rounded-tr-xl">
              <span className="inline-block h-2 w-2 bg-white rounded-full"></span>
            </th>
          </tr>
        </thead>
        <tbody className="border bg-white">
          {data.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center p-2">
                Nenhum funcionário encontrado.
              </td>
            </tr>
          ) : (
            data.map((employee, index) => (
              <React.Fragment key={index}>
                <tr
                  className={`border-b border-gray_10 cursor-pointer ${expandedRows[index] ? 'border-b-0' : ''}`}
                  onClick={() => handleRowClick(index)}
                >
                  <td className="pl-6 p-2">
                    <Image
                      src={employee.urlImg}
                      alt={employee.name}
                      width={40}
                      height={40}
                      className="rounded-full h-10 object-cover"
                    />
                  </td>
                  <td className="p-2">{employee.name}</td>
                  <td className="p-2 flex justify-center items-center">
                    <Image
                      src={expandedRows[index] ? "/img/chevron-up.png" : "/img/chevron-down.png"}
                      alt="Chevron"
                      width={32}
                      height={32}
                    />
                  </td>
                </tr>
                {expandedRows[index] && (
                  <tr className="border-b border-gray_10">
                    <td colSpan={3} className="p-2">
                      <div className="p-2 bg-white">
                        <p className="flex justify-between border-b-2 border-dotted border-gray_10 "><strong>Cargo</strong> {employee.position}</p>
                        <p className="flex justify-between border-b-2 border-dotted border-gray_10"><strong>Data de Admissão</strong> {formatDate(employee.admissionDate)}</p>
                        <p className="flex justify-between border-b-2 border-dotted border-gray_10"><strong>Telefone</strong> {formatPhone(employee.phone)}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MobileList;