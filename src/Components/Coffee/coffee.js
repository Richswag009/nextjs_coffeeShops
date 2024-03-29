import React from "react";
import CoffeeItem from "./coffee-item";

const coffee = ({ coffeeStores, coffeeStoreHeading }) => {
  return (
    <div className="w-full mx-10 mt-10 md:mt-20">
      {coffeeStores.length > 0 ? (
        <h2 className="text-3xl font-semibold leading-9">
          {coffeeStoreHeading ? "Stores Near You" : "Toronto Stores"}
        </h2>
      ) : (
        ""
      )}
      <div className="  grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 justify-center ">
        {coffeeStores.map((item) => {
          return (
            <CoffeeItem
              key={item.id}
              alt={item.name}
              name={item.name}
              href={`/coffee-store/${item.id}`}
              imgUrl={
                item.imgUrl ||
                "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default coffee;
