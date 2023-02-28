"use client";
import { useState } from "react";
export default function LikePostButton() {
  const [like, setLike] = useState(false);
  return (
    <button onClick={() => setLike(!like)}>{like ? "Hate" : "Like"}</button>
  );
}
