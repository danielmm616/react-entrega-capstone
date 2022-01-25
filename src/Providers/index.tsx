import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ProductsProvider } from "./ProductsContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
