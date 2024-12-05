import { wrapper } from "@/redux/store"; // Import the wrapper
import RootLayout from "@/app/layout"; // Import your RootLayout

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

// Export the app wrapped with the Redux wrapper
export default wrapper.withRedux(MyApp);
