# Note: modernizr misses the main property in bower.json
# @see https://github.com/paulmillr/read-components#README
module.exports = config:
  paths:
    watched: ['app'] # vendor included by Brunch as bower_components
    public: 'public'
  files:
    javascripts:
      joinTo:
        'scripts/vendor.js': /^bower_components/
        'scripts/app.js': /^app/
      #order:
      #  before: [
      #    'bower_components/phaser/build/phaser.js'
      #  ]
      #  after: [
      #    'app/app.js'
      #  ]
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'scripts/templates.js'
  conventions:
    assets: /assets[\\/]/
  plugins:
    imageoptimizer:
      smushit: true,
      path: 'app/images/'
  server:
    run: 'yes'
    port: 4444