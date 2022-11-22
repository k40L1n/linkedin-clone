import { useEffect, useState } from "react"
import Input from "../components/Input"
import Post from "../components/Post"
import { useRecoilState } from "recoil"
import {
  handlePostState,
  getPostState,
  useSSRPostsState,
} from "../atoms/postAtom"

function Feed({ posts }) {
  const [realTimePosts, setRealTimePosts] = useState([])
  const [handlePost, setHandlePost] = useRecoilState(handlePostState)
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState)

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      const responseData = await response.json()
      setRealTimePosts(responseData)
      setHandlePost(false)
      setUseSSRPosts(false)
    }
    fetchPost()
  }, [handlePost])

  console.log(realTimePosts)
  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
      {/* hybrid way of getting serverside posts */}
      {!useSSRPosts
        ? realTimePosts.map((post) => <Post key={post._id} post={post} />)
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  )
}

export default Feed
