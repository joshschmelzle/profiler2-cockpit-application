# profiler2-cockpit-application

experimental profiler2 webui for cockpit.

docs here: https://cockpit-project.org/guide/latest/packages.html

# check installed cockpit packages

```
cockpit-bridge --packages
```

# basic app structure

```
/usr/share/cockpit/
    my-package/
        manifest.json
        webui.html
        app.js
```

Look into symlinking your package to your `~/.local/share/cockpit` directory that you would like to modify and develop.

# html script gotcha

This is important to have in your `.html`:

```
<script src="../base1/cockpit.js"></script>
```

# basic manifest example

```
{
  "version": 0,
  "require": {
      "cockpit": "120"
  },
  "tools": {
     "profiler2": {
        "label": "profiler2",
        "path": "file.html"
     }
  }
}
```
