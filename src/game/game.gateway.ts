import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { SocketClient } from '../types';
import { IN_EVENT, JoinEvent } from '../event/events';
import { RoomService } from '../room/room.service';
@WebSocketGateway()
export class GameGateway implements OnGatewayDisconnect {
    constructor(private readonly roomService: RoomService) {}

    @SubscribeMessage(IN_EVENT.JOIN)
    join(client: SocketClient, input: JoinEvent) {
        this.roomService.addPlayer(client, input);
    }

    @SubscribeMessage(IN_EVENT.LEAVE)
    leave(client: SocketClient) {
        this.roomService.removePlayer(client);
    }

    handleDisconnect(client: SocketClient) {
        this.roomService.removePlayer(client);
    }
}
