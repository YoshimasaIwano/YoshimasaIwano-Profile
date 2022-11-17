import { flowerGet } from "./controller/flowerGet";
import { defaultGet } from "./controller/defaultGet";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/Gallery/flower",
        method: "get",
        action: flowerGet
    },
    {
        path: "/",
        method: "get",
        action: defaultGet
    },
];