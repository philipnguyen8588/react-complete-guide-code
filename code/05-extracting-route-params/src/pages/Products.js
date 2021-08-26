import {Link} from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>A Book</li>
        <li>A Carpet</li>
        <li>An Online Course</li>
        <Link to='/products/32323'>
          Welcome
        </Link>
      </ul>
    </section>
  );
};

export default Products;
