# Learning Next.js

## How to Create a Next App

To create a Next.js application, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to create your Next.js app.
3. Run the following command to create a new Next.js app:

   ```
   npx create-next-app my-next-app
   ```

   Replace `my-next-app` with the desired name for your app.

4. Once the command finishes executing, navigate into the newly created app directory:

   ```
   cd my-next-app
   ```

5. Start the development server by running the following command:

   ```
   npm run dev
   ```

   This will start the Next.js development server and you can access your app at `http://localhost:3000`.

6. You can now start building your Next.js app by modifying the files in the `src/app` directory.

### File Naming Conventions

In Next.js, it is common to use the `.tsx` file extension for React components. When creating pages, you can name your files with the `.tsx` extension to indicate that they are React components representing pages. For example, you can create a file called `page.tsx` inside a folder to define a page component.

Similarly, when creating layout components, you can also use the `.tsx` file extension. For example, you can create a file called `layout.tsx` inside a folder to define a layout component.

Remember to organize your files in a logical folder structure that makes sense for your application.

Refer to `src/app/chai` to see the things in action, read the comments for better understanding of how the layout works and its heirarchy 