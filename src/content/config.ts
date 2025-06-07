import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
  }),
});

// Define the schema for experience data
const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    experiences: z.array(
      z.object({
        company: z.string(),
        role: z.string(),
        period: z.string(),
      })
    ),
    education: z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
    })
  })
});

// Define the schema for technical skills
const skillsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    skills: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string())
      })
    )
  })
});

// Define the schema for projects
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
    completed: z.date(),
    category: z.enum(['automation', 'testing', 'development']),
  })
});

// Export the collections
export const collections = {
  'blog': blogCollection,
  'experience': experienceCollection,
  'skills': skillsCollection,
  'projects': projectsCollection,
};
