import { ContentfulClient } from "./contentful";

export const getContenfulContent = async () => {
  try {
    const response = await ContentfulClient.getContentTypes();
    console.log(response.items);
    return response.items;
  } catch (error) {
    return error;
  }
};
