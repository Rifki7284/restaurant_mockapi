import { createFileRoute } from "@tanstack/react-router";

const Homepage = () => {
  return <h1>homepage</h1>;
};
export const Route = createFileRoute("/")({
  component: Homepage,
});
