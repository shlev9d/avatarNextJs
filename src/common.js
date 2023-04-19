export const apiUrl = 'https://tinyfac.es/api/data';

export const getAvatars = async (count = 1) => {
  try {
    const response = await fetch(`${apiUrl}?limit=${count}`);
    if (response.status === 429) {
      return alert('Too much requests. Wait!');
    }
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
