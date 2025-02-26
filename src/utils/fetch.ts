import { Employee } from "@/interfaces/employees";

const fetcher = (url: string): Promise<Employee[]> => {
  return fetch(url, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Resposta da rede não foi boa");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Houve um problema com sua operação de busca:", error);
      return [];
    });
};

export { fetcher };
