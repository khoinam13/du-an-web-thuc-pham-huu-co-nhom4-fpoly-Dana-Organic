import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Products({ searchQuery }) {
  const { categoryId } = useParams();
  const products = [
    {
      id: 1,
      name: "Cà rốt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftGAQnVj13MX03LZo4yv3vFFimI_nBDBiiA&usqp=CAU",
      price: 15990,
      description: "Cà rốt rất tốt cho sức khỏe",
      quantity: "10",
      idc: 1,
    },
    {
      id: 2,
      name: "Su hào",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_S9VFO3nqpsP0F6BCmNES5kgqemIPU7Ebw&usqp=CAU",
      price: 15990,
      description: "Su hào rất tốt cho sức khỏe",
      quantity: "10",
      idc: 2,
    },
  ];

  let filteredProducts = products;
  if (categoryId) {
    filteredProducts = filteredProducts.filter(product => product.idc === parseInt(categoryId));
  }
  if (searchQuery && searchQuery.trim() !== '') {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {filteredProducts.map(product => (
            <div className="card" style={{ width: '18rem' }} key={product.id}>
              <center>
                <img src={product.image} height={'247px'} width={'247px'} alt={product.name} />
              </center>
              <div className="card-body">
                <center>
                  <p><strong>
                    <Link
                      to={`/detail-product/${product.id}`}
                      className="card-title cardtitle"
                      style={{ color: "#83bb3e" }}
                    >
                      {product.name}
                    </Link>
                  </strong></p>
                  <p><del className="carddel">400,000đ</del></p>
                  <p className="carddel" style={{ fontWeight: 'bold' }}>{product.price}đ</p>
                </center>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
