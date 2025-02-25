"use client";

import { useState, useEffect } from "react";
import List from "@/components/List";
import MobileList from "@/components/MobileList";
import Search from "./Search";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/utils/fetch";
import { Employee } from "@/interfaces/employees";

export default function Main() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [initEmployees, setInitEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const URL = process.env.NEXT_PUBLIC_BASE_URL! + "/employees";

  const queryEmployees = useQuery({
    queryKey: ["employees"],
    queryFn: () => fetcher(URL),
  });

  useEffect(() => {
    if (queryEmployees.isSuccess) {
      setInitEmployees(queryEmployees.data);
      setFilteredEmployees(queryEmployees.data);
    }
  }, [queryEmployees.isSuccess, queryEmployees.data]);

  const handleSearchChange = (newSearch: string) => {
    const filtered = initEmployees?.filter((employee) => {
      const searchLower = newSearch.toLowerCase();
      return (
        employee.name.toLowerCase().includes(searchLower) ||
        employee.position.toLowerCase().includes(searchLower) ||
        employee.phone.toLowerCase().includes(searchLower)
      );
    });

    setFilteredEmployees(filtered.length > 0 ? filtered : []);
  };

  return (
    <>
      <div className="flex justify-between items-center p-8">
        <h1>Funcionários</h1>
        <Search onSearchChange={handleSearchChange} />
      </div>

      {isMobile ? (
        <MobileList data={filteredEmployees} />
      ) : (
        <List isPeding={queryEmployees.isPending} isError={queryEmployees.isError} data={filteredEmployees} />
      )}
    </>
  );
}
