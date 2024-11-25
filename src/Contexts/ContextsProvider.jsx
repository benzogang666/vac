import { CartProvider } from "./CartContext/CartContext";

const ContextsProvider = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};

export default ContextsProvider;