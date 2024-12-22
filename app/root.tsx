import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./styles/global.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
    try {
        return (
            <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            </body>
            </html>
        );
    } catch (error) {
        console.error("App Error:", error);
        return <div>Something went wrong.</div>;
    }
}
