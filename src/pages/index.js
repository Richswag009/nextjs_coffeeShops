// const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

import Banner from "@/Components/Banner";
import Coffee from "@/Components/Coffee/coffee";
import { fetchCoffeeStores } from "@/Components/Lib/coffee-store";
import useLocation from "@/Components/hooks/use-location";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const coffeeStore = await fetchCoffeeStores();
  return {
    props: {
      coffeeStore,
    },
  };
}

export default function Home(props) {
  const [allCoffeestores, setAllCoffeeStores] = useState([]);
  const { handleTrackLocation, latLong, locationErrorMsg, loading } =
    useLocation();

  // handle function to get user Location
  const buttonClickHandler = () => {
    handleTrackLocation();
    console.log(latLong);
  };

  // const fetchCoffeeStoresNearYou = async () => {
  //   const coffeeStore = await fetchCoffeeStores(latLong);
  //   console.log(coffeeStore);
  //   return {
  //     props: {
  //       coffeeStore,
  //     },
  //   };
  // };

  useEffect(() => {
    if (latLong) {
      try {
        const fetchCoffeeStoresNearYou = async () => {
          const coffeeStoreNearYou = await fetchCoffeeStores(latLong);
          console.log(coffeeStoreNearYou);
          setAllCoffeeStores(coffeeStoreNearYou);
          return {
            props: {
              coffeeStoreNearYou,
            },
          };
        };
        fetchCoffeeStoresNearYou();
      } catch (error) {
        setError;
      }
    }
  }, [latLong]);
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

        <Coffee coffeeStores={allCoffeestores} />
        <Coffee coffeeStores={props.coffeeStore} />
      </main>
    </>
  );
}
