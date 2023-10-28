import "next-auth";
import { AuthResponseDto } from "@/apiClient/Client.generated";

declare module "next-auth" {
  //extend default Session or User interface
  //export interface Session {}
}
