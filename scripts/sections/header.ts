$$("header") {
  $$("a.blog-logo") {
    inner("")
    insert("img", src: "https://s3.amazonaws.com/moovweb-apollo/logo.png")
  }
  $$("form.form-search") {
    $$("input") {
      attribute("placeholder", "Search here...")
    }
  }
}