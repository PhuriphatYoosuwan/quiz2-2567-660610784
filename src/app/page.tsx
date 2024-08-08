"use client";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner name = "Phuriphat Yoosuwan 660610784" text = "Quiz ยากจัง" liked = "99"/>

        {/* Comment Example */}
        <Comment userImagePath="/profileImages/lisa.jpg" username="Lisa" commentText="จริงค่ะ" likeNum={999}/> 
        {/* Reply Example */}
        <Reply/>
        {/* map-loop render Comment component here */
        }
      </div>
    </div>
  );
}
