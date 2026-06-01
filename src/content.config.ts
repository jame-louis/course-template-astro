import { defineCollection, z } from 'astro:content';
import { moduleNames, contentDefaults } from './config';

const lectures = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lectureNumber: z.number(),
    module: z.enum(moduleNames),
    description: z.string(),
    duration: z.string().default(contentDefaults.duration),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
    prerequisites: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    hasSlides: z.boolean().default(false),
    hasAssignment: z.boolean().default(false),
    slidevUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const assignments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    assignmentNumber: z.number(),
    lectureRef: z.string(),
    difficulty: z.enum(['easy', 'medium', 'hard']).default('medium'),
    submissionFormat: z.string().default(contentDefaults.submissionFormat),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  lectures,
  assignments,
};
