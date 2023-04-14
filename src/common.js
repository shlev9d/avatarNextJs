export const apiUrl = 'https://tinyfac.es/api/data';

export const getAvatars = async() => {
  const response = await fetch(`${apiUrl}?limit=5`)
	const data = await response.json()
	return data
} 