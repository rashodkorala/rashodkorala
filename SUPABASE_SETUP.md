# Supabase Setup Guide

This project uses Supabase to store and fetch project data. Follow these steps to set up Supabase for your project.

## 1. Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in your project details and create the project

## 2. Create the Projects Table

In your Supabase project, go to the SQL Editor and run the following SQL to create the `projects` table:

```sql
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  about TEXT NOT NULL,
  image TEXT[] NOT NULL, -- Array of image URLs
  Imagewidth INTEGER,
  height INTEGER,
  link TEXT,
  linkText TEXT,
  tags TEXT[] NOT NULL, -- Array of tags
  slidesToShow INTEGER,
  video TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional, but recommended)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);
```

## 3. Get Your Supabase Credentials

1. Go to your Supabase project settings
2. Navigate to **Settings** > **API**
3. Copy the following values:
   - **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon/public key** or **publishable key** (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

   **Note:** The publishable key (anon key) is safe to use in client-side code. Never use the service role key (secret key) in client-side code.

## 4. Set Up Environment Variables

Create a `.env.local` file in the root of your project (if it doesn't exist) and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
```

Replace `your_supabase_project_url` and `your_supabase_publishable_key` with the values you copied from step 3.

**Important:** Use the **publishable key** (anon key), not the service role key. The publishable key is safe to expose in client-side code.

## 5. Insert Sample Data

You can insert sample data using the Supabase dashboard:

1. Go to **Table Editor** in your Supabase dashboard
2. Select the `projects` table
3. Click "Insert" and add your project data

Or use the SQL Editor to insert data:

```sql
INSERT INTO projects (title, description, about, image, tags, link, linkText)
VALUES (
  'GetFit',
  'Track workouts, plan meals, and achieve fitness goals on-the-go.',
  'GetFit is a mobile fitness app developed with Flutter...',
  ARRAY['/assets/ProjectsPhotos/getFit/logo.png', '/assets/ProjectsPhotos/getFit/getFit1.png'],
  ARRAY['Flutter', 'Firebase', 'ChatGPT', 'Mobile App'],
  'https://github.com/rashodkorala/Getfit',
  'view on GitHub'
);
```

## 6. Image Storage

For images, you have two options:

### Option A: Store images in Supabase Storage
1. Create a storage bucket in Supabase
2. Upload your images
3. Use the public URLs in the `image` array

### Option B: Keep images in your public folder

- Store images in `/public/assets/ProjectsPhotos/`
- Use relative paths like `/assets/ProjectsPhotos/getFit/logo.png` in the `image` array

## 7. Test the Setup

1. Start your development server: `pnpm dev`
2. Navigate to `/projects` to see your projects
3. Check the browser console for any errors

## Troubleshooting

- **Error: Missing Supabase environment variables**: Make sure your `.env.local` file exists and contains the correct values
- **Error: Failed to load projects**: Check that your Supabase table exists and has the correct structure
- **Images not loading**: Verify that image URLs are correct and accessible

## Notes

- The `image` field stores an array of image URLs (strings)
- The `tags` field stores an array of tag strings
- Make sure to update the Row Level Security policies if you need different access permissions
