import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  //   index("routes/home.tsx"),
  ...prefix("/portfolio", [
    route("/", "routes/home.tsx"),
    route("/about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
