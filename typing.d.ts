interface Message {
  text: string;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string; // the '_id' vs 'id': '_id' means the id of the user in the database, where 'id' is the id of the user in the app
    name: string;
    avatar: string;
  };
}