import { FormDemo } from "./components/form-demo";
import { ThemeProvider } from "./components/theme-provider";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex items-center justify-center h-screen">
                <FormDemo />
            </div>
            {/* <ModeToggle /> */}
            {/* <TypographyDemo /> */}
        </ThemeProvider>
    );
}

export default App;
