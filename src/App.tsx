import Providers from "./components/providers";
import AppRoutes from "./routes";
import { Toaster } from "sonner";

export default function App() {
  return (
    <Providers>
      <AppRoutes />
      <Toaster position="top-center" />
    </Providers>
  );
}
