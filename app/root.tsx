import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import Foundation from "./components/Foundation";
import NavBar from "./components/NavBar";
import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
     <body>
       <NavBar/>
       <Foundation>

         {/* TODO: navigation is still taking place before the exit animation is done executing. This is likely because animatePresence's exitBeforeEnter relies on the React Dom to prevent the component from unmounting, while remix and the browser can perform navigation events independent of the React Dom. A solution may be to useTransition from Remix-Run/React in a conditional and have the transition state include the exit opacity */ }

       <AnimatePresence exitBeforeEnter >
          <motion.main
            key={useLocation().key}
            initial={{opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{duration: .5}}
            
          >
            
        <Outlet />
        </motion.main>
        </AnimatePresence>
        </Foundation>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
