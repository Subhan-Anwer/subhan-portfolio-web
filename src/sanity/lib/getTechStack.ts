import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getTechStack = async () => {
  const TECH_STACK_QUERY = defineQuery(`
            *[_type == "techStack"] | order(serialOrder asc)
        `);

  try {
    //use Sanity Fetch to send the query
    const techStack = await sanityFetch({
      query: TECH_STACK_QUERY,
    });

    //Return the tech stack or an empty array if none found
    return techStack.data || [];
  } catch (error) {
    console.log("Error fetching tech stack:", error);
    return [];
  }
};
