import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ProductsProvider } from "./ProductsContext";
import { CartProvider } from "./CartContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
