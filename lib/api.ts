// Types for JSONPlaceholder API responses
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Utility function for API calls with error handling
async function apiCall<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
}

// Fetch all posts
export async function fetchPosts(): Promise<Post[]> {
  return apiCall<Post[]>('/posts');
}

// Fetch a single post by ID
export async function fetchPost(id: number): Promise<Post | null> {
  try {
    return await apiCall<Post>(`/posts/${id}`);
  } catch (error) {
    // Return null if post not found, re-throw other errors
    if (error instanceof Error && error.message.includes('404')) {
      return null;
    }
    throw error;
  }
}

// Fetch all users
export async function fetchUsers(): Promise<User[]> {
  return apiCall<User[]>('/users');
}

// Fetch a single user by ID
export async function fetchUser(id: number): Promise<User | null> {
  try {
    return await apiCall<User>(`/users/${id}`);
  } catch (error) {
    // Return null if user not found, re-throw other errors
    if (error instanceof Error && error.message.includes('404')) {
      return null;
    }
    throw error;
  }
}

// Fetch comments for a specific post
export async function fetchComments(postId: number): Promise<Comment[]> {
  return apiCall<Comment[]>(`/posts/${postId}/comments`);
}

// Fetch posts by a specific user
export async function fetchPostsByUser(userId: number): Promise<Post[]> {
  return apiCall<Post[]>(`/users/${userId}/posts`);
}

// Utility function to get posts with pagination
export function paginatePosts(posts: Post[], page: number, limit: number = 10) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  return {
    posts: posts.slice(startIndex, endIndex),
    totalPages: Math.ceil(posts.length / limit),
    currentPage: page,
    totalPosts: posts.length,
    hasNextPage: endIndex < posts.length,
    hasPrevPage: startIndex > 0,
  };
}
