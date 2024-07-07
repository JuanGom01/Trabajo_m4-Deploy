import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UserRole } from "./neededRoles.decorator";
import { Role } from "src/users/roles.entity";





@Injectable()
export class roleGuard implements CanActivate {

    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const allowedRoles = this.reflector.getAllAndOverride<UserRole[]>("role", [context.getHandler(), context.getClass()])
        const request = context.switchToHttp().getRequest()
        const userRole: Role[] = request.user.roles
        
        for (const role of allowedRoles) {
            if (allowedRoles.includes((role))) {return true}
        }
        
        return false
    }



    
}