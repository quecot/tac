import Category from './Category';

interface Post {
  title: string
  node: {
    excerpt: string
    createdAt: Date
    slug: string
    featuredImage: {
      url: string
    }
    content: { raw: { children : Array<{ children: Array<any>, type: string}> }},
    title: string
    author: {
      photo: {
        url: string
      }
      name: string
      bio: string
    }
    categories: Category[]
  }
}

export default Post;
