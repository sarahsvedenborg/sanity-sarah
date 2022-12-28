import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bookReview',
  title: 'Book review',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name of book',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Anthor',
      type: 'string',
    }),
    /*     defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }), */
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'blockContent',
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
