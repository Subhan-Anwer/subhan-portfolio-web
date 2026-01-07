import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

export const getServices = async () => {
  const SERVICES_QUERY = defineQuery(`
            *[_type == "services"] | order(serialOrder asc)
        `);

  try {
    //use Sanity Fetch to send the query
    const services = await sanityFetch({
      query: SERVICES_QUERY,
    });

    //Return the services or an empty array if none found
    return services.data || [];
  } catch (error) {
    console.log("Error fetching services:", error);
    return [];
  }
};
