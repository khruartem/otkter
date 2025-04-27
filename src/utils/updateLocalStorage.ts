type TKeyType =
  | "main"
  | "projects"
  | "services"
  | "all-projects"
  | "project-id";

export const updateLocalStorage = (key: TKeyType, value?: number) => {
  switch (key) {
    case "main":
      localStorage.setItem("main", "true");
      localStorage.setItem("projects", "false");
      localStorage.setItem("services", "false");
      localStorage.setItem("all-projects", "false");
      localStorage.setItem("project-id", "false");
      break;
    case "projects":
      localStorage.setItem("main", "false");
      localStorage.setItem("projects", "true");
      localStorage.setItem("services", "false");
      localStorage.setItem("all-projects", "false");
      localStorage.setItem("project-id", "false");
      break;
    case "services":
      localStorage.setItem("main", "false");
      localStorage.setItem("projects", "false");
      localStorage.setItem("services", "true");
      localStorage.setItem("all-projects", "false");
      localStorage.setItem("project-id", "false");
      break;
    case "all-projects":
      localStorage.setItem("main", "false");
      localStorage.setItem("projects", "false");
      localStorage.setItem("services", "false");
      localStorage.setItem("all-projects", "true");
      localStorage.setItem("project-id", "false");
      break;
    case "project-id":
      localStorage.setItem("main", "false");
      localStorage.setItem("projects", "false");
      localStorage.setItem("services", "false");
      localStorage.setItem("all-projects", "false");
      localStorage.setItem("project-id", `${value}`);
      break;
    default:
      break;
  }
};
