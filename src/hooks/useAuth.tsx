import { useQuery, useMutation } from "@tanstack/react-query";
import { getUserQuery } from "@/client/queries/getUser";
import { signUpMutation } from "@/client/mutations/signUp";

const useAuth = () => {
  const { data: user, isLoading, isError } = useQuery(getUserQuery());

  const isAuthenticated = !!user;

  const createUser = useMutation(signUpMutation());

  return {
    user,
    isLoading,
    isError,
  };
};

export default useAuth;
