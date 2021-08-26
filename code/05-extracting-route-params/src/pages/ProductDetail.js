import {useParams, Link, useLocation} from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const ProductDetail = (props) => {
  const params = useParams();
  const location = useLocation();
  const query = useQuery();

  console.log(query.entries());

  return (
    <section>
      <h1>Product Detail</h1>

      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
