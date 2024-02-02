import { supabase } from "../../../libs/supabase";

export const useSupabase = () => {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return {
    loginWithGoogle,
  };
};
