import {UserInfoDto} from "../model/UserInfoDto";



export default function isAdmin (  me: UserInfoDto | undefined ) {

   if (  me &&  me.roles.find( role => role === "ADMIN" )) {
      return true;
   } else {
      return false;
   }
}