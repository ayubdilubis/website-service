export async function fetchServices() {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const response = await fetch(`${apiUrl}/services`);

  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }

  const result = await response.json();
  return result.data;
}
