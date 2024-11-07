import { Module } from "@nestjs/common";

import { InfrastructureModule } from "../../infrastructure/infrastructure.module";
import { PluginsModule } from "../../plugins/plugins.module";
import { DomainModule } from "../../domain/domain.module";

import { AppGetHealthController } from "./controllers/app/get-health.controller";
import { UserCreateUserController } from "./controllers/user/create-user.controller";
import { MessengerCreateConversationController } from "./controllers/messenger/create-conversation.controller";

@Module({
  imports: [PluginsModule, InfrastructureModule, DomainModule],
  controllers: [
    AppGetHealthController,
    UserCreateUserController,
    MessengerCreateConversationController,
  ],
})
export class RestModule {}
