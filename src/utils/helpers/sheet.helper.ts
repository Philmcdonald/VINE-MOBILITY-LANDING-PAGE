interface RegisterAttributeI {
  name: string;
  email: string;
  phone: string;
}

export const postRecords = async (
  url: string,
  values: RegisterAttributeI,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
  } finally {
    setLoading(false);
  }
};

export default postRecords;
