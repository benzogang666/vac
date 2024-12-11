import { CartProvider } from "./сartContext/CartContext";

const BuildProviderTree = (providers) =>
  providers.reduceRight(
    (AccProvider, CurrentProvider) =>
      ({ children }) =>
        (
          <CurrentProvider>
            <AccProvider>{children}</AccProvider>
          </CurrentProvider>
        ),
    ({ children }) => <>{children}</>
  );

const Providers = BuildProviderTree([CartProvider]);

export default Providers;