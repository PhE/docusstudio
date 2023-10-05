# \/metrics

A very simple prometheus metrics page
with a single metric :

```
pp_frontsite_up{build_date="2024-12-24",widgets_version="1.6.3"} 1.0
```

Labels provided:

* `build_date` is the date of the static build of the site.
* `widgets_version` is the version of the underlying paxpar-widgets library

The vmagent will add some more usefull labels
(domain, env).

Since the `metrics` file is statically generated at build time,
it will never change until a new version is published.


## TODO

* should we store the time in date ??
* add git hash (in case of several release per day)
* add version (in case of semantic release)
