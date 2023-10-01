import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.xvc4rwr.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error While Connecting with the database ", error);
  }
};

export default Connection;
