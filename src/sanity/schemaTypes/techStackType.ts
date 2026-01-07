import { defineField, defineType } from "sanity";

export const techStackType = defineType({
    name: "techStack",
    title: "Tech Stack",
    type: "document",
    fields: [
        defineField({
            name: "techName",
            title: "Tech Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "techLogo",
            title: "Tech Logo",
            type: "image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "serialOrder",
            title: "Serial Order",
            type: "number",
            validation: (rule) => rule.required(),
        })
    ]
})