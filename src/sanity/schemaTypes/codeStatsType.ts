import { defineField, defineType } from "sanity";

export const codeStatsType = defineType({
  name: "codeStats",
  title: "Code Stats",
  type: "document",
  fields: [
    defineField({
      name: "statNumber",
      title: "Stat Number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "statTitle",
      title: "Stat Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "statDescription",
      title: "Stat Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "serialOrder",
      title: "Serial Order",
      type: "number",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "statNumber",
      subtitle: "statTitle",
      },
      prepare(select) {
          return {
              title: select.title,
              subtitle: select.subtitle,
          }
      }
  },
});