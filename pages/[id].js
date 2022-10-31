import React from "react";
import { useRouter } from "next/router";
import Head from 'next/head'
const CoffeeStorePageById = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.id}</title>
      </Head>
      <div>The id of this store is {router.query.id}</div>
    </>
  );
};


export default CoffeeStorePageById
