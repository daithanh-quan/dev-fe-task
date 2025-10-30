# Posts Explorer - Frontend Development Challenge

A complete Next.js 14 application serving as the foundation for a frontend development assessment. Your task is to extend this working application with 4 additional features to demonstrate your Reac##### **🎨 Extension 1: Figma Design Implementation (REQUIRED)**
- **Requirement**: Redesign the blog list and blog detail pages to match the provided Figma design
- **Figma Design**: [Blog Website Design](https://www.figma.com/design/Ek4V5LIZeWRoH94QzBx79F/blog-website-design---mobile-app-design--Community-?node-id=0-1&p=f)
- **Implementation Details**:
  - **Blog List Page**: Redesign the posts listing to match Figma layout
    - Update post cards with proper styling, cover images, and typography  
    - Implement the exact layout, spacing, and visual hierarchy from Figma
    - Add search functionality with the design specified in Figma
    - Ensure responsive design matches mobile and desktop variants
    - Include user avatars, post metadata (read time, tags, publish date)
  - **Blog Detail Page**: Redesign individual post pages to match Figma
    - Hero section with cover image and post metadata
    - Proper typography and content layout
    - Author section with avatar and bio
    - Comments section styling
    - Back navigation and related posts (if shown in Figma)
  - **Search Functionality**: Implement search as designed in Figma
    - Search input styling and placement
    - Search results layout and empty states
    - Real-time search with debouncing
    - URL persistence (`?search=query`)
- **Expected Files to Modify**: 
  - `app/posts/page.tsx` - Blog list redesign
  - `app/posts/[id]/page.tsx` - Blog detail redesign  
  - `components/PostCard.tsx` - Updated post card design
  - `components/` - New search component
  - `app/globals.css` - Updated styling to match Figma
  - `lib/api.ts` - Use enhanced post data with cover images and metadatatension 1: Figma Design Implementation (REQUIRED)**ext.js expertise.

## 🎯 **Challenge Overview**

This is a **working Posts Explorer application** that already includes core functionality. Your job is to **extend it** with advanced features that showcase your frontend development skills.

## 🚀 Existing Features (Already Implemented)

- **Next.js 14 App Router** - Modern React framework with server-side rendering
- **TypeScript** - Full type safety and better developer experience
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **API Integration** - JSONPlaceholder API for realistic data fetching
- **Pagination** - Client-side pagination with URL state management
- **User Filtering** - Filter posts by user with persistent state
- **Testing Setup** - Jest and React Testing Library configuration
- **Code Quality** - ESLint and Prettier for consistent code formatting
- **Accessibility** - ARIA labels and semantic HTML

## ✅ **Current Implementation Status**

This repository contains a **complete working implementation** of a Posts Explorer with the following features already built:

### **✅ Implemented Features**
- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration  
- ✅ Posts list with pagination (10 posts per page)
- ✅ Individual post detail pages
- ✅ User filtering functionality
- ✅ Responsive design
- ✅ API integration with error handling
- ✅ Testing framework setup
- ✅ Code quality tools (ESLint/Prettier)

## 🎯 **Your Challenge: Implement 2 Key Extensions**

Since the base application is complete, your task is to **enhance** it by implementing **BOTH** of the following requirements:

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
// Core API functions
fetchPosts()           // Get all posts
fetchPost(id)          // Get single post
fetchUsers()           // Get all users
fetchUser(id)          // Get single user  
fetchComments(postId)  // Get post comments
fetchPostsByUser(userId) // Get posts by user
paginatePosts(posts, page, limit) // Utility for pagination

// Enhanced UI data functions (use these for Figma implementation)
enhancePost(post)      // Add cover images, tags, read time, publish date
enhanceUser(user)      // Add avatar, bio, post count
getUserAvatar(userId)  // Get user avatar URL
getPostCoverImage(postId, title) // Get post cover image URL
getPostThumbnail(postId, title)  // Get post thumbnail URL
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

### **� Extension 1: Search Functionality (REQUIRED)**
- **Requirement**: Add a search input that allows users to search posts by title or content
- **Implementation Details**:
  - Add search input component in the posts list page header
  - Filter posts in real-time as user types (debounced)
  - Persist search query in URL (`?search=query`)
  - Show "No results found" state when search returns empty
  - Clear search functionality
- **Expected Files to Modify**: `app/posts/page.tsx`, `components/` (new SearchInput component)

### **🧪 Extension 2: End-to-End Testing (REQUIRED)**
- **Requirement**: Add comprehensive E2E tests using Playwright or similar
- **Implementation Details**:
  - **Core User Flows**: Test complete user journeys
    - Browse posts list and pagination
    - Search for posts and verify results
    - Navigate to post details and back
    - Filter posts by user
    - Test responsive design on mobile/tablet/desktop
  - **Edge Cases**: Test error handling and edge scenarios
    - Invalid post IDs (404 handling)
    - Empty search results
    - Network errors and retry mechanisms
    - Loading states and skeleton screens
  - **Visual Testing**: Ensure design matches Figma
    - Screenshot comparison tests
    - Layout and spacing validation
    - Responsive breakpoint testing
  - **Performance**: Basic performance validations
    - Page load times
    - Image loading and optimization
- **Expected Files to Create**: 
  - `e2e/` directory with test files
  - `playwright.config.ts` configuration
  - `package.json` updated with E2E scripts
  - GitHub Actions workflow for CI/CD testing (optional bonus)

## 📝 **Submission Requirements**

### **What You Must Deliver:**
1. **Both extensions implemented** and working perfectly
2. **Pixel-perfect Figma implementation** - Design must match exactly
3. **Comprehensive E2E test suite** with good coverage
4. **Updated documentation** explaining your implementation approach
5. **Clean git commits** showing your development process
6. **Live deployment** (Vercel/Netlify) with all features working

### **Evaluation Criteria:**
- **Design Implementation** (50%) - How accurately the Figma design is implemented
- **Code Quality** (25%) - Clean, maintainable, TypeScript code
- **Testing** (20%) - Comprehensive E2E test coverage and quality
- **User Experience** (5%) - Smooth interactions and responsiveness

## ⏰ **Time Expectation**
- **Estimated Time**: 4-6 hours for an experienced developer
- **Focus Areas**: Figma design implementation (70%), E2E testing (30%)
- **Priority**: Design accuracy is most important - ensure pixel-perfect match

## 🤔 **Need Help?**

If you have questions about the requirements, feel free to:
- Create an issue in this repository  
- Email us at: admin@cvtot.vn

**Good luck! We're excited to see how you extend this application. 🚀**
