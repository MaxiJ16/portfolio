import useSWRImmutable from "swr/immutable";
import { getContenfulContent } from "../lib/api";
import { useState } from "react";

interface Asset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
    };
  };
}

interface Item {
  fields: {
    title: string;
    description: string;
    image: {
      sys: {
        id: string;
      };
    };
    codeUrl: string;
    demoUrl: string;
  };
}

export const useGetData = () => {
  const { data, error } = useSWRImmutable("/api", getContenfulContent);
  //  operador de coalescencia nula (??) para devolver data si está definido, o error si no lo está.
  return data ?? error;
};

export const useGetProjects = () => {
  const data = useGetData();

  //El método reduce nos permite iterar sobre cada elemento de includes.Asset y acumular un valor en acc.
  const images: Record<string, string> | undefined =
    data?.includes.Asset.reduce((acc: Record<string, string>, asset: Asset) => {
      // acc[asset.sys.id] = asset.fields.file.url;: En cada iteración, estamos asignando la URL del archivo (asset.fields.file.url) al objeto acc utilizando el ID del activo (asset.sys.id) como clave. Esto nos permite crear un objeto que mapea los IDs de los activos a sus respectivas URLs.
      acc[asset.sys.id] = asset.fields.file.url;
      return acc;
    }, {});

  const fieldsCollection:
    | {
        title: string;
        description: string;
        image: string;
        codeUrl: string;
        demoUrl: string;
        id: string;
      }[]
    | undefined = data?.items.map((item: Item) => {
    // Obtenemos el id de las imagenes en cada iteración.
    const imageId = item.fields.image.sys.id;
    // Utilizamos el ID del activo de la imagen como clave para obtener la URL correspondiente del objeto images que creamos anteriormente. Esto nos permite obtener la URL de la imagen asociada a cada elemento de items.
    const imageUrl = images?.[imageId];
    return {
      title: item.fields.title,
      description: item.fields.description,
      image: "https:" + imageUrl,
      codeUrl: item.fields.codeUrl,
      demoUrl: item.fields.demoUrl,
      id: imageId,
    };
  });

  return fieldsCollection;
};




export const useThemeMode = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggleTheme] as const;
};
