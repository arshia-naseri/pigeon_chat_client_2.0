import axios from "axios";
import { Socket } from "socket.io-client";

export class User {
  public name: string;
  public username: string;
  public password: string;
  public avatarPic: string;
  public _id: string;
  public contacts: RelatedUser[];
  private chatRoomIDList: string[];
  public chatRoomList: ChatRoom[];
  private socket: Socket;

  constructor() {
    this.name = "";
    this.username = "";
    this.password = "";
    this.avatarPic = "";
    this._id = "";
    this.contacts = [];
    this.chatRoomIDList = [];
    this.chatRoomList = [];
  }

  async initialize(userID: string, socket: Socket) {
    await this.getUserData(userID);
    await this.getChatRoomList();

    // ? Removing participant who is self
    for (let i = 0; i < this.chatRoomList.length; i++) {
      this.chatRoomList[i].participants = this.chatRoomList[
        i
      ].participants.filter((user) => user.username !== this.username);
    }
    this.socket = socket;

    // ? Joining chatrooms
    this.joinChatRoom(this.chatRoomIDList);

    // ? Deleting ID list of chatrooms to cleanup
    delete this.chatRoomIDList;
  }

  public joinChatRoom = (chatRoomIDList) => {
    this.socket.emit("join-room", chatRoomIDList);
  };

  private async getUserData(userID: string): Promise<void> {
    try {
      const res = await axios.post(process.env.REACT_APP_GET_USER_API_URL, {
        userID,
      });
      const data = res.data[0];

      this._id = data._id;
      this.name = data.name;
      this.username = data.username;
      this.password = data.password;
      this.avatarPic = data.avatarPic;
      this.contacts = data.contacts;
      this.chatRoomIDList = data.chatRoomIDList;
    } catch (error) {
      console.log(error);
    }
  }

  private async getChatRoomList() {
    try {
      const res = await axios.post(
        process.env.REACT_APP_GET_USER_CHATROOM_LIST_API_URL,
        {
          chatRoomIDList: this.chatRoomIDList,
        },
      );
      this.chatRoomList = res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async updateMessages(time, text, roomID) {
    try {
      const res = await axios.post(
        process.env.REACT_APP_UPDATE_CHATROOM_MESSAGE,
        { id: this._id, time: time, text: text, roomID: roomID },
      );
      return res;
    } catch (error) {
      console.log(error);
      console.log("error in message update");
    }
  }
}
