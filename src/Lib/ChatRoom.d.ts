interface ChatRoom {
  _id: string;
  groupName: string | null;
  isGroupChat: boolean;
  lastUpdate: string;
  messages: { from: RelatedUser; text: string; time: Date }[];
  participants: RelatedUser[];
}
