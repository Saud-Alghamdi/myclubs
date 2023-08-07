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