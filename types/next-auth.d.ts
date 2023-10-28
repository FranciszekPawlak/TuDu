import "next-auth";
import { AuthResponseDto } from "@/apiClient/Client.generated";
import { DefaultUser } from "next-auth";

declare module "next-auth" {
  //extend default Session or User interface
  export interface Session {
    user: DefaultUser;
  }
}
