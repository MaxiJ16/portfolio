const API_BASE_URL_PROJECTS = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=proyectos`;
const API_BASE_URL_ABOUT = `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}&content_type=aboutMe`;

export const getContenfulProjects = async () => {
  try {
    const response = await fetch(API_BASE_URL_PROJECTS);
    if (!response.ok) {
      throw new Error("Error al obtener los datos de Contentful");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error en la solicitud de datos");
  }
}

export const getContenfulAboutMe = async () => {
  try {
    const response = await fetch(API_BASE_URL_ABOUT);
    if (!response.ok) {
      throw new Error("Error al obtener los datos de Contentful");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error en la solicitud de datos");
  }
};
