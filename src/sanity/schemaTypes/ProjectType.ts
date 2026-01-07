// import { defineField, defineType } from "sanity";

// export const postType = defineType({
//   name: "projects",
//   title: "Projects",
//   type: "document",
//   fields: [
//     defineField({
//       name: "projectTitle",
//       title: "Project Title",
//       type: "string",
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "slug",
//       type: "slug",
//       options: { source: "projects" },
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "description",
//       title: "Description",
//       type: "string",
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "year",
//       title: "Year",
//       type: "number",
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "projectImage",
//       title: "Project Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "githubLink",
//       title: "GitHub Link",
//       type: "string",
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "liveLink",
//       title: "Live Link",
//       type: "string",
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: "serialOrder",
//       title: "Serial Order",
//       type: "number",
//       validation: (rule) => rule.required(),
//     }),
//   ],
// });