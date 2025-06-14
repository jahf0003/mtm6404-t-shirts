const tshirts = [{
        title: 'Blue T-Shirt',
        image: 'blue-t-shirt.jpg',
        price: 7.99,
        stock: 4,
        quantity: 1
    },
    {
        title: 'Bright Purple T-Shirt',
        image: 'bright-purple-t-shirt.jpg',
        price: 5.99,
        stock: 1,
        quantity: 1
    },
    {
        title: 'Cobalt Blue T-Shirt',
        image: 'cobalt-blue-t-shirt.jpg',
        price: 9.99,
        stock: 5,
        quantity: 1
    },
    {
        title: 'Green T-Shirt',
        image: 'green-t-shirt.jpg',
        price: 6.99,
        stock: 0,
        quantity: 1
    },
    {
        title: 'Grey T-Shirt',
        image: 'blue-t-shirt.jpg',
        price: 4.99,
        stock: 2,
        quantity: 1
    },
    {
        title: 'Light Green T-Shirt',
        image: 'light-green-t-shirt.jpg',
        price: 7.99,
        stock: 4,
        quantity: 1
    },
    {
        title: 'Purple T-Shirt',
        image: 'purple-t-shirt.jpg',
        price: 7.99,
        stock: 0,
        quantity: 1
    },
    {
        title: 'Red T-Shirt',
        image: 'red-t-shirt.jpg',
        price: 6.99,
        stock: 3,
        quantity: 1
    },
    {
        title: 'Teal T-Shirt',
        image: 'teal-t-shirt.jpg',
        price: 7.99,
        stock: 2,
        quantity: 1
    }
]

function TShirt({
    tshirt
}) {
    const [stock, setStock] = React.useState(tshirt.stock);
    const [quantity, setQuantity] = React.useState(1);

    const handleBuy = (e) => {
        e.preventDefault();
        setStock(stock - quantity);
    };

  return (
    <div className="tshirt-card">
      <img src={`images/${tshirt.image}`} alt={tshirt.title} />
      <h3>{tshirt.title}</h3>
      <p>Price: ${tshirt.price.toFixed(2)}</p>
      
      {stock > 0 ? (
        <>
          <p>In Stock: {stock}</p>
          <form onSubmit={handleBuy}>
            <select 
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({length: stock}, (_, i) => (
                <option key={i+1} value={i+1}>{i+1}</option>
              ))}
            </select>
            <button type="submit">Buy</button>
          </form>
        </>
      ) : (
        <p className="out-of-stock">Out of Stock</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>T-Shirts Store</h1>
      <div className="tshirt-grid">
        {tshirts.map(tshirt => (
          <TShirt key={tshirt.id} tshirt={tshirt} />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));