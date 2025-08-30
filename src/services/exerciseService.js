const API_BASE = "https://wger.de/api/v2/exercise/?language=2&limit=50";

// Fetch exercises with optional search
export async function fetchExercises(limit = 50, search = "") {
  try {
    let url = `${API_BASE}&limit=${limit}`;
    if (search) url += `&name=${encodeURIComponent(search)}`;

    const res = await fetch(url);
    const data = await res.json();
    // Filter out exercises without description
    return data.results.filter(ex => ex.description && ex.name);
  } catch (err) {
    console.error("Error fetching exercises:", err);
    return [];
  }
}

// Fetch exercise details by ID
export async function fetchExerciseDetails(id) {
  try {
    const res = await fetch(`https://wger.de/api/v2/exerciseinfo/${id}/`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching exercise details:", err);
    return [];
  }
}
