export const mockSuggestions = [
  { text: "курица" },
  { text: "говядина" },
  { text: "рыба" },
  { text: "салат" },
];

export const mockSearchApi = {
  async getSuggestions(query) {
    await new Promise((resolve) => setTimeout(resolve, 200));

    return mockSuggestions.filter((item) =>
      item.text.toLowerCase().includes(query.toLowerCase())
    );
  },

  async getSearchResults(query) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      query,
      results: [`results 1 for ${query}`],
    };
  },
};
