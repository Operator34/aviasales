const apiBase = 'https://aviasales-test-api.kata.academy';

async function getSearchId() {
  try {
    const res = await fetch(`${apiBase}/search`);

    if (!res.ok) {
      throw new Error('Failed to fetch search ID');
    }
    const body = await res.json();
    return body;
  } catch (error) {
    console.error('Error getSearchId:', error);
  }
}

async function getTickets(searchID) {
  try {
    const res = await fetch(`${apiBase}/tickets?searchId=${searchID}`);
    if (!res.ok) {
      throw new Error('Failed to fetch get Tickets');
    }
    const body = await res.json();
    return body;
  } catch (error) {
    console.error('Error getSearchId:', error);
  }
}

export { getSearchId, getTickets };
