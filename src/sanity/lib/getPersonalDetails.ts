import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getPersonalDetails = async () => {
  const PERSONAL_DETAILS_QUERY = defineQuery(`
            *[_type == "personalDetails"][0]
        `);

  try {
    //use Sanity Fetch to send the query
    const personalDetails = await sanityFetch({
      query: PERSONAL_DETAILS_QUERY,
    });

    //Return the list of personal details or an empty array if none found
    return personalDetails.data || [];
  } catch (error) {
    console.log("Error fetching personal details:", error);
    return [];
  }
};
