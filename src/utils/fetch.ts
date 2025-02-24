import { Employee } from "@/interfaces/employees";

const fetcher = (url: string): Promise<Employee[]> => {
  return fetch(url).then((res) => res.json());
};

export { fetcher };
