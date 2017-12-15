var Attendant = require('turndown-attendant')
var TurndownService = require('turndown')
var gfm = require('../lib/turndown-plugin-gfm.cjs').gfm

var attendant = new Attendant({
  file: __dirname + '/index.html',
  TurndownService: TurndownService,
  beforeEach: function (turndownService) {
    turndownService.use(gfm)
  }
})

attendant.run()
