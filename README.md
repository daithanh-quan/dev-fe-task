# Posts Explorer - Next.js Starter Template

A complete Next.js 14 starter template for building a posts explorer application with pagination, filtering, and user management features. This template demonstrates best practices for React development, TypeScript usage, and testing patterns.

## 🚀 Features

- **Next.js 14 App Router** - Modern React framework with server-side rendering
- **TypeScript** - Full type safety and better developer experience
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **API Integration** - JSONPlaceholder API for realistic data fetching
- **Pagination** - Client-side pagination with URL state management
- **User Filtering** - Filter posts by user with persistent state
- **Testing Setup** - Jest and React Testing Library configuration
- **Code Quality** - ESLint and Prettier for consistent code formatting
- **Accessibility** - ARIA labels and semantic HTML

## 📋 Requirements Met

- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Posts list with pagination (10 posts per page)
- ✅ Individual post detail pages
- ✅ User filtering functionality
- ✅ Responsive design
- ✅ API integration with error handling
- ✅ Testing framework setup
- ✅ Code quality tools (ESLint/Prettier)

## 🛠️ Installation

1. **Clone or download this starter template**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
dev-fe-task/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page (redirects to posts)
│   ├── globals.css        # Global styles
│   └── posts/             # Posts-related pages
│       ├── page.tsx       # Posts list page
│       └── [id]/          # Dynamic post detail pages
│           └── page.tsx
├── components/            # Reusable React components
│   ├── PostCard.tsx       # Individual post card
│   ├── Pagination.tsx     # Pagination controls
│   └── UserFilter.tsx     # User filter dropdown
├── lib/                   # Utility functions and API calls
│   └── api.ts            # JSONPlaceholder API functions
├── __tests__/            # Test files
│   └── components.test.tsx # Sample component tests
└── ...config files       # TypeScript, ESLint, etc.
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

## 🌐 API Integration

The application uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for demo data:

- **Posts**: `/posts` - List of all posts
- **Users**: `/users` - List of all users  
- **Comments**: `/posts/{id}/comments` - Comments for a specific post

### Available API Functions (lib/api.ts)

```typescript
fetchPosts()           // Get all posts
fetchPost(id)          // Get single post
fetchUsers()           // Get all users
fetchUser(id)          // Get single user  
fetchComments(postId)  // Get post comments
fetchPostsByUser(userId) // Get posts by user
paginatePosts(posts, page, limit) // Utility for pagination
```

## 🎨 Styling

- **CSS Modules** approach with global styles
- **Responsive design** with mobile-first breakpoints
- **CSS Grid and Flexbox** for layouts
- **Custom properties** for consistent theming
- **Accessible color contrast** ratios

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px` 
- Desktop: `> 1024px`

## 🧪 Testing

Pre-configured Jest and React Testing Library setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode  
npm run test:watch

# Run tests with coverage
npm run test -- --coverage
```

### Sample Tests Included
- Component rendering tests
- User interaction tests  
- API function tests
- Navigation and routing tests

## 📱 Pages Overview

### Posts List (`/posts`)
- Displays paginated list of posts (10 per page)
- User filter dropdown to filter by author
- Pagination controls with page numbers
- Responsive card-based layout
- URL state management for page and filters

### Post Detail (`/posts/[id]`)
- Individual post content display
- Author information
- Comments section
- Back navigation to posts list
- 404 handling for invalid post IDs

## 🔍 Key Features Explained

### Pagination
- Client-side pagination with URL persistence
- Page numbers in URL (`?page=2`)
- Previous/Next navigation
- Jump to specific pages
- Ellipsis for large page ranges

### User Filtering  
- Dropdown to filter posts by author
- Preserves pagination state
- URL parameter persistence (`?user=1`)
- "All Users" option to clear filter

### API Error Handling
- Graceful error handling for network issues
- Loading states for better UX
- 404 handling for missing resources
- Retry mechanisms where appropriate
## 🚀 Deployment

This Next.js application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
- Netlify
- AWS Amplify  
- Railway
- DigitalOcean App Platform

## 🤝 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write descriptive component and function names
- Add JSDoc comments for complex functions

### Component Guidelines  
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Include ARIA labels for accessibility
- Write unit tests for complex logic

### API Guidelines
- Handle loading and error states
- Use proper TypeScript types for API responses
- Implement caching where appropriate
- Add retry logic for failed requests

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Testing Library Documentation](https://testing-library.com/docs/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## 🤔 Common Issues & Solutions

### TypeScript Errors
- Ensure all dependencies are installed: `npm install`
- Check `tsconfig.json` paths are correct
- Add proper type declarations for external libraries

### API Issues
- Check network connectivity
- Verify API endpoints are accessible
- Review browser console for error details

### Styling Issues  
- Check CSS specificity conflicts
- Verify responsive breakpoints
- Test on multiple devices/browsers

## 📄 License

This starter template is provided as-is for educational and development purposes.

---

**Happy Coding! 🎉**

Built with ❤️ using Next.js, TypeScript, and modern React patterns.
- [ ] README updated (if needed)

## 💡 Bonus Points

- Add search functionality
- Implement optimistic updates
- Add animations/transitions
- Include E2E tests
- Deploy to Vercel/Netlify

## 🤔 Need Help?

If you have questions about the requirements, feel free to:
- Create an issue in this repository
- Email us at: admin@cvtot.vn

Good luck! We're excited to see your implementation. 🚀
