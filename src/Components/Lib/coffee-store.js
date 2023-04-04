import { createApi } from "unsplash-js";

const getCoffeeShopsPhoto = async () => {
  const unsplashPhoto = await unsplash.search.getPhotos({
    query: "coffee shop",
    page: 1,
    perPage: 30,
  });
  return unsplashPhoto.response.results.map((result) => result.urls["small"]);
};

// to get url for coffeestores
const getUrlForCoffeeStores = (latlong, query) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}`;
};

export const fetchCoffeeStores = async (
  latLong = "43.82430517092769,-79.77862219795445"
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  };

  const photos = await getCoffeeShopsPhoto();
  const response = await fetch(
    getUrlForCoffeeStores(
      // "43.82430517092769,-79.77862219795445",
      latLong,
      "coffee Stores"
    ),
    options
  );

  const data = await response.json();
  return data.results.map((result, i) => {
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address,
      formatted_address: result.location.formatted_address,
      imgUrl: photos.length > 0 ? photos[i] : null,
    };
  });
};

// unSplash api
export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_API_KEY,
});
