import { fetchUser } from "../services/auth-service";

export const getUserQuery = () => ({
  queryKey: ["auth", "me"],
  queryFn: () => fetchUser(),
});
