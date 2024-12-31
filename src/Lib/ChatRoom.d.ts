interface ChatRoom {
  _id: string;
  groupName: string | null;
  isGroupChat: boolean;
  lastUpdate: string;
  messages: any;
  participants: RelatedUser[];
}
