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

  const dataEmployees = useQuery({
    queryKey: ["employees"],
    queryFn: () => fetcher(URL),
  });

  useEffect(() => {
    if (dataEmployees.isSuccess) {
      setInitEmployees(dataEmployees.data);
      setFilteredEmployees(dataEmployees.data);
    }
  }, [dataEmployees.isSuccess, dataEmployees.data]);

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
      <Search onSearchChange={handleSearchChange} />
      {dataEmployees.isPending && <div>Carregando...</div>}
      {dataEmployees.isError && <div>Ocorreu um erro</div>}
      {dataEmployees.isSuccess && filteredEmployees.length === 0 && (
        <div>Nenhum funcionário encontrado</div>
      )}
      {isMobile ? (
        <MobileList data={filteredEmployees} />
      ) : (
        <List data={filteredEmployees} />
      )}
    </>
  );
}