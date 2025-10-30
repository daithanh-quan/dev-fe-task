import Link from 'next/link';
import { fetchPost, fetchUser, fetchComments } from '@/lib/api';
import { notFound } from 'next/navigation';

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const postId = parseInt(params.id, 10);

  if (isNaN(postId)) {
    notFound();
  }

  try {
    // Fetch post, user, and comments in parallel
    const [post, comments] = await Promise.all([
      fetchPost(postId),
      fetchComments(postId),
    ]);

    if (!post) {
      notFound();
    }

    const user = await fetchUser(post.userId);

    return (
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/posts" className="btn btn-secondary">
            ← Back to Posts
          </Link>
        </div>

        {/* Post Content */}
        <article className="card mb-8">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            {user && (
              <div className="flex items-center text-gray-600">
                <span className="text-sm">
                  By <strong className="text-blue-600">{user.name}</strong>
                </span>
                <span className="mx-2">•</span>
                <span className="text-sm">{user.email}</span>
                {user.website && (
                  <>
                    <span className="mx-2">•</span>
                    <a 
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {user.website}
                    </a>
                  </>
                )}
              </div>
            )}
          </header>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed text-gray-700">
              {post.body}
            </p>
          </div>
        </article>

        {/* Comments Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Comments ({comments.length})
          </h2>
          
          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {comment.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {comment.email}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {comment.body}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No comments yet.</p>
            </div>
          )}
        </section>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="error">
          <h3 className="text-lg font-semibold mb-2">Error Loading Post</h3>
          <p>
            Sorry, we couldn't load this post. Please try again later.
          </p>
          <p className="text-sm mt-2">
            Error: {error instanceof Error ? error.message : 'Unknown error'}
          </p>
          <div className="mt-4">
            <Link href="/posts" className="btn btn-primary">
              Back to Posts
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
