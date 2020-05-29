# profiler2-cockpit-application

experimental profiler2 webui for cockpit. this is very much a work in progress and not complete. use at your own risk.

useful docs link: https://cockpit-project.org/guide/latest/packages.html

# check installed cockpit packages

```
cockpit-bridge --packages
```

# basic app structure

```
/usr/share/cockpit/
    profiler2/
        manifest.json
        webui.html
        app.js
```

Look into symlinking your package to your `/usr/share/cockpit` directory that you would like to modify and develop.

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
