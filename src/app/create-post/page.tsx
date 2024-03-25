import { api } from "~/trpc/server";
import { CreatePost } from "../_components/create-post";
import Link from "next/link";

export default async function PostCreate() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
        <Link href='/'>
        <button
        type="button"
        className="mb-8 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        See all Posts      
        </button>
        </Link>
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}