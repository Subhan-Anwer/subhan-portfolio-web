import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getCodeStats = async () => {
  const CODE_STATS_QUERY = defineQuery(`
            *[_type == "codeStats"] | order(serialOrder asc)
        `);

  try {
    //use Sanity Fetch to send the query
    const codeStats = await sanityFetch({
      query: CODE_STATS_QUERY,
    });

    //Return the list of properties or an empty array if none found
    return codeStats.data || [];
  } catch (error) {
    console.log("Error fetching code stats:", error);
    return [];
  }
};
