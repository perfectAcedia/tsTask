
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  async function getAndRenderPosts(): Promise<Post[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      if (!response.ok) {
        throw new Error(`Failed to fetch posts. Status: ${response.status}`);
      }
  
      const posts: Post[] = await response.json();
      
      posts.map((post: Post) => {
        const postNode = document.createElement('div');
        postNode.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
        
        document.body.appendChild(postNode);
      });
  
      return posts;
    } catch (error) {
      console.error(`Error: ${error}`);
      throw error;
    }
  }
  