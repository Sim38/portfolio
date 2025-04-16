import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  //   index("routes/home.tsx"),
  route("/portfolio", "components/main_layout.tsx", [
    route("", "routes/about.tsx", { id: "home" }),
    route("about", "routes/about.tsx"),
    route("projects", "routes/projects.tsx"),
  ]),
] satisfies RouteConfig;
