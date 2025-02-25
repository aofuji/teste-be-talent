import React from "react";

const SkeletonTable = ({isMobile}:{isMobile:boolean}) => {
  if (isMobile) {
    return (
      <div className="pr-5 pl-5">
        <table className="min-w-full">
          <thead className="rounded-t-xl">
            <tr className="bg-gray-300">
              <th className="pl-6 p-2 text-left rounded-tl-xl">foto</th>
              <th className="p-2 text-left">nome</th>
              <th className="p-2 text-left rounded-tr-xl">detalhes</th>
            </tr>
          </thead>
          <tbody className="border bg-white">
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="pl-6 p-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </td>
                <td className="p-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </td>
                <td className="p-2">
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="pr-5 pl-5">
      <table className="min-w-full">
        <thead className="rounded-t-xl">
          <tr className="bg-gray-300">
            <th className="pl-6 p-2 text-left rounded-tl-xl">foto</th>
            <th className="p-2 text-left">nome</th>
            <th className="p-2 text-left">cargo</th>
            <th className="p-2 text-left">data de admissão</th>
            <th className="p-2 text-left rounded-tr-xl">telefone</th>
          </tr>
        </thead>
        <tbody className="border bg-white">
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="pl-6 p-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              </td>
              <td className="p-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </td>
              <td className="p-2">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </td>
              <td className="p-2">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </td>
              <td className="p-2">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
