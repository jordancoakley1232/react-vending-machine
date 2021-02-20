
const filteredProducts = filteredDrinks.concat(filteredSnacks);


const productCards = filteredItems.map((item) => {
    const refill = () => {
        if (item.quantity < 10) {
            item.quantity = item.quantity + (10 - item.quantity);
        }
        console.log(item.quantity);
    }
    return (

        <div className="refill-card" style={{ backgroundImage: `url(${item.imageUrl})`, overflow: "hidden" }} key={item.id}>
            <div className="info-buttons">
                <div className="drink-stock" style={{ backgroundColor: item.quantity <= 5 ? 'red' : "#33cc33" }}>{item.quantity}</div>
            </div>

            <Button className="refill-button" variant="contained" onClick={refill} color={item.quantity === 10 ? "disabled" : "secondary"} style={{ width: "30%", textAlign: "center", alignSelf: "center" }}>
                Refill
                </Button>
            <div className="product-name-container" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                <p className="product-name">{item.name}</p>
            </div>
        </div >

    )
})