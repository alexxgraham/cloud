export async function fetchData(endpoint: string) {
  const response = await fetch(`https://destingraham.tech/${endpoint}`);
  return response.json();
}
