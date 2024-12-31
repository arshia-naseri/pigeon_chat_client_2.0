import axios from "axios";

export class User {
  public name: string;
  public username: string;
  public password: string;
  public avatarPic: string;
  public _id: string;
  public contacts: any;
  public chatRoomIDList: any;
  public isDataUpdated: boolean;

  constructor() {
    this.name = "";
    this.username = "";
    this.password = "";
    this.avatarPic = "";
    this._id = "";
    this.contacts = [];
    this.chatRoomIDList = [];
    this.isDataUpdated = false;
  }

  async getUserData(userID: string): Promise<void> {
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

      this.isDataUpdated = true;
    } catch (error) {
      console.log(error);
    }
  }
  //   getUserData(userID: string) {
  //     axios
  //       .post(process.env.REACT_APP_GET_USER_API_URL, { userID })
  //       .then((res) => {
  //         const data = res.data[0];

  //         this._id = data._id;
  //         this.name = data.name;
  //         this.username = data.username;
  //         this.password = data.password;
  //         this.avatarPic = data.avatarPic;
  //         this.contacts = data.contacts;
  //         this.chatRoomIDList = data.chatRoomIDList;
  //       })
  //       .catch((error) => console.log(error));
  //   }
}
