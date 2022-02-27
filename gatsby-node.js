exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/",
    component: require.resolve("./src/pages/index.js"),
    context: {},
    defer: true,
  })
}

/**
 * createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
 */
