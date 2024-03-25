import Link from "next/link";

import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const allPosts = await api.post.getAllPosts();
  return (
      <div className="container flex flex-col items-center justify-center gap-12 px-4">
        
        
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          All posts
        </h1>
        <ul  className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {allPosts ?  allPosts.map((post) => (
              <li key={post.id}>
                  {post.name}
              </li>
            )) : <li><p>Loading posts...</p></li>}
            </ul>
      </div>
  );
}


