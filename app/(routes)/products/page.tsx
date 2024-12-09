import React from "react";

interface ProductsPageProps {
  params: {};
  searchParams: {
    query: string;
  };
}

function ProductsPage({ searchParams }: ProductsPageProps) {
  return <div>{searchParams.query} Products Page</div>;
}

export default ProductsPage;
