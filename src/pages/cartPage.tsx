import Box from "@mui/material/Box";
import Header from "../components/templates/header";
import Footer from "../components/templates/footer";
import { useCart } from "../components/templates/cartContext";
import { Grid } from "@mui/material";
import Button from "../components/atoms/Button";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  return (
    <>
      <Box>
        <Header />

        <Box
          sx={{
            width: "60%",
            height: "100px",
            justifyContent: "center",
            marginTop: "100px",
            marginLeft: "20%",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <h2>カート一覧</h2>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <p>合計金額: {totalAmount}</p>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "100px",
            justifyContent: "center",
            marginTop: "20px",
            marginLeft: "20%",
            alignItems: "center",
          }}
        >
          {cart.length > 0 ? (
            <ul
              style={{
                padding: 0,
                listStyle: "none",
              }}
            >
              {cart.map((product) => (
                <li
                  key={product.id}
                  style={{
                    border: "2px solid #f19f4d",
                    marginBottom: "20px",
                    padding: "10px",
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item xs={3}>
                      <img
                        src={"https://via.placeholder.com/450"}
                        alt={product.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          marginLeft: "20px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <p>{product.name}</p>
                    </Grid>
                    <Grid item xs={5}>
                      <p>金額: {product.price}</p>
                    </Grid>
                    <Grid item xs={1}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => removeFromCart(product.id)}
                      >
                        削除
                      </Button>
                    </Grid>
                  </Grid>
                  {/* 他の商品情報も表示する場合はここに追加 */}
                </li>
              ))}
            </ul>
          ) : (
            <p>カートに商品がありません。</p>
          )}
        </Box>

        <Footer companyName={"EC-SITE"} />
      </Box>
    </>
  );
}

export default CartPage;
