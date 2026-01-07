import { defineField, defineType } from "sanity";

export const servicesType = defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Service Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "serialOrder",
      title: "Serial Order",
      type: "number",
      validation: (rule) => rule.required(),
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      serialOrder: "serialOrder",
    },
    prepare(select) {
      return {
        title: select.serialOrder + ". " + select.title,
        subtitle: select.subtitle,
      }
    }
  },
});
