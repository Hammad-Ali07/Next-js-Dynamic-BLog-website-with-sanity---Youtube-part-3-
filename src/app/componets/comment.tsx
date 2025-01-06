// components/CommentSection.tsx
'use client'
import { useState, useEffect } from "react";

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]); // Store comments
  const [newComment, setNewComment] = useState<string>(""); // Store the new comment

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(storedComments);
  }, []);

  // Save comments to localStorage whenever the comments state changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment.trim()]);
      setNewComment("");
    }
  };

  return (
    <div className="comment-section p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-2 border rounded-md mb-2"
      />
      <button
        onClick={handleAddComment}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Comment
      </button>
      <ul className="comment-list mt-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="bg-gray-100 p-2 rounded-md shadow-sm mb-2"
          >
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
