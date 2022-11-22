// the entire backend code
import { connectToDatabase } from "../../../utils/mongodb"
import { Timestamp } from "mongodb"

export default async function handler(req, res) {
  const { method, body } = req

  const { db } = await connectToDatabase(req)
  if (method === "GET") {
    try {
      const posts = await db
        .collection("posts")
        .find()
        .sort({ timestamp: -1 })
        .toArray()
      res.status(200).json(posts)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  if (method === "POST") {
    try {
      const post = await db
        .collection("posts")
        .insertOne({ ...body, timestamp: new Timestamp() })
      // insertOne is mongodb method to insert data into the collection
      res.status(201).json(post)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
