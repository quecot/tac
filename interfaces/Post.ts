interface Post {
  title: string
  node: {
    excerpt: string
    createdAt: Date
    slug: string
    featuredImage: {
      url: string
    }
    title: string
    author: {
      photo: {
        url: string
      }
      name: string
    }
  }
}

export default Post;
