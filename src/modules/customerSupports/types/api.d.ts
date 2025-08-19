export interface Contact {
  _id: string;
  lastMessageTime: string;
  email: string;
  username: string;
  message: string;
}

export interface Message {
  _id: string;
  message: string;
  sender: string;
  recipient: string;
  messageType: string;
  timestamp: string;
}
