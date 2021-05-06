export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6093da3cab2caabb59e37a7d",
                  title: "Sanity Studio",
                  name: "test-blog-gatsby-studio",
                  apiId: "2fb71b10-2f46-4c84-ae3d-94f82bb3de71",
                },
                {
                  buildHookId: "6093da3cc52759c2b4bd7b3b",
                  title: "Blog Website",
                  name: "test-blog-gatsby-web",
                  apiId: "2a17609f-a821-4c5f-949b-f7bb7fabc1e4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/digitalaksjon/test-blog-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://test-blog-gatsby-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
