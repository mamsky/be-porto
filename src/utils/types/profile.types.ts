import { Option } from "@prisma/client";

export type ProfileDTO = {
  surname: string;
  images: string;
  profession: string;
  bio: string;
  location: string;
  status: Option;
};
