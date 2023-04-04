import Card from "@/Components/Utils/Card";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import coffeeStore from "../../Components/Data/coffee-stores.json";
import { fetchCoffeeStores } from "@/Components/Lib/coffee-store";
import { FaAddressCard, FaArrowLeft } from "react-icons/fa";
import { GoLocation, GoTriangleUp } from "react-icons/go";

export async function getStaticProps(staticprops) {
  const coffeeStores = await fetchCoffeeStores();
  const params = staticprops.params;
  // console.log(coffeeStores);
  return {
    props: {
      coffeeStore: coffeeStores.find((item) => {
        return item.id.toString() === params.id;
      }),
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map((coffeestore) => ({
    params: { id: coffeestore.id.toString() },
  }));

  return { paths, fallback: true };
}

const CoffeeStore = ({ coffeeStore }) => {
  const router = useRouter();
  // console.log(router);
  const { name, address, formatted_address, imgUrl } = coffeeStore;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <section className="my-20 mx-10 ">
        <Link href="/">
          <h1 className="flex items-center">
            {" "}
            <FaArrowLeft className="text-2xl px-1 " /> back to home
          </h1>
        </Link>
        <h1 className="py-3 text-2xl font-semibold">{name}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 justify-center">
          <Image
            className="w-full h-[400px]"
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
            }
            alt={imgUrl || "coffee shop photo"}
            width={600}
            height={160}
          />

          <div className="shadow border-2 border-slate-900 px-5 w-[350px] h-[180px] py-3 rounded-md">
            <div
              className="flex items-center px-1
             "
            >
              <GoLocation className="text-2xl text-teal-300" />

              <p className="px-2">{address}</p>
            </div>
            <div
              className="flex items-center py-2 px-1
             "
            >
              <FaAddressCard className="text-3xl" />

              <p className="px-2">{formatted_address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoffeeStore;
// fsq3F7I4VP2ZyvNT6b0/zyLHluhdtLmYNuktEDyFS6CryIQ=
