#!/bin/bash
cat node_modules/lightweight-bootstrap/css/bootstrap.min.css <(echo) \
  node_modules/angular/angular-csp.css <(echo) \
  node_modules/font-awesome/css/font-awesome.min.css <(echo) \
  node_modules/animate.css/animate.min.css > dist/css/vendor.css
