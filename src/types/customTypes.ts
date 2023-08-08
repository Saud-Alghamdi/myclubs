export type User = {
  username: string | null;
  email: string | null;
};

export type AuthContextType = {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export type Club = {
  id: number;
  name: string;
  logo: string;
};

export type ClubResponse = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
};
