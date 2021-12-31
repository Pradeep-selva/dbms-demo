export const BASE_API = "http://localhost:8080";
export const API_SUCCESS = 200;

export const ApiEndpoints = {
  employee: () => `${BASE_API}/employee`,
  singleEmployee: (ssn: string) => `${BASE_API}/employee/${ssn}`
};
