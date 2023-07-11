// import contentful from "contentful";

// const contentfulClient = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_TOKEN,
// });

// const contentful = require("contentful");

// const contentfulClient = contentful.createClient({
//   accessToken: process.env.CONTENTFUL_TOKEN,
//   space: process.env.CONTENTFUL_SPACE_ID,
// });

// export { contentfulClient };

import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});


export const contentfulData = async () => {
  const response = await client.getContentTypes();
  console.log(response.items);
};
