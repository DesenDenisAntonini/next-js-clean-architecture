import type { GetServerSideProps, NextPage } from 'next';
import { http } from "../utils/http";
import { Product } from "../utils/models";

type HomeProps = {
  products:Product[]
}

const Home: NextPage<HomeProps> = ({products}) => {
  return (
    <div>
      <h1>Ecommerce Full Cycle</h1>
      <ul>
        {products.map((product, key) => (
        <li key={key}>
        <label>Nome:</label> {product.name} |<a href="#">Ver</a>
      </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const {data: products} = await http.get("products");

  return {
    props: {
      products,
    },
  };
};
