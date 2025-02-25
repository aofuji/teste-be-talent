"use client";

import { useState, useEffect, Suspense } from "react";
import Search from "./Search";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetcher } from "@/utils/fetch";
import { Employee } from "@/interfaces/employees";
import dynamic from "next/dynamic";
import SkeletonTable from "./SkeletonTable";
// lazy loading
const List = dynamic(() => import("../components/List"), { ssr: false });
const MobileList = dynamic(() => import("../components/MobileList"), {
  ssr: false,
});

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

  const queryEmployees = useSuspenseQuery({
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
      <div className={`flex  p-5 mb-3 mt-2 ${isMobile ?'flex-col justify-start items-start' :'justify-between items-center'} `}>
        <h1 className={`${isMobile && 'mb-4'}`}>Funcionários</h1>
        <div className={`${isMobile ? 'relative w-full' : 'relative w-64'}`}>
          <Search onSearchChange={handleSearchChange} />
        </div>
        
      </div>

      {isMobile ? (
        <Suspense fallback={<SkeletonTable />}>
          <MobileList data={filteredEmployees} />
        </Suspense>
      ) : (
        <Suspense fallback={<SkeletonTable />}>
          <List data={filteredEmployees} />
        </Suspense>
      )}
    </>
  );
}
