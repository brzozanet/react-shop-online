// NOTE: without expand=product

// export const loaderFavourites = async () => {
//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   const [favourites, products] = await Promise.all([
//     (await fetch(`${BACKEND_URL}/favourites`)).json(),
//     (await fetch(`${BACKEND_URL}/products`)).json(),
//   ]);

//   const userFavourites = products.filter((product) =>
//     favourites.some((favourite) => favourite.productId === product.id)
//   );

//   return userFavourites;
// };

// NOTE: with expand=product

export const loaderFavourites = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  return fetch(`${BACKEND_URL}/favourites?_expand=product`);
};
