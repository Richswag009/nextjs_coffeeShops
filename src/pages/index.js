// const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

import Banner from "@/Components/Banner";
import Coffee from "@/Components/Coffee/coffee";
import { fetchCoffeeStores } from "@/Components/Lib/coffee-store";
import useLocation from "@/Components/hooks/use-location";
import { useContext, useEffect, useState } from "react";
import { ACTION_TYPES, storeContext } from "@/stores/stores";

export async function getStaticProps() {
  const coffeeStore = await fetchCoffeeStores();
  return {
    props: {
      coffeeStore,
    },
  };
}

export default function Home(props) {
  const [allCoffeestoresName, setAllCoffeeStoresName] = useState(false);
  const { handleTrackLocation, locationErrorMsg, loading } = useLocation();
  const { dispatch, state } = useContext(storeContext);
  const { coffeeStores, latLong } = state;

  // handle function to get user Location
  const buttonClickHandler = () => {
    handleTrackLocation();
    console.log(latLong);
  };

  useEffect(() => {
    if (latLong) {
      try {
        const fetchCoffeeStoresNearYou = async () => {
          const coffeeStoreNearYou = await fetchCoffeeStores(latLong);
          console.log(coffeeStoreNearYou);
          dispatch({
            type: ACTION_TYPES.SET_COFFEE_STORES,
            payload: {
              coffeeStores: coffeeStoreNearYou,
            },
          });
          setAllCoffeeStoresName(true);
        };
        fetchCoffeeStoresNearYou();
      } catch (error) {
        setError;
      }
    }
  }, [latLong, dispatch]);
  return (
    <>
      <Head>
        <title> Coffee Connoisseur</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <main className="max-w[72rem] mt-10  p-2 lg:p-8">
        <Banner
          buttonText={loading ? "Loading..." : "View stores Nearby"}
          onButtonClick={buttonClickHandler}
        />
        {locationErrorMsg && <p>something Went wrong:{locationErrorMsg}</p>}

        <Coffee
          coffeeStores={coffeeStores}
          coffeeStoreHeading={allCoffeestoresName}
        />
        <Coffee coffeeStores={props.coffeeStore} />
      </main>
    </>
  );
}
