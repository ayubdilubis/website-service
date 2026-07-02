export async function fetchServices() {
  const response = await fetch('/api/services');

  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }

  const result = await response.json();
  return result.data;
}
