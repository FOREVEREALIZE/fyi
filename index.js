module.exports = (request, response) => {
  const { url } = request;
  const urlParts = url.split("/");
  
  if (url === "/test") {
    response.send("Hi!").end();
    return;
  }
  
  if (url === "/") {
    response.writeHead(302, {
      Location: `https://github.com/FOREVEREALIZE/fyi`,
    });

    response.end();
    return;
  }

  if (urlParts.length > 2) {
    // who cares? try anyways
  }

  const code = removeWeirdWindowsThing(removeQueryParam(urlParts.at(-1)));
  const name = maybeRedirect(removeMdExtension(code));

  response.writeHead(302, {
    Location: `https://github.com/FOREVEREALIZE/fyi/blob/master/docs/${[...urlParts.slice(1, -1), name].join("/")}.md`,
  });

  response.end();
};

// Remap names if needed
function maybeRedirect(name) {
  return name;
}

function removeQueryParam(text) {
  return text.split("?")[0];
}

function removeWeirdWindowsThing(text) {
  return text.replace("%E2%80%8B", "");
}

function removeMdExtension(text) {
  return text.replace(/\.md$/, "");
}
