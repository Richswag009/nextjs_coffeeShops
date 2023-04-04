import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../Utils/Card";

const CoffeeItem = (props) => {
  return (
    <Link href={props.href}>
      <Card>
        <h2 className="py-2 text-xl text-center ">{props.name}</h2>
        <Image
          className="my-2 w-full h-[200px] rounded-md"
          src={props.imgUrl}
          width={360}
          height={100}
          alt="coffee img"
          priority={true}
        />
      </Card>
    </Link>
  );
};

export default CoffeeItem;
