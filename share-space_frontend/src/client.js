import { createClient } from "@sanity/client";
import imageBuilderURL from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-07",
  useCdn: true,
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
});

const builder = imageBuilderURL(client);

export const urlFor = (source) => {
  builder.image(source);
};
